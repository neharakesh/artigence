import ImageViewer from "./ImageViewer";

const HubView = () => {
  return (
    <div className="hub-view w-1/4 h-1/4 fixed top-20 right-4 border border-gray-300 bg-white shadow-lg z-20">
      <ImageViewer mini={true} /> {/* Pass the mini prop if needed */}
    </div>
  );
};

export default HubView;

  