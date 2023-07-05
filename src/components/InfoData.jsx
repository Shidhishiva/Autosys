import React from "react";
import { HiDesktopComputer } from "react-icons/hi";
import { BiSolidCube } from "react-icons/bi";
import {
  BsFillBarChartFill,
  BsFillClockFill,
  BsFillExclamationTriangleFill,
} from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiTwotonePieChart, AiFillExclamationCircle } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import "../index.css";
import "../App.css";
const InfoData = () => {
  return (
    <>
      <div className="info">
      <div className="container1">
        <div className="head1">
          <HiDesktopComputer />
          CNC 01
        </div>
        <div className="head2">
          <BiSolidCube />
          1603009772005 20-30/40
        </div>

        <div className="logo2">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="head4">No Operator Selected</div>
        <div className="head5">
          <BsFillBarChartFill />
          Average Efficiency: 98%
        </div>

        <div className="btn-group">
          <button className="btn ">Inspection</button>
          <button className="btn ">Process Control</button>
          <button className="btn ">Rejection</button>
        </div>
      </div>

      <div className="data">
        <div className="data1">
          <BsFillClockFill />
          Cycletime : 256s/300s
        </div>
        <div className="data2">
          <FaHandHoldingHeart />
          Load & Unload : 26/12
        </div>
        <div className="data3">
          <AiTwotonePieChart />
          Machine Utilisation 78.43%
        </div>
        <div className="data4">
          <BsFillExclamationTriangleFill />
          Idletime & PL 12:43(H:M)
        </div>
        <div className="data5">
          <AiFillExclamationCircle />
          Downtime 12:43(H:M)
        </div>
      </div>

      <div className="time">
        <div className="time1">9:00</div>
        <div className="time1">10:00</div>
        <div className="time1">11:00</div>
        <div className="time1">12:00</div>
        <div className="time1">13:00</div>
        <div className="time1">14:00</div>
        <div className="time1">15:00</div>
        <div className="time1">16:00</div>
        <div className="time1">17:00</div>
        <div className="time1">18:00</div>
        <div className="time1">19:00</div>
      </div>

      <div className="bar">
        <div className="barslide">
          <div className="val">90%</div>
          <div className="val1">60%</div>
          <div className="val2">90%</div>
          <div className="val3">84%</div>
          <div className="val4">80%</div>
          <div className="val5">92%</div>

          <div className="val6">94%</div>
          <div className="val6">95%</div>
          <div className="val7">80%</div>
          <div className="val8">84%</div>
          <div className="val9">60%</div>
          <div className="val10">75%</div>
          <div className="val11">45%</div>
        </div>
      </div>
      </div>
    </>
  );
};

export default InfoData;