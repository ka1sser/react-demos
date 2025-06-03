import React from 'react';
import {useState, useEffect} from 'react';

const FetchDataEffect = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()

            setData(data)
        }

        getData();
    })

    return(
        <div>
            <ul>
                {data.map(posts => (
                    <section key={posts.id}>
                        <li>
                            <span>TITLE: {posts.title}</span>
                            <br/>
                            <span>BODY: {posts.body}</span>
                        </li>
                        <br/>
                    </section>
                ))};
            </ul>
        </div>
    );
}

export default FetchDataEffect; 