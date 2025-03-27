import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-gray-800">
      <h1 className="text-4xl font-bold text-pink-600">BATYA'S BREADS</h1>
      <p className="mt-2 text-lg text-gray-700">
        Fresh sourdough bread, baked with love!
      </p>
      <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
        Order Now
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
