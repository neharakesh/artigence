import { FaBook, FaClipboard, FaCalendar, FaHeartbeat } from 'react-icons/fa'; // Importing icons

const DetailsPanel = ({ details }) => {
  return (
    <div className="details-panel w-1/4 p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-white pb-2">Findings</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center text-white">
          <FaBook className="mr-2 text-white" /> Title:
        </h3>
        <p className="text-gray-300">{details.title}</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center text-white">
          <FaClipboard className="mr-2 text-white" /> Description:
        </h3>
        <p className="text-gray-300">{details.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center text-white">
          <FaHeartbeat className="mr-2 text-white" /> Diagnosis:
        </h3>
        <p className="text-gray-300">{details.diagnosis}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center text-white">
          <FaCalendar className="mr-2 text-white" /> Date:
        </h3>
        <p className="text-gray-300">{details.date}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center text-white">
          <FaClipboard className="mr-2 text-white" /> Recommendations:
        </h3>
        <p className="text-gray-300">{details.recommendations}</p>
      </div>
    </div>
  );
};

export default DetailsPanel;

