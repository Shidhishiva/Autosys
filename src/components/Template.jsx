import React from "react";
import { FiTool } from "react-icons/fi";
import { Tb360View } from "react-icons/tb";
import {AiTwotoneSetting} from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import "../App.css";
import "../index.css";
const Template = () => {
  return (
    <>
      <div className="container">
        <div className="heading1">Autosys</div>
        <div className="heading2">DIGITAL OPERATOR WORKSTATION</div>
        <div className="section">
          <div className="icon1">
            <Tb360View />

            <FiTool />
          </div>
          <div className="name1">Aaditya Damani</div>
          <div className="name2">System Adminstration</div>
          <div className="avatar">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="heading3">
          Operator | <span className="part">Faridabad | NSEZ Noida | CNC Division | Module1 | Cell3 </span>
        </div>
        <div className="setting">
         <AiTwotoneSetting/>
        </div>
      </div>
    </>
  );
};

export default Template;