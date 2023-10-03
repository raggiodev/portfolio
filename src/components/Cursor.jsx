import {useEffect, useState} from "react";

const Cursor = () => {
  const numberOfCircles = 20;
  const initialCircles = Array.from({ length: numberOfCircles }, () => ({
    left: "0px",
    top: "0px",
    scale: 1,
    x: 0,
    y: 0,
  }));
  const [circles, setCircles] = useState(initialCircles);

  const handleMove = (event) => {
    let { clientX, clientY } = event;
    let newCircles = [...circles];

    for (let i = 0; i < numberOfCircles; i++) {
      newCircles[i] = {
        left: clientX - 12 + "px",
        top: clientY - 12 + "px",
        scale: (numberOfCircles - i) / numberOfCircles,
        x: clientX,
        y: clientY,
      };

      const nextCircle = newCircles[i + 1] || newCircles[0];
      clientX += (nextCircle.x - clientX) * 0.3;
      clientY += (nextCircle.y - clientY) * 0.3;
    }

    setCircles(newCircles);
  };

  useEffect(() => {
    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [circles]);

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            left: circle.left,
            top: circle.top,
            transform: `scale(${circle.scale})`,
          }}
          className="cursorCircle"
        ></div>
      ))}
    </>
  );
};

export default Cursor;