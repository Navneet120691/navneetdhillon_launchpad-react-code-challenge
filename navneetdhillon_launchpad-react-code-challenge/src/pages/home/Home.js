import { useState, useEffect} from 'react';
import Axios from "axios";
import axios from 'axios';
const Home = () => {
const [posts, setPosts] = useState("");
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20").then ((data) => {
        setPosts(data.data)
    });
}, [posts]);
return (
    <div className="post-container">
      {posts &&
        posts.map((post) => (
          <div key={post.id} className="post">
               <div className="id">{post.id}</div>
            <div className="title">{post.title}</div>
            <div className="body">{post.body}</div>
          </div>
        ))}
    </div>
  );
};
 
export default Home;