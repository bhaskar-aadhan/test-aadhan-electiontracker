import React, { useState, useRef, useEffect } from 'react';
import IndiaMap from './Map/IndiaMap';
import Draggable from 'react-draggable';

const Zoom = ({type,Data}) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const fixedAreaRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(()=>{
    setScale(Data?.length<500 ? 3 : 1 )
    setPosition((Data.length) < 500 ? {x: 122.66665649414062, y: -230.66665649414062}:{ x: 0, y: 0 })
  },[Data])
console.log(position)
  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent default scrolling behavior
      const zoomDelta = e.deltaY > 0 ? -0.05 : 0.05; // Adjust zoom speed for smoother zooming
      const newScale = scale + zoomDelta;
      // Set zoom limits (minScale and maxScale)
      const minScale = 0.5; // Minimum zoom level
      const maxScale = 4; // Maximum zoom level
      if (newScale >= minScale && newScale <= maxScale) {
        setScale(newScale);
      }
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [scale]); // Include scale in the dependency array

  const handleZoomIn = () => {
    const newScale = scale * 1.2; // Increase scale by 20%
    const maxScale = 2; // Maximum zoom level
    if (newScale <= maxScale) {
      setScale(newScale);
    }
  };

  const handleZoomOut = () => {
    const newScale = scale / 1.2; // Decrease scale by 20%
    const minScale = 0.5; // Minimum zoom level
    if (newScale >= minScale) {
      setScale(newScale);
    }
  };

  const handleResetZoom = () => {
    setScale(1); // Reset scale to 100%
    setPosition({ x: 0, y: 0 });
  };

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };


  return (
    <div>
    <div
      ref={containerRef}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Draggable position={position} onDrag={handleDrag}>
      <div
       
      >
        <div
          style={{
            width: 500,
            height: 450,
            transform: `scale(${scale})`,
            transformOrigin: `50% ${fixedAreaRef.current ? fixedAreaRef.current.offsetTop + fixedAreaRef.current.offsetHeight / 2 : '50%'}`,
            transition: 'transform 0.2s ease-in-out',
            
          }}
        >
          <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <IndiaMap type={type} Data={Data} />
            {/* Fixed area */}
            
          </div>
          
        </div>
      </div>
        </Draggable>
     
    </div>
    <div className='flex justify-between w-20'>
        <button onClick={handleZoomIn}>{" + "}</button>
        <button onClick={handleZoomOut}>{" - "}</button>
        <button onClick={handleResetZoom}> Reset </button>
      </div>
    </div>
  );
};

export default Zoom;
