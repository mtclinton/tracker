import React, {useEffect, useState} from 'react';
import TimeAgo from 'javascript-time-ago';

import ItemUrl from './ItemUrl';

const BASE_API_URL = 'http://localhost:5000';


// Create formatter (English).
const timeAgo = new TimeAgo('en-US');


function EditItem(props) {

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(props.item);

  useEffect(() => {
    setItem(props.item);
    setLoading(false);
  }, [props.item])


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
            </div>
            <div>
              <span className="subtext" style={{paddingLeft: '20px'}}>


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

export default EditItem;
