import { useNavigate } from 'react-router-dom';

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Navigation to Home</h1>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150"
      >
        Home
      </button>
    </div>
  );
};

export default Navigate;