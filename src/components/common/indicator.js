import React from "react";

export default function Indicator(props) {
  //Function
  const indicator = (num) => {
    const elements = [];
    for (let i = 0; i < num - 1; i++) {
      const elements = [];
      elements.push(i);
    }
    elements.map((e) => {
      return <li></li>;
    });
  };

  return (
    <>
      <li className="active">{indicator(props.indicator)}</li>
    </>
  );
}
