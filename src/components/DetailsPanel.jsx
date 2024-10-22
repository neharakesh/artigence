import { FaBook, FaClipboard, FaCalendar, FaHeartbeat } from 'react-icons/fa'; // Importing icons

const DetailsPanel = ({ details }) => {
  return (
    <div className="details-panel w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 border-b-2 border-blue-500 pb-2">Findings</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaBook className="mr-2 text-blue-500" /> Title:
        </h3>
        <p className="text-gray-700">{details.title}</p>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaClipboard className="mr-2 text-blue-500" /> Description:
        </h3>
        <p className="text-gray-700">{details.description}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaHeartbeat className="mr-2 text-blue-500" /> Diagnosis:
        </h3>
        <p className="text-gray-700">{details.diagnosis}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaCalendar className="mr-2 text-blue-500" /> Date:
        </h3>
        <p className="text-gray-700">{details.date}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold flex items-center">
          <FaClipboard className="mr-2 text-blue-500" /> Recommendations:
        </h3>
        <p className="text-gray-700">{details.recommendations}</p>
      </div>
    </div>
  );
};

export default DetailsPanel;

