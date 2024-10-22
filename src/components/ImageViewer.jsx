import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import wsi from "../../public/images/wsi.png"; // Your whole slide image

const ImageViewer = () => {
  return (
    <div className="relative h-full w-full"> {/* Ensures the image viewer takes full available space */}
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        wheel={{
          step: 0.1,
        }}
        pinch={{ disabled: false }}
      >
        {({ zoomIn, zoomOut, resetTransform, centerView }) => (
          <React.Fragment>
            {/* Tools Section */}
            <div className="absolute top-4 right-4 bg-white p-2 shadow-lg rounded">
              <button onClick={zoomIn} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">Zoom In</button>
              <button onClick={zoomOut} className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">Zoom Out</button>
              <button onClick={resetTransform} className="mr-2 px-3 py-1 bg-gray-500 text-white rounded">Reset</button>
              <button onClick={centerView} className="px-3 py-1 bg-gray-500 text-white rounded">Center</button>
            </div>

            {/* Image Viewer Section */}
            <TransformComponent>
              <img src={wsi} alt="Whole Slide Image" className="object-contain h-full w-full" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;



