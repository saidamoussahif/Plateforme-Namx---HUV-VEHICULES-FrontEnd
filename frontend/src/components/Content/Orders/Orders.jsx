import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Orders() {
  const navigate = useNavigate();
  const [ordersList, setOrders] = useState(null);
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getOrders();
    isset(token);
  });
  const getOrders = () => {
    fetch("http://localhost:8000/api/Reservation/")
      .then((res) => res.json())
      .then(
        (result) => {
          setOrders(result);
          // console.log(result);
        },
        (error) => {
          setOrders(null);
        }
      );
  };
  if (!ordersList) return <div>No User found</div>;

  return (
    <div>
      <div id="Table" className="relative top-1/4 left-24 p-8 rounded-md">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">State</TableCell>
                <TableCell align="center">Zip</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {ordersList.map((order) => (
                <TableRow
                  key={order.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="user">{order.UserName}</TableCell>
                  <TableCell component="th" scope="user"> {order.Email}</TableCell>
                  <TableCell align="center">{order.Adress}</TableCell>
                  <TableCell align="center">{order.City}</TableCell>
                  <TableCell align="center">{order.State}</TableCell>
                  <TableCell align="center">{order.Zip}</TableCell>
                  <TableCell align="center">{order.Country}</TableCell>
                  <TableCell align="center">{order.Type}</TableCell>
                  <TableCell align="center">{order.Date}</TableCell>
                  <TableCell align="center">
                    <button
                      style={{
                        background: "rgb(255,0,0) / 47%)",
                        color: "red",
                      }}
                      type="submit"
                      className="relative rounded-xl p-3 w-16 bg-red-200"
                    >
                      Confirm
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Orders;
