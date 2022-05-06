import { useState, useEffect} from 'react';
import axios from 'axios';
const Home = () => {
const [posts, setPosts] = useState("");
const [postId, setPostId] = useState("");
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20").then ((data) => {
        setPosts(data.data)
    });
}, []);
const handleSearch = (e) => {
  e.preventDefault();
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((data) => setPosts([data.data]));
  };
  
return (
  <>
  <form onSubmit={handleSearch}>
<label>
<span>Search</span>
<input
type="text"
value={postId}
onChange={(e) => setPostId(e.target.value)}
/>
</label>
<button>Search Post</button>
</form>
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
    </>
  );
};
 
export default Home;