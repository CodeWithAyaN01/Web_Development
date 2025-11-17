// === App.jsx ===
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image1 from "./Components/Image1";

const App = () => {
  // Random starting page
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const [index, setIndex] = useState(random(2, 30));
  const [userData, setUserData] = useState([]);

  // Fetch API
  const getData = async () => {
    const URL = `https://picsum.photos/v2/list?page=${index}&limit=12`;
    const response = await axios.get(URL);
    setUserData(response.data);
  };

  useEffect(() => {
    setUserData([]); // show loading
    getData();
  }, [index]);

  let printUserData = (
    <h1 className="text-4xl text-gray-500 font-bold opacity-70 animate-pulse text-center col-span-3">
      Loading...
    </h1>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => (
      <Image1
        key={elem.id}
        Image1Url={elem.download_url}
        index={idx + 1}
        author={elem.author}
        link={elem.url}
      />
    ));
  }

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen w-full text-white">
      <h1 className="text-4xl font-extrabold text-center py-6 tracking-wide drop-shadow-lg">
        Beautiful Image1 Gallery ✨
      </h1>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {printUserData}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between items-center p-5 mt-6">
        <button
          disabled={index === 1}
          onClick={() => index > 1 && setIndex((prev) => prev - 1)}
          className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 shadow-md bg-red-700 hover:bg-red-800 active:scale-95 ${
            index === 1 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          ⬅ Prev
        </button>

        <h1 className="text-3xl font-bold tracking-wide">Page {index}</h1>

        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="px-5 py-3 rounded-xl text-sm font-bold bg-green-700 hover:bg-green-800 active:scale-95 transition-all duration-200 shadow-md"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default App;



