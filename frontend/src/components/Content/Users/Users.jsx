import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Modal from "../../Modal/Modal";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// const openModal = () => {
//   console.log("r");
//   return;
// };
function Users() {
  const [toggle, setToggle] = useState(false);
  const changeState = () => {
    setToggle(true);
  };

  const navigate = useNavigate();
  const [usersList, setUsers] = useState(null);
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    // dispatch(getCars());
    getUsers();
    // dispatch(reset());
    isset(token);
  });
  const getUsers = () => {
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then(
        (result) => {
          setUsers(result);
          // console.log(result);
        },
        (error) => {
          setUsers(null);
        }
      );
  };
  if (!usersList) return <div>No User found</div>;


 
  return (
    <div >
      <label htmlFor="my-modal-3" className="btn" onClick={changeState}>
        Add
      </label>
      {toggle && <Modal />}
      <div id="Table" className="relative top-1/4 left-24 p-8 rounded-md">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">State</TableCell>
                <TableCell align="center">Zip</TableCell>
                <TableCell align="center">Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {usersList.map((user) => (
                <TableRow
                  key={user.fullname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="user">
                    {user.fullname}
                  </TableCell>
                  <TableCell component="th" scope="user">
                    {user.email}
                  </TableCell>
                  <TableCell align="center">{user.address}</TableCell>
                  <TableCell align="center">{user.city}</TableCell>
                  <TableCell align="center">{user.state}</TableCell>
                  <TableCell align="center">{user.zip}</TableCell>
                  <TableCell align="center">{user.country}</TableCell>
                  <TableCell align="center">
                    {/* <button
                      style={{
                        background: "rgb(145 254 159 / 47%)",
                        color: "green",
                      }}
                      type="submit"
                      className="relative rounded-xl p-3 w-16 mr-4"
                    >
                      Edit
                    </button> */}
                  
                    
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

export default Users;
