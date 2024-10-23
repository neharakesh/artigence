import React from 'react';
import Navbar from './components/navbar';
import ImageViewer from './components/ImageViewer'; // Your image viewer component
import DetailsPanel from './components/DetailsPanel'; // Your details panel component
import HubView from './components/HubView';
const App = () => {
  const sampleDetails = {
    title: "Sickle Cell Anemia",
    description: "Presence of sickle-shaped red blood cells, indicative of Sickle Cell Disease.",
    diagnosis: "Confirmed after microscopic evaluation and further blood tests.",
    date: "October 20, 2024",
    recommendations: "Follow-up with hematology for treatment options and management."
  };

  return (
    <div className="h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-grow pt-16 bg-gray-950"> {/* pt-16 offsets the fixed navbar height */}
        {/* Details Panel */}
        <DetailsPanel details={sampleDetails} />

        {/* Whole Slide Image Viewer */}
        <div className="w-3/4 h-[calc(100vh-64px)]  m-4 "> {/* Adjust height to account for the navbar */}
          <ImageViewer />
        </div>
      <HubView/>
      </div>
    </div>
  );
};

export default App;

