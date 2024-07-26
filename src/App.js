import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="flex items-center justify-center w-full h-screen transition-all duration-200" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap gap-4 p-6 bg-white rounded-lg shadow-lg">
        <button onClick={() => setColor("yellow")} className="px-4 py-2 text-white transition-all duration-200 transform bg-amber-500 border border-sky-500 rounded hover:bg-amber-600 hover:scale-105">
          Yellow
        </button>
        <button onClick={() => setColor("red")} className="px-4 py-2 text-white transition-all duration-200 transform bg-red-600 border border-sky-500 rounded hover:bg-red-700 hover:scale-105">
          Red
        </button>
        <button onClick={() => setColor("green")} className="px-4 py-2 text-white transition-all duration-200 transform bg-lime-900 border border-sky-500 rounded hover:bg-lime-800 hover:scale-105">
          Green
        </button>
        <button onClick={() => setColor("white")} className="px-4 py-2 transition-all duration-200 transform bg-white border border-sky-500 rounded text-sky-500 hover:bg-gray-100 hover:scale-105">
          White
        </button>
        <button onClick={() => setColor("olive")} className="px-4 py-2 text-white transition-all duration-200 transform bg-lime-800 border border-sky-500 rounded hover:bg-lime-700 hover:scale-105">
          Olive
        </button>
        <button onClick={() => setColor("gold")} className="px-4 py-2 text-white transition-all duration-200 transform bg-slate-600 border border-sky-500 rounded hover:bg-slate-700 hover:scale-105">
          Gold
        </button>
        <button onClick={() => setColor("black")} className="px-4 py-2 text-white transition-all duration-200 transform bg-black border border-sky-500 rounded hover:bg-gray-900 hover:scale-105">
          Black
        </button>
        <button onClick={() => setColor("violet")} className="px-4 py-2 text-white transition-all duration-200 transform bg-violet-900 border border-sky-500 rounded hover:bg-violet-800 hover:scale-105">
          Violet
        </button>
        <button onClick={() => setColor("orange")} className="px-4 py-2 text-white transition-all duration-200 transform bg-orange-500 border border-sky-500 rounded hover:bg-orange-600 hover:scale-105">
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
