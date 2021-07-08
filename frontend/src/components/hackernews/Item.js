import React from 'react';
import TimeAgo from 'javascript-time-ago';

import ItemUrl from './ItemUrl';


// Create formatter (English).
const timeAgo = new TimeAgo('en-US');


function Item(props) {
  const { item } = props;

  return (
    <div className="story">
      <div className="athing" id={item[0]}>
        <span className="title">
          <ItemUrl item={item} />
        </span>
        <i className="trash fas fa-trash-alt"></i>
      </div>
      <div>
        <span className="subtext" style={{ paddingLeft: '20px' }}>
          {item[21] ? <i className="star fas fa-star"></i> : <i className="star far fa-star"></i>}
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
          <span id="unv_27089576" />
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
      <div className="spacer" style={{ height: '5px' }} />
    </div>
  );
}

export default Item;
