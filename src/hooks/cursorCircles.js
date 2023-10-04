import { useEffect, useState } from "react"

const useCursorCircles = (numberOfCircles) => {

    const initialCircles = Array.from({ length: numberOfCircles },
        (_, i)=>({
            left: '0px',
            top: '0px',
            scale: 1,
            x: 0,
            y: 0,
            color: '#111'+(100-i)
        }));

    const [circles, setCircles] = useState([initialCircles])

    const handleMove = (event) => {
        let { clientX, clientY } = event;
        let newCircles = [...circles];

        for (let i = 0; i < numberOfCircles; i++) {
            newCircles[i]={
                left: clientX - 12 + 'px',
                top: clientY - 12 + 'px',
                scale: (numberOfCircles - i) / numberOfCircles,
                x: clientX,
                y: clientY,
                color: '#000000'+(100-i)
            }
            const nextCircle = newCircles[i + 1] || newCircles[0];
            clientX += (nextCircle.x - clientX) * 0.5;
            clientY += (nextCircle.y - clientY) * 0.5;
        }
        setCircles(newCircles)
    };

    useEffect(() => {
        
        window.addEventListener('pointermove', handleMove)

        return ()=>{
            window.removeEventListener('pointermove', handleMove)
        };
    },[circles])

    return circles
}

export default useCursorCircles