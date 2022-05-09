import { useState } from "react";
import axios from "axios";

const PostalLookup = () => {
const [code, setCode] = useState("");
const [area, setArea] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
axios.get(`https://api.zippopotam.us/us/${code} `).then((data) => {
setArea(data.data);
});
};

return (
<div>

<h2 className="heading">Search US Postal Code to see Area Details</h2>
<form onSubmit={handleSubmit} class="search-bar">
  <input type="search" placeholder='Search by Postal Code' value={code}
onChange={(e) => setCode(e.target.value)}
/>
  <button class="search-btn" type="submit">
    <span>Search</span>
  </button>
</form>


{/* <form onSubmit={handleSubmit}>
<label>
<input
type="text"
value={code}
onChange={(e) => setCode(e.target.value)}
/>
</label>
<button>Search</button>
</form> */}
{area && (
<div className="area">
<h2 className="country">{area.country}</h2>
{area.places.map((place) => (
<div key={place.latitude}>
<div className="longitude">Longitude: {place.longitude}</div>
<div className="latitude">Latitude: {place.latitude}</div>
<div className="state">State: {place.state}</div>
</div>
))}
</div>
)}
</div>
);
};

export default PostalLookup;