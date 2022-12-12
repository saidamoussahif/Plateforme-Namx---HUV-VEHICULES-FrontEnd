import {useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Cars.css";
// import { getCars, reset } from "../../../features/Cars/carSlice";



export default function Cars() {

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [carsList, setCars] = useState(null);
  // const {carsList} = useSelector((state) => state.cars);
  const token = localStorage.getItem("token");
  const isset = (token) => {
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    // dispatch(getCars());
    getCars();
    // dispatch(reset());
    isset(token);
  });
  const getCars = () => {
    fetch("http://localhost:8000/api/cars/")
      .then((res) => res.json())
      .then(
        (result) => {
          setCars(result);
          // console.log(result);
        },
        (error) => {
          setCars(null);
        }
      );
  };
  if (!carsList) return <div>No Trip found</div>;

  // Delete Cars

  // const deleteCar = (id) => {
  //   fetch("http://localhost:8000/api/cars/" + id, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         getCars();
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // };

  return (
    <>
      <div id="Table" className="relative top-1/4 left-24 p-8 rounded-md">
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Type-Name</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Actions</TableCell>
                {/* <TableCell align="left"></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {carsList.map((car) => (
                <TableRow
                  key={car.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="car">
                    {car.Name}
                  </TableCell>
                  <TableCell align="center">{car.Type.Type_Name}</TableCell>
                  <TableCell align="center">
                    {car.Type.Date_Creation.toString()}
                  </TableCell>
                  <TableCell align="center">{car.Type.Prix}</TableCell>
                  <TableCell align="center">
                    <button
                      style={{
                        background: "rgb(145 254 159 / 47%)",
                        color: "green",
                      }}
                      type="submit"
                      className="relative rounded-xl p-3 w-16 mr-4"
                    >
                      Edit
                    </button>
                    <button
                      style={{
                        background: "rgb(255,0,0) / 47%)",
                        color: "red",
                      }}
                      // onClick={() => deleteCar(car.id)}
                      type="submit"
                      className="relative rounded-xl p-3 w-16 bg-red-200"
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
