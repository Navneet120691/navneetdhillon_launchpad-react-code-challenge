import { useState } from "react";
import axios from "axios";
import './NewPost.css'
const NewPost = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [userId, setUserId] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

const post = {
title: title,
body: body,
userId: Math.random() * 10,
};

if (title !== null && body !== null && userId !== null) {
axios
.post("https://jsonplaceholder.typicode.com/posts", post)
.then((response) => {
if (response.status === 201) {
console.log("STATUS: ", response.status);
setTitle("");
setBody("");
} else {
console.log("post not succesful");
}
})
.catch((error) => console.log(error));
}
};

return (
<form onSubmit={handleSubmit}>
<label>
<p>Title:</p>
<input class="inputpost"
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</label>
<label>
<p>Body:</p>
<input
type="text"
value={body}
onChange={(e) => setBody(e.target.value)}
/>
</label><br></br>
<label><button className="submit">Submit Post</button></label>
</form>
);
};

export default NewPost;
