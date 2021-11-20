import React, { useEffect, useState } from "react";
import "./App.css";
import { post } from "./api/api";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

export default function App() {
  const [sortBy, setSortBy] = useState("view");
  const [ascDesc, setAscDesc] = useState(false);
  const [tableRows, setTableRows]: any[] = useState([]);
  const tableHeaders = ["path", "view", "uniqueView"];

  useEffect(() => {
    post("webpageviews", { sortBy, order: ascDesc ? "asc" : "desc" }).then(
      (data) => {
        setTableRows(data || []);
      }
    );
  }, [sortBy, ascDesc]);

  const sortByHeader = (header: string, ascDesc: boolean) => {
    setSortBy(header);
    setAscDesc(ascDesc);
  };

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {tableHeaders.map((header, idx) => (
                <TableCell key={idx}>
                  {header}
                  {header !== "path" && (
                    <button
                      key={idx}
                      onClick={() => sortByHeader(header, !ascDesc)}
                    >
                      ascDesc
                    </button>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row: any, idx: number) => (
              <TableRow key={idx} style={{ border: 0 }}>
                <TableCell component="th" scope="row">
                  {row.path}
                </TableCell>
                <TableCell>{row.view}</TableCell>
                <TableCell>{row.uniqueView}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
