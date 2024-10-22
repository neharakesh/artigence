import React, { useState, useEffect } from 'react';
import ImageViewer from "./ImageViewer";

const HubView = () => {
  const [position, setPosition] = useState({ x: 1000, y: 50 }); // Default position
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  return (
    <div
      className="hub-view w-1/4 h-1/4 fixed border border-gray-300 bg-white shadow-lg z-20"
      style={{ top: `${position.y}px`, left: `${position.x}px`, cursor: isDragging ? 'grabbing' : 'grab' }}
      onMouseDown={handleMouseDown}
    >
      {/* Header to Drag the HubView */}
      <div className="bg-gray-200 p-2 cursor-pointer text-center">
        Move Hub View
      </div>

      {/* Image Viewer Section */}
      <ImageViewer mini={true} /> {/* Pass the mini prop if needed */}
    </div>
  );
};

export default HubView;


  