import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = (props) => {
  const [cendol, setCendol] = React.useState(2);
  const [colorChange, setColorChange] = React.useState(false);
  const [colorCode, setColorCode] = React.useState("");

  React.useEffect(() => {
    if (colorChange) {
      setColorCode("#E36E6E");
    } else {
      setColorCode("#2EDFC0");
    }
  }, [colorChange]);

  const handleIncremet = () => {
    setCendol(cendol + 10);
  };

  const handleColorChange = () => {
    setColorChange(!colorChange);
  };

  return (
    <div>
      <ComponentB
        handleIncremet={handleIncremet}
        cendol={cendol}
        handleColorChange={handleColorChange}
        colorCode={colorCode}
      />
    </div>
  );
};

export default ComponentA;