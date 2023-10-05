import useCursorCircles from '../hooks/cursorCircles';

const Cursor = () => {
  const numberOfCircles = 30;
  const circles = useCursorCircles(numberOfCircles);

  return (
    <>
      {circles.map((circle, indexMap) => {
        return (
          <div
            key={indexMap}
            style={{
              left: circle.left,
              top: circle.top,
              transform: `scale(${circle.scale})`,
              background: circle.color,
            }}
            className="cursorCircle"
          />
        );
      })}
    </>
  );
};

export default Cursor;