import React, { useEffect, useState } from 'react';
import Nav from "../components/nav";
import Sidebar from "../components/hackernews/sidebar";
import TopWorkNav from "../components/hackernews/top_work_nav";
// import Thread from "../components/Thread";
import Pagination from "../components/Pagination";
import getPageNumber from "../util/pageNumber";

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
            <div className="container">
                <div className="columns">
                    <div className="column is-3 ">
                        <Sidebar match={match}/>
                    </div>

                    <div className="column is-9">
                        <TopWorkNav match={match}/>
                        <div className=''>
                            {
                                loading && <div>Loading</div>
                            }
                            {
                                !loading
                                && threads.map((thread, i) => (
                                    <div><img src={"https://i.4cdn.org/g/1626146637941s.jpg"} /></div>
                                        // <Thread
                                        //     key={thread[0]}
                                        //     item={thread}
                                        // />
                                    )
                                )
                            }
                        </div>
                        <div style={{margin: "50px 0px"}}>
                            <Pagination page={getPageNumber(match.params.page)} pages={pages} type={''}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default FourChan;