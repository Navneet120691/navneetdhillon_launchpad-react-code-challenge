import { useState } from "react";
import axios from "axios";

const NewPost = () => {
const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [userId, setUserId] = useState("");

const handleSubmit = (e) => {
e.preventDefault();

const post = {
title: title,
body: body,
userId: Math.ramdom() * 10,
};

if (title !== null && body !== null && userId !== null) {
axios
.post("https://jsonplaceholder.typicode.com/posts", post)
.then((response) => {
if (response.status === 200) {
console.log("success");
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
<input
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
onChange={(e) => setTitle(e.target.value)}
/>
</label>
<button>Submit Post</button>
</form>
);
};

export default NewPost;