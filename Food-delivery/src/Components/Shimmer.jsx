// Shimmer.js
import React from "react";
const Shimmer = () => {
    return (
    <div className="flex flex-wrap gap-6 justify-center">
        {Array(20).fill("").map((_, i) => (
        <div
            key={i}
            className="w-72 h-60 bg-gray-200 rounded-lg animate-pulse p-4"
        >
            <div className="w-full h-36 bg-gray-300 rounded-md"></div>
            <div className="mt-4 h-4 w-3/4 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
        </div>
        ))}
    </div>
    );
};

export default Shimmer;
