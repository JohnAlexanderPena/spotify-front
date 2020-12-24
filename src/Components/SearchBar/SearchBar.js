import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div style={{ marginLeft: "13%", paddingTop: "5px" }}>
      <input
        style={{
          height: 30,
          //   width: "100%",
          borderColor: "gray",
          borderWidth: 2,
          borderRadius: 20,
          marginBottom: 20,
          fontSize: 18,
        }}
        placeholder="  Search"
      />
    </div>
  );
};

export default SearchBar;

{
  /* <div className="input-group mb-3" style={{ borderRadius: "100px" }}>
        <div className="input-group-prepend">
          <svg
            aria-hidden="true"
            class="s-input-icon s-input-icon__search svg-icon iconSearch"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path>
          </svg>
        </div>
      </div> */
}
