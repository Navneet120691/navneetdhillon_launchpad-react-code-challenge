import { useState, useEffect} from 'react';
import axios from 'axios';
import FormModal from '../../components/Modal/Modal';
import NewPost from '../../components/NewPost/NewPost';
import EditPost from '../../components/EditPost/EditPost';

const Home = () => {
  const [posts, setPosts] = useState("");
  const [postId, setPostId] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [form, setForm] = useState("");
  
  useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20")
  .then((data) => {
  setPosts(data.data);
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
  
  const handleEdit = (id, title, body) => {
  setOpenEdit(true);
  setForm(
  <EditPost
  id={id}
  posts={posts}
  post={{ title, body }}
  setPosts={setPosts}
  />
  );
  };
  
  const createPost = () => {
  setOpenNew(true);
  setForm(<NewPost />);
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
  <button className="new-post" onClick={createPost}>
  Create New Post
  </button>
  <div className="post-container">
  {posts &&
  posts.map((post) => (
  <div key={post.id} className="post">
  <div className="title">{post.id}</div>
  <div className="title">{post.title}</div>
  <div className="body">{post.body}</div>
  <div style={{ display: "flex", marginTop: "10px" }}>
  <button
  className="edit"
  style={{ marginRight: "2px" }}
  onClick={() => handleEdit(post.id, post.title, post.body)}
  >
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
  
  <FormModal show={openEdit} close={() => setOpenEdit(false)} form={form} />
  <FormModal show={openNew} close={() => setOpenNew(false)} form={form} />
  </>
  );
  };
  
  export default Home;