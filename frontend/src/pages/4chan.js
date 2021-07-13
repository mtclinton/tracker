import React, { useEffect, useState } from 'react';
import Nav from "../components/nav";
import Sidebar from "../components/hackernews/sidebar";
import TopWorkNav from "../components/hackernews/top_work_nav";
import Item from "../components/hackernews/Item";
import Pagination from "../components/Pagination";
import getPageNumber from "../util/pageNumber";

const BASE_API_URL = 'http://localhost:5000';


function FourChan(props) {

    const { match } = props;

    const [loading, setLoading] = useState(true);
    const [threads, setThreads] = useState([])
    const [pages, setPages] = useState([])

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
                                        <Item
                                            key={thread[0]}
                                            item={thread}
                                        />
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