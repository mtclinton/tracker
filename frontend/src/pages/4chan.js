import React, { useEffect, useState } from 'react';
import Nav from "../components/nav";
import Sidebar from "../components/hackernews/sidebar";
import TopWorkNav from "../components/hackernews/top_work_nav";
// import Thread from "../components/Thread";
import Pagination from "../components/Pagination";
import getPageNumber from "../util/pageNumber";
import Item from "../components/hackernews/Item";

const BASE_API_URL = 'http://localhost:5000';

const fetchThreads = async (page)  => {
    try {
        let request = `${BASE_API_URL}/4chan/threads/${page}`;

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

function FourChan(props) {

    const { match } = props;

    const [loading, setLoading] = useState(true);
    const [threads, setThreads] = useState([])
    const [pages, setPages] = useState([])

    useEffect(() => {
        if(threads.length !== 0 ) return
        setLoading(true);
        async function getThreads() {
            setThreads(await fetchThreads(getPageNumber(match.params.page)))
            // setQuestions();
            setLoading(false);
        }

        // async function getPages() {
        //     setPages(await fetchPages())
        // }

        getThreads();
        // getPages();

    }, [threads]);

    return (
        <div>
            <Nav/>
            <div id="content">
               <div id="threads" className="extended-small">

                   {
                        loading && <div>Loading</div>
                    }
                    {
                        !loading
                        && threads.sort((a, b) => (a.replies < b.replies) ? 1 : -1).map((thread, i) => (
                                <div id={`thread-${thread['no']}`} className="thread">
                                            <a href={`//boards.4chan.org/g/thread/${thread['no']}`}>
                                                <img loading="lazy" alt=""
                                                   id={`thumb-${thread['no']}`}
                                                   className="thumb" width={thread['tn_w'] > thread['tn_h']? '150' : (150/thread['tn_h'])*thread['tn_w']}
                                                   height={thread['tn_h'] > thread['tn_w']? '150' :(150/thread['tn_w'])*thread['tn_h']}
                                                   src={`//i.4cdn.org/g/${thread['tim']}s.jpg`}
                                                   data-id={`${thread['no']}`}/>
                                            </a>
                                            <div title="(R)eplies / (I)mage Replies" id={`meta-${thread['no']}`} className="meta">
                                                <i>R: <b>{thread['replies']}</b></i> / I: <b>{thread['images']}</b>
                                            <div className="teaser">
                                                {thread['sub']  && <b>{thread['sub']
                                                    .replaceAll('&gt;', '>')
                                                    .replaceAll('<span class="quote">&gt;', '>')
                                                    .replaceAll("&#039;", "'")}:</b>}

                                                {thread['com'] && thread['com']
                                                    .replaceAll('<span class="quote">&gt;', '>')
                                                    .replaceAll("&#039;", "'")
                                                    .replaceAll("</span><br>", "")
                                                    .replaceAll("<br><br>", "")
                                                    .replaceAll("<br>", "")
                                                    .replaceAll("</span>", "")}


                                            </div>
                                        </div>
                               </div>
                              )
                        )
                    }



               </div>
            </div>


        </div>
    );
}

export default FourChan;