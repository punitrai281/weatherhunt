import React, { useState } from "react";
import axios from "axios";
function Searchbox(props) {
  const [inputValue, setInputValue] = useState("");
  function handleInput(prop) {
    setInputValue(prop.target.value);
  }
  let input = {
    city: inputValue,
  };
  console.log(inputValue);
  function handleSearch() {
    axios.post("/", input).then((res) => {
      props.setData(res.data);
    });
  }
  return (
    <div className="search-bar">
      <form>
        <input
          name="city"
          className="search-box"
          type="text"
          placeholder="Search City"
          onChange={handleInput}
          value={inputValue}
        />
        <i className="fas fa-search search-icon" onClick={handleSearch}></i>
      </form>
    </div>
  );
}
export default Searchbox;
