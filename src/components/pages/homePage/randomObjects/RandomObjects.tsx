// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./RandomObjects.t";

// const RandomObjects = () => {
//   const circlesRef = useRef([]);

//   useEffect(() => {
//     circlesRef.current.forEach((circle) => {
//       gsap.fromTo(
//         circle,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           duration: 0.5,
//           ease: "power1.inOut",
//           onComplete: () => animateCircle(circle),
//         }
//       );
//     });
//   }, []);

//   const animateCircle = (circle: any) => {
//     gsap.to(circle, {
//       x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
//       y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
//       duration: Math.random() * 3 + 2,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });
//   };

//   return (
//     <div className="container">
//       {[...Array(4)].map((_, index) => (
//         <div
//           key={index}
//           className="circle"
//           ref={(el: never) => (circlesRef.current[index] = el)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RandomObjects;
import React from "react";

const RandomObjects = () => {
  return <div></div>;
};

export default RandomObjects;
