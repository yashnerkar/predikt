import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function createData(name, age, gender, lastVisit, report) {
  return { name, age, gender, lastVisit, report };
}

const rows = [
  createData("Samantha Desai", "8 months", "Female", "25-03-2022"),
  createData("Rashmi Khanna", "5 months", "Female", "21-02-2022"),
  createData("Amisha Patel", "9 months", "Female", "15-02-2022"),
  createData("Yash Gupta", "3 months", "Male", "10-01-2022"),
];

export default function BasicTable() {
  return (
    <div
      style={{
        height: "60vh",
        width: "90vw",
        overflowY: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflowX: "hidden",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px"
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="fw-bold">Patient's Name</TableCell>
              <TableCell className="fw-bold" align="center">
                Age
              </TableCell>
              <TableCell className="fw-bold" align="center">
                Gender
              </TableCell>
              <TableCell className="fw-bold" align="center">
                Last Visit
              </TableCell>
              <TableCell className="fw-bold" align="center">
                Report
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.lastVisit}</TableCell>
                <TableCell align="center"><div className="mt-1">
                  <a href="files/report.pdf" style={{textDecoration: "none"}} download>
                    <Button
                      type="submit"
                      // fullWidth
                      // style={{bgcolor}}
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{
                        borderRadius: "50px",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        minWidth: "100px",
                        minHeight: "40px",
                        backgroundColor: "#407BFF",
                      }}
                    >
                      Download
                    </Button>
                  </a>
                </div></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
