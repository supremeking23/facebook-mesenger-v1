import React from 'react'
import useSound from "use-sound";
import sound from "./sound1.mp3";

// export default function Sound() {

//     const [play] = () => {
//         useSound(sound);
//     }

//     return (
//         <div>
//             <h1>Sound</h1>

//             <button onClick={play}>Boop</button>
   
//         </div>
//     )
// }

const Sound = () => {
    const [play] = useSound(sound);
    return <button onClick={play}>Boop!</button>;
  };


  export default  Sound;