import React from 'react';



function Pagination(props) {
  const { page, pages } = props;

  if (pages < 7){
      return (
          <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
              <a className="pagination-previous" disabled={page===1}>Previous</a>
              <a className="pagination-next" disabled={page===pages}>Next</a>
              <ul className="pagination-list">
                  {Array.from({ length: pages }, (_, i) =>
                            <li><a className={`pagination-link ${(page===i) ? "is-current" :''}`} aria-label={`Goto page ${i}`}>{i}</a></li>
                  )}

              </ul>
          </nav>
      )
  }

  if(page < 5){
      return (
          <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
              <a className="pagination-previous" disabled={page===1}>Previous</a>
              <a className="pagination-next" disabled={page===pages}>Next</a>
              <ul className="pagination-list">
                  <li><a className={`pagination-link ${(page===1) ? "is-current" :''}`} aria-label="Goto page 1">1</a></li>
                  <li><a className={`pagination-link ${(page===2) ? "is-current" :''}`} aria-label="Goto page 2">2</a></li>
                  <li><a className={`pagination-link ${(page===3) ? "is-current" :''}`} aria-label="Goto page 3">3</a></li>
                  <li><a className={`pagination-link ${(page===4) ? "is-current" :''}`} aria-label="Goto page 4">4</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a className="pagination-link" aria-label={`Goto page ${pages-1}`}>{pages-1}</a></li>
                  <li><a className="pagination-link" aria-label={`Goto page ${pages}`}>{pages}</a></li>
              </ul>
          </nav>
      )
  }

  if((pages-page) < 4){
      return (
          <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
              <a className="pagination-previous" disabled={page===1}>Previous</a>
              <a className="pagination-next" disabled={page===pages}>Next</a>
              <ul className="pagination-list">
                  <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                  <li><a className="pagination-link" aria-label="Goto page 2">2</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a className={`pagination-link ${(page===(pages-3)) ? "is-current" :''}`} aria-label={`Goto page ${pages-3}`}>{pages-3}</a></li>
                  <li><a className={`pagination-link ${(page===(pages-2)) ? "is-current" :''}`} aria-label={`Goto page ${pages-2}`}>{pages-2}</a></li>
                  <li><a className={`pagination-link ${(page===(pages-1)) ? "is-current" :''}`} aria-label={`Goto page ${pages-1}`}>{pages-1}</a></li>
                  <li><a className={`pagination-link ${(page===pages) ? "is-current" :''}`} aria-label={`Goto page ${pages}`}>{pages}</a></li>
              </ul>
          </nav>
      )
  }

  return (
      <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
          <a className="pagination-previous" disabled={page===1}>Previous</a>
          <a className="pagination-next" disabled={page===pages}>Next</a>
          <ul className="pagination-list">
              <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a className={`pagination-link`} aria-label={`Goto page ${pages-1}`}>{pages-1}</a></li>
              <li><a className={`pagination-link is-current`} aria-label={`Goto page ${pages}`}>{pages}</a></li>
              <li><a className={`pagination-link`} aria-label={`Goto page ${pages+1}`}>{pages+1}</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
          </ul>
      </nav>
  );
  //   return(<div>page</div>)
}

export default Pagination;
