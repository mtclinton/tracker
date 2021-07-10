import React, {useEffect, useState} from 'react';
import TimeAgo from 'javascript-time-ago';

import ItemUrl from './ItemUrl';

const BASE_API_URL = 'http://localhost:5000';


// Create formatter (English).
const timeAgo = new TimeAgo('en-US');


function Item(props) {

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(props.item);

  useEffect(() => {
    setItem(props.item);
    setLoading(false);
  }, [props.item])

  const sendUnstar = async (id)  => {
    try {
        let request = `${BASE_API_URL}/hn/unstar/${id}`;

        return fetch(request).then((response) => {
            return response.json().then((data) => {
                return data.message;
            });
        });

    } catch (error) {
        console.log(error);
        return 0;
    }

  };

  const sendStar = async (id)  => {
    try {
        let request = `${BASE_API_URL}/hn/star/${id}`;

        return fetch(request).then((response) => {
            return response.json().then((data) => {
                return data.message;
            });
        });

    } catch (error) {
        console.log(error);
        return 0;
    }

  };

  const sendDelete = async (id)  => {
    try {
        let request = `${BASE_API_URL}/hn/delete/${id}`;

        return fetch(request).then((response) => {
            return response.json().then((data) => {
                return data.message;
            });
        });

    } catch (error) {
        console.log(error);
        return 0;
    }

  };

  function unstar() {

    async function getUnstarred() {
        return await sendUnstar(item[0]);
    }


    const r=getUnstarred();
    if (r !== 1){
        return 'unstar error'
    }

    let itemcopy = item;
    itemcopy[21] = 0;
    setItem(...itemcopy)
    console.log(item[21])

  }

  function star() {

    async function getStarred() {
        return await sendStar(item[0]);
    }

    // add error testing on get starred
    getStarred();

    let itemcopy = item;
    itemcopy[21] = 1;
    setItem([...itemcopy])
    console.log(item[21])

  }

  function trash() {

    async function sendTrash() {
        return await sendDelete(item[0]);
    }

    // add error testing on senddelete
    sendTrash();


  }


  return (
      <div className="story">
        {
          loading && <div>Loading</div>
        }
        {
          !loading
          &&
          <>
            <div className="athing" id={item[0]}>
                <span className="title">
                  <ItemUrl item={item}/>
                </span>
             <span onClick={(event) => trash()}> <i className="trash fas fa-trash-alt"></i></span>
            </div>
            <div>
              <span className="subtext" style={{paddingLeft: '20px'}}>
                {item[21] ?
                    <span onClick={(event) => unstar()}><i className="star fas fa-star"></i> </span> :
                    <span onClick={(event) => star()}><i className="star far fa-star"></i> </span>
                }

                <span className="score" id="score_27089576">
                  {item[11]}
                  {' '}
                  points
                </span>
                {' '}
                by
                <a href={`https://news.ycombinator.com/user?id=${item[3]}`} className="hnuser">
                  {item[3]}
                  {' '}
                </a>
                <span className="age">
                  <a href={`https://news.ycombinator.com/item?id=${item[0]}`}>
                    {timeAgo.format(new Date(item[4] * 1000))}
                  </a>
                </span>
                <span id="unv_27089576"/>
                {' '}
                |
                {' '}
                <a href="hide?id=27089576&amp;goto=news%3Fp%3D3">hide</a>
                {' '}
                |
                {' '}
                <a href={`https://news.ycombinator.com/item?id=${item[0]}`}>
                  {item[14]}
                  {' '}
                  comments
                </a>
              </span>
            </div>
            <div className="spacer" style={{height: '5px'}}/>
          </>


        }

      </div>
  );
}

export default Item;
