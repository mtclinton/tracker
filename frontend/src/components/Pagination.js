import React from 'react';



function Pagination(props) {
  const { page, pages, type } = props;

  if (pages < 7){
      return (
          <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
              <a href={'/hackernews'+type} className="pagination-previous" disabled={page===1}>Previous</a>
              <a href={'/hackernews'+type+'/2'} className="pagination-next" disabled={page===pages}>Next</a>
              <ul className="pagination-list">
                  {Array.from({ length: pages }, (_, i) =>
                            <li><a href={'/hackernews'+type+'/'+i} className={`pagination-link ${(page===i) ? "is-current" :''}`} aria-label={`Goto page ${i}`}>{i}</a></li>
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
                  <li><a href={'/hackernews'+type} className={`pagination-link ${(page===1) ? "is-current" :''}`} aria-label="Goto page 1">1</a></li>
                  <li><a href={'/hackernews'+type+'/2'} className={`pagination-link ${(page===2) ? "is-current" :''}`} aria-label="Goto page 2">2</a></li>
                  <li><a href={'/hackernews'+type+'/3'} className={`pagination-link ${(page===3) ? "is-current" :''}`} aria-label="Goto page 3">3</a></li>
                  <li><a href={'/hackernews'+type+'/4'} className={`pagination-link ${(page===4) ? "is-current" :''}`} aria-label="Goto page 4">4</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a href={'/hackernews'+type+'/'+(pages-1)} className="pagination-link" aria-label={`Goto page ${pages-1}`}>{pages-1}</a></li>
                  <li><a href={'/hackernews'+type+'/'+pages} className="pagination-link" aria-label={`Goto page ${pages}`}>{pages}</a></li>
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
                  <li><a href={'/hackernews'+type} className="pagination-link" aria-label="Goto page 1">1</a></li>
                  <li><a href={'/hackernews'+type+'/2'} className="pagination-link" aria-label="Goto page 2">2</a></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><span className="pagination-ellipsis">&hellip;</span></li>
                  <li><a href={'/hackernews'+type+'/'+(pages-3)} className={`pagination-link ${(page===(pages-3)) ? "is-current" :''}`} aria-label={`Goto page ${pages-3}`}>{pages-3}</a></li>
                  <li><a href={'/hackernews'+type+'/'+(pages-2)} className={`pagination-link ${(page===(pages-2)) ? "is-current" :''}`} aria-label={`Goto page ${pages-2}`}>{pages-2}</a></li>
                  <li><a href={'/hackernews'+type+'/'+(pages-1)} className={`pagination-link ${(page===(pages-1)) ? "is-current" :''}`} aria-label={`Goto page ${pages-1}`}>{pages-1}</a></li>
                  <li><a href={'/hackernews'+type+'/'+pages} className={`pagination-link ${(page===pages) ? "is-current" :''}`} aria-label={`Goto page ${pages}`}>{pages}</a></li>
              </ul>
          </nav>
      )
  }

  return (
      <nav className="pagination is-rounded is-centered" role="navigation" aria-label="pagination">
          <a className="pagination-previous" disabled={page===1}>Previous</a>
          <a className="pagination-next" disabled={page===pages}>Next</a>
          <ul className="pagination-list">
              <li><a href={'/hackernews'+type} className="pagination-link" aria-label="Goto page 1">1</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a href={'/hackernews'+type+'/'+(page-1)} className={`pagination-link`} aria-label={`Goto page ${page-1}`}>{page-1}</a></li>
              <li><a href={'/hackernews'+type+'/'+page} className={`pagination-link is-current`} aria-label={`Goto page ${page}`}>{page}</a></li>
              <li><a href={'/hackernews'+type+'/'+(page+1)} className={`pagination-link`} aria-label={`Goto page ${page+1}`}>{page+1}</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a href={'/hackernews'+type+'/'+pages} className="pagination-link" aria-label={`Goto page ${pages}`}>{pages}</a></li>
          </ul>
      </nav>
  );
  //   return(<div>page</div>)
}

export default Pagination;
