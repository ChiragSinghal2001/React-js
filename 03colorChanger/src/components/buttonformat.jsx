import React from 'react'


// function Buttonformat({colorname}) {
//     const [color, setColor] = useState("olive")
//   return (
//     <button
//       onClick={() => setColor(colorname)}
//       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//       style={{backgroundColor: "red"}}
//       >Red</button>
//   )
// }
const ButtonFormat = ({ givencolor, Click,fontcolor="white" }) => {
    return (
      <button
        onClick={Click}
        className="outline-none px-4 py-1 rounded-full  shadow-lg"
        style={{ backgroundColor: givencolor , color: fontcolor}}
      >
        {givencolor}
      </button>
    );
  };
//   text-white
export default ButtonFormat
