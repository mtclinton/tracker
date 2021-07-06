import React, { useEffect, useState } from 'react';

import Sidebar from "../components/hackernews/sidebar";
import Nav from "../components/nav";
import TopWorkNav from "../components/hackernews/top_work_nav";
import Item from "../components/hackernews/Item";

const BASE_API_URL = 'http://localhost:5000';

const fetchStories = async ()  => {
    try {
        let request = `${BASE_API_URL}/hn/front`;

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
            setStories(await fetchStories())
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
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Hackernews;