import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import wsi from "../../public/images/wsi.png"; // Your whole slide image

const ImageViewer = () => {
  return (
    <div className="relative h-full w-full ">
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
            {/* Tools Positioned in Right Corner */}
            <div className="absolute top-4 right-4 bg-white p-2 shadow-lg rounded flex flex-col space-y-2 z-10">
              <button onClick={() => zoomIn()} className="px-3 py-1 bg-blue-500 text-white rounded">Zoom In</button>
              <button onClick={() => zoomOut()} className="px-3 py-1 bg-blue-500 text-white rounded">Zoom Out</button>
              <button onClick={() => resetTransform()} className="px-3 py-1 bg-gray-500 text-white rounded">Reset</button>
              <button onClick={() => centerView()} className="px-3 py-1 bg-gray-500 text-white rounded">Center</button>
            </div>

            {/* Image Viewer Section */}
            <TransformComponent>
              <img src={wsi} alt="Whole Slide Image" className="h-full  w-full" />
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;





