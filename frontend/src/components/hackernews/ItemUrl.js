import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

function extractHostname(url) {
    // console.log(url)
  const { hostname } = new URL(url);
  return hostname;
}


TimeAgo.addDefaultLocale(en);
const psl = require('psl');


function ItemUrl(props) {
  const { item } = props;
  // console.log(typeof item[10]);
  // console.log(item[10]);

  if (item[10] == null) {
    return (
      <span>
        <a
          href={`https://news.ycombinator.com/item?id=${item[0]}`}
          className="storylink"
        >
          {item[12]}
        </a>
      </span>
    );
  }

  return (
    <span>
      <a
        href={item[10]}
        className="storylink"
      >
        {item[12]}
      </a>
      <span className="sitebit comhead">
        {' '}
        (
        <a href={`from?site=${psl.get(extractHostname(item[10]))}`}>
          <span className="sitestr">{psl.get(extractHostname(item[10]))}</span>
        </a>
        )
      </span>
    </span>
  );
}

export default ItemUrl;
