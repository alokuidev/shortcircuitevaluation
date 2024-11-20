import { useEffect, useState } from 'react';
import './News.css';

export const News = () =>{
    const [news,fetchNews] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => fetchNews(data))
    .catch((err)=> console.log(err))
    },[])

    
    

    return(
        <>
        
    <div className="news-container">
          {news.map((currNews) =>{
            return (
                
                
    <div className="news-card" key={currNews.id}>
      <div className="news-header">
        <span className="user-id">User ID: {currNews.userId}</span>
        <span className="news-id">ID: {currNews.id}</span>
      </div>
      <h3 className="news-title">{currNews.title}</h3>
      <p className="news-desc">
        {currNews.body}
      </p>
    </div>
    
)
    })}
   
  </div>
        </>
    )
}

