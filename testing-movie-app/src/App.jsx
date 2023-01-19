import axios from "axios"
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Header, Pagination, Loader, URL, api_key, MoviesList, Error, SearchBar } from "./components";

export default function App() {

  return (
    <div className="main">
      <Header />

      <SearchBar  />

     {/* only one at a time : <Loader /> or <Error /> or <MoviesList /> */}

      <Pagination />
    </div>
  );
}
