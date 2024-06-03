import React from 'react';
import '../styles/WhyJoin.css';
import { BsCameraReelsFill } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";

const WhyJoin = () => {
  const data = [
    {
      icon: <BsCameraReelsFill />,
      title: 'Do-it-together, live on zoom'
    },
    {
      icon: <GoStarFill />,
      title: '4.8 / 5 Rated Classes'
    },
    {
      icon: <FaPeopleGroup />,
      title: '35000+ Members'
    }
  ];

  return (
    <div className="why-join-container">
      <div className="why-join-overlay"></div>
      <div className="why-join-content">
        <h2 className="h2-head">Why Should You <br/> Join Airblack?</h2>
        <div className="features">
          {data.map((item, index) => (
            <div className="feature" key={index}>
              <div className="icons-why">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button className="apply-button">Apply Now</button>
      </div>
    </div>
  );
}

export default WhyJoin;
