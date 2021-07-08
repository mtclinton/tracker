import React, { useEffect, useState } from 'react';

import Sidebar from "../components/hackernews/sidebar";
import Nav from "../components/nav";
import TopWorkNav from "../components/hackernews/top_work_nav";
import Item from "../components/hackernews/Item";
import getPageNumber from "../util/pageNumber";

import ReactPaginate from 'react-paginate';
import Pagination from "../components/Pagination";


const BASE_API_URL = 'http://localhost:5000';

const fetchStories = async (page)  => {
    try {
        let request = `${BASE_API_URL}/hn/front/${page}`;

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

function Hackernews(props) {
    const { match } = props;

    const [loading, setLoading] = useState(true);
    const [stories, setStories] = useState([])

    useEffect(() => {
        if(stories.length !== 0 ) return
        console.log('calling use effect')
        setLoading(true);
        async function getStories() {
            setStories(await fetchStories(getPageNumber(match.params.page)))
            // setQuestions();
            setLoading(false);
        }

        getStories();

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
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Hackernews;