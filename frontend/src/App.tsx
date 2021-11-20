import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { get, post } from "./api/api";

export default function App() {
  const [sortBy, setSortBy] = useState("view");
  const [order, setOrder] = useState("desc");
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    post("webpageviews", { sortBy, order }).then((data) => {
      setTableData(data || []);
    });
  }, [sortBy, order]);

  console.log("==tableData==", tableData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
