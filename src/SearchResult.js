import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import ItemContent from "./ItemContent";
import './SearchResult.css';

function SearchResult() {
  return (
    <div className="searchResult">
      <Header />
      <div className="content">
        <Sidebar />
        <ItemContent />
      </div>
    </div>
  );
}

export default SearchResult;
