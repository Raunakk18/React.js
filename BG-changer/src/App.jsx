import { useState } from "react"


function App() {
  const [bgColor , setbgColor] = useState("white");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: bgColor}}>
          <div className="flex flex-wrap justify-center items-center mt-3">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-3xl ">
              <button 
              onClick={()=> setbgColor("red")}
              className="outline-none px-4 bg-red-700 py-1 rounded-full text-white shadow-lg"
               >Red</button>
              <button 
                onClick={()=> setbgColor("green")}
               className="outline-none px-4 bg-green-700 py-1 rounded-full text-white shadow-lg"
               >Green</button>
              <button 
                onClick={()=> setbgColor("blue")}
              className="outline-none px-4 bg-blue-700 py-1 rounded-full text-white shadow-lg"
               >Blue</button>
              <button 
                onClick={()=> setbgColor("yellow")}
              className="outline-none px-4 bg-yellow-500 py-1 rounded-full text-white shadow-lg"
               >Yellow</button>
              <button 
                onClick={()=> setbgColor("black")}
              className="outline-none px-4 bg-black py-1 rounded-full text-white shadow-lg"
               >Black</button>
              <button 
                onClick={()=> setbgColor("gray")}
              className="outline-none px-4 bg-gray-700 py-1 rounded-full text-white shadow-lg"
               >Gray</button>
              <button 
                onClick={()=> setbgColor("pink")}
              className="outline-none px-4 bg-pink-600 py-1 rounded-full text-white shadow-lg"
               >Pink</button>
              <button 
                onClick={()=> setbgColor("purple")}
              className="outline-none px-4 bg-purple-900 py-1 rounded-full text-white shadow-lg"
               >Purple</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
