import "./Sidebar.css"
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Logout, reset } from "../features/adminAuth/adminSlice";
import { useState } from "react";
import { useEffect } from "react";


// const Sidebar = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
  // const admin = useSelector((state) => state.adminAuth);

  



const Sidebar = () => {

  const LogOut = () => {
    dispatch(Logout());
    dispatch(reset());
    navigate("/login");
  };




  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  // const [selected, setSelected] = useState(0);
  // const [expanded, setExpaned] = useState(true);

  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);



  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  
  
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      
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
