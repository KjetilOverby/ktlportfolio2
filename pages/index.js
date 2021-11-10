import React from "react";
import StartPage from "../src/components/startpage/StartPage";

const index = () => {
  return (
    <>
      {/* <video
        src="https://lh3.googleusercontent.com/nOi9_ZN-sDgli8dZ6frRwENmqoPxug0FxLH5C1TwrJxsqJX9KRXRSfg98j4ENzUHk3EhQxOS9FTauiT3DeEb31E51Mmj5F_TikeWvcuoTad_FCU-1RaHWCDmk_AoBcb-I0jHbqMa68r16NT9VEWUdgsUqvHm56BrjKX_B4nqrbk0A_-vh6DPBjBqOZChitKYmK9ynkcl3D9MY7csYCdLYfjlq7Y905JS9D_SRmwqPdFcn3hGC-J13tIDCLHrFgdiLzKAp2m4qRrjpKsH0CApMLaiY8jdHhu4ZT3w_Pr7mShzLLhkaq-tP1GFStQolNM9DfTibh-dKKVNyvfquTe6Rzv0wZDLFH9hTXnm_FQAJiXGngnyJGlbJ9Iwf7y2h2VvJ2QszYuPPEeyetv7bW6sS7kgYlct3dO5ndYibEWNGez91m2AgTs4qrA3sZOth993ULv0Ai6ZRko46rfXVUXhfs1REXHU-8WlQIgku8SnLiDqS9UbfsAdBXW2gTXcOmj2VwiWUbL74zHS9AzDZr2_z-krpGdxDDU7piTPJvhJEDUssdVkVTIuILRqdTKOwhGhWGMvPsEFrFjCv2qvs5HXZN7nUdUW7qeVYwGjSqgqjxpaDFLHieaBx1Cf21kETsUVCK_vNHJhIDuHAWhn12wbJI38rr0VqvXIOiUgwsXDAifPi2yx8Dp163rGWWpGPFuGnuYSg23tuhfAzNIgrF8ACnudybDdmZ2kgLCEWyc7Xe0EpFT4Kd5dIgGZ5lWpPdXgG8ov6hl52jtnuWz4"
        autoPlay
        loop
      ></video> */}
      <div className="container">
        <StartPage />
      </div>

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
          .container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1620207418302-439b387441b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </>
  );
};

export default index;

//https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov
