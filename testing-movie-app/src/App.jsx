import axios from "axios"
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Header, Pagination, Loader, URL, api_key, MoviesList, Error, SearchBar } from "./components";

export default function App() {
  /* on first website load this page should contains search result of 'Spiderman' & page no=1 */
  return (
    <div className="main">
      <Header />

      <SearchBar />

      {/* only one at a time : <Loader /> or <Error /> or <MoviesList /> */}

      <Pagination />
    </div>
  );
}
