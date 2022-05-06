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
 
  const handleDelete = (id) => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((data) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    });
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
            <div style={{ display: "flex", marginTop: "10px" }}>
<button className="edit" style={{ marginRight: "2px" }}>
Edit
</button>
<button
className="delete"
onClick={() => handleDelete(post.id)}
>
Delete
</button>
</div>

          </div>
        ))}
    </div>
    </>
  );
};
 
export default Home;