
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout, reset } from "../features/adminAuth/adminSlice";

const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const admin = useSelector((state) => state.adminAuth);

  const LogOut = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/login");
  };


=======
import { logout, reset } from '../features/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
<<<<<<< HEAD
    false: {
      left: "-60%",
    },
  };
=======
    false:{
      left : '-60%'
    }
  }
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
<<<<<<< HEAD
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
=======
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <Link
               to={item.link} 
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </Link>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
        <button  onClick={onLogout}>
          <UilSignOutAlt />
        </button>
>>>>>>> b3573fb0d3a3a5f2bd1676faf95eee6936c1d344
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.link}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />

                <span>{item.heading}</span>
              </Link>
            );
          })}
          {/* signoutIcon */}
          <div>
            {/* <h1>{admin && admin.name}</h1> */}

            <button onClick={LogOut} className="menuItem">
              <UilSignOutAlt />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
