import React, { useEffect, useState } from 'react';

import Sidebar from "../components/hackernews/sidebar";
import Nav from "../components/nav";
import TopWorkNav from "../components/hackernews/top_work_nav";
import Item from "../components/hackernews/Item";
import getPageNumber from "../util/pageNumber";

import Pagination from "../components/Pagination";


const BASE_API_URL = 'http://localhost:5000';

const fetchStories = async (page)  => {
    try {
        let request = `${BASE_API_URL}/hn/show/${page}`;

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


const fetchPages = async ()  => {
    try {
        let request = `${BASE_API_URL}/hn/pages/show_rank`;

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

function ShowHackernews(props) {
    const { match } = props;

    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([])
    const [pages, setPages] = useState([])

    useEffect(() => {
        if(stories.length !== 0 ) return
        console.log('calling use effect')
        setLoading(true);
        async function getStories() {
            setStories(await fetchStories(getPageNumber(match.params.page)))
            // setQuestions();
            setLoading(false);
        }

        async function getPages() {
            setPages(await fetchPages())
        }

        getStories();
        getPages();

    }, [stories]);

    return (
        <div>
            <Nav />
            <div class="container">
                <div class="columns">
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
                                && stories.map((item, i) => (
                                        <Item
                                          key={item[0]}
                                          item={item}
                                        />
                                      )
                                )
                            }
                        </div>
                        <div style={{margin:"50px 0px"}}>
                            <Pagination page={getPageNumber(match.params.page)} pages={pages} type={'/show'}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default ShowHackernews;