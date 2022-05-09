import { useState, useEffect } from "react";
import axios from "axios";
import './Universities.css'

const Universities = () => {
const [universities, setUniversities] = useState("");
const [countries, setCountries] = useState("");
const [country, setCountry] = useState({ name: "Canada" });

useEffect(() => {
axios
.get("https://countriesnow.space/api/v0.1/countries/info?returns=none")
.then((data) => {
console.log("Countries: ", data.data.data);
setCountries(data.data.data);
});
axios
.get(`http://universities.hipolabs.com/search?country=${country.name}`)
.then((data) => {
setUniversities(data.data);
});
}, [country]);

console.log("Country: ", country);

const handleSelect = (e) => {
setCountry({ name: e.target.value });
};

const renderDropdown = () => {
return (

<div className="select-container">
<h2 className="heading">Select University From Dropdown</h2>
<select className="dropdown" value={country.name} onChange={handleSelect}>
{countries &&
countries.map((country) => (
<option value={country.name}>{country.name}</option>
))}
</select>
</div>
);
};

return (
<>
{renderDropdown()}
<div className="universities-container">
{universities && universities.length > 0 ? (
universities.map((university) => (
<div key={university.name} className="university">
<div className="alpha">
{" "}
Alpha Code: {university.alpha_two_code}
</div>
<div className="name"> Name: {university.name}</div>
{/* <div className="province">{university.state - province}</div> */}
<div className="country">Country: {university.country}</div>
{university.domains.map((domain) => (
<div className="domin">{domain}</div>
))}
{university.web_pages.map((page) => (
<div className="country">{page}</div>
))}
</div>
))
) : (
<h3>No Universities found for the selected country</h3>
)}
</div>
</>
);
};

export default Universities;