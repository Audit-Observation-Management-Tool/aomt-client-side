import React, { useState, useEffect } from "react";
import ArcProgress from "react-arc-progress";

const ProgressPieChart = ({ progress }) => {
  const [customText, setCustomText] = useState([
    { text: "80", size: "34px", color: "gray", x: 100, y: 105 },
    { text: "%", size: "14px", color: "gray", x: 125, y: 109 },
  ]);

  useEffect(() => {
  }, [progress]);

  const arcFillColor = { gradient: ["#208957", "#0b7046"] };

  return (
    <>
      <div
        style={{
          height: 100,
          width: 100,
          borderRadius: 90,
          position: "absolute",
          top: 140,
          left: 104,
          boxShadow: `0px 0px 4px rgba(0,0,0,0.2)`,
        }}
      ></div>
      <ArcProgress
        thickness={20}
        fillColor={arcFillColor}
        progress={progress}
        customText={customText}
        style={{ position: "relative" }}
        observer={(current) => {
          const { percentage, currentText } = current;
        }}
        animationEnd={({ progress, text }) => {
        }}
      />
    </>
  );
};

export default ProgressPieChart;