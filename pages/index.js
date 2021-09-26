import React from "react";
import StartPage from "../src/components/startpage/StartPage";

const index = () => {
  return (
    <>
      <video
        src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov"
        autoPlay
        loop
      ></video>

      <StartPage />
      <style jsx>
        {`
          video {
            object-fit: cover;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -10;
            -webkit-filter: blur(20px);
          }
        `}
      </style>
    </>
  );
};

export default index;
// import React from "react";
// import StartPage from "../src/components/startpage/StartPage";

// const index = () => {
//   return (
//     <>
//       <div className="container">
//         <StartPage />
//       </div>
//       <style jsx>
//         {`
//           .container {
//             background: url("https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov");
//             min-height: 100vh;
//             background-size: cover;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default index;
