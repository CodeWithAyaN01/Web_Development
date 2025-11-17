// === Image.jsx ===
import React from "react";

const Image1 = (props) => {
  return (
    <div className="hover:scale-[1.02] transition-transform duration-200">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="w-full rounded-2xl shadow-lg border border-gray-700 overflow-hidden bg-gray-800 hover:shadow-xl transition-all">
          <img
            src={props.Image1Url}
            alt="Image"
            className="w-full h-auto object-cover md:h-64"
          />
        </div>
        <h1 className="mt-3 ml-1 font-semibold text-lg">
          {props.index}. {props.author}
        </h1>
      </a>
    </div>
  );
};

export default Image1;