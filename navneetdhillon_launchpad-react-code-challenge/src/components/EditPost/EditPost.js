import { useState } from "react";
import axios from "axios";

const EditPost = ({ id, post, posts, setPosts }) => {
const [postTitle, setPostTitle] = useState(post.title);
const [postBody, setPostBody] = useState(post.body);

const handleSubmit = (e) => {
e.preventDefault();

const newPost = {
title: postTitle,
body: postBody,
};

if (newPost.title !== null && newPost.body !== null) {
axios
.put(`https://jsonplaceholder.typicode.com/posts/${id}`, newPost)
.then((response) => {
console.log("RESPONSE: ", response.data);
const remainingPosts = posts.filter((post) => post.id !== id);
setPosts(
[...remainingPosts, response.data].sort((a, b) => a.id - b.id)
);
})
.catch((error) => {
throw new Error(error);
});
}
};

return (
<form onSubmit={handleSubmit}>
<label>
<p>Title:</p>
<input
type="text"
value={postTitle}
onChange={(e) => setPostTitle(e.target.value)}
/>
</label>
<label>
<p>Body:</p>
<input
type="text"
value={postBody}
onChange={(e) => setPostBody(e.target.value)}
/>
</label>
<button>Submit</button>
</form>
);
};

export default EditPost;
