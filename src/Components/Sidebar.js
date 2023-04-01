import React from "react";
import { BiTrendingUp, BiCrown, BiBarChartAlt2 } from "react-icons/bi";
import ActiveNewUser from "./ActiveNewUser";
import Distributes from "./Distributes";
const Sidebar = () => {
  // sidebar for all users analize with distribution 
  return (
    <div className="sidebar">
      <div className="div1 div">
        <p className="users">
          All Users <span>DETAILS</span>
        </p>
        <p className="total">2,431,340</p>
      </div>
      <div className="distributes">
      {/* ----distributes components--- */}
        <Distributes
          title="Total Earning"
          count="540,549"
          bg="#8676FF"
          icon={
            <BiTrendingUp
              size="25"
              color="white"
              style={{
                height: "30px",
                width: "30px",
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Distributes
          title="Sales"
          count="1,205,677"
          bg="#66C8FF"
          icon={<BiCrown size="25" color="white" />}
        />
        <Distributes
          title="Purchase"
          count="48,430,039"
          bg="#FF9066"
          icon={<BiBarChartAlt2 size="25" color="white" />}
        />
      </div>
 {/* users and new users--- activeNewUser components*/}
      <div className="percentage-circle">
        <ActiveNewUser title="92,980" color="blue" user="Active Users" percentage="27%" />
        <ActiveNewUser title="22,652" color="green" user="New Users" percentage="67%" />
      </div>
    </div>
  );
};

export default Sidebar;
