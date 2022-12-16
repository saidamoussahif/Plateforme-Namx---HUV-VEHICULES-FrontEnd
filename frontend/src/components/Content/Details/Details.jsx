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

function Details() {
  // const [toggle,setToggle] = useState(false)
  // const changeState = ()=>{
  //   setToggle(true)
  // }
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDetails());

  //   dispatch(reset());
  // }, []);
  // const { details } = useSelector((state) => state.details);
  // const ar = Object.keys(details[0]? details[0]:'')
  // console.log(ar)
  // let array ;
  // array?.push(ar)

  const navigate = useNavigate();
  const [detailsList, setDetails] = useState(null);
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getDetails();
    isset(token);
  });
  const getDetails = () => {
    fetch("http://localhost:8000/api/detalles")
      .then((res) => res.json())
      .then(
        (result) => {
          setDetails(result);
          // console.log(result);
        },
        (error) => {
          setDetails(null);
        }
      );
  };
  if (!detailsList) return <div>No User found</div>;

  return (
    <div>
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
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {detailsList.map((detail) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="detail">
                      {detail.Keys}
                    </TableCell>
                    <TableCell component="th" scope="detail">
                      {detail.Nom_Value}
                    </TableCell>
                    <TableCell align="center">{detail.Value}</TableCell>
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

      {/* <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Keys</th>
                <th className="p-3">Nom_Value</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>
            <tbody>
              {detailsList.map((detail) => (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <td className="p-3">
                    <p>{detail.Keys}</p>
                  </td>
                  <td className="p-3">
                    <p>{detail.Nom_Value}</p>
                  </td>
                  <td className="p-3">
                    <p>{detail.Value}</p>
                    <p className="dark:text-gray-400">Friday</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default Details;
