import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "Build/Micrometer.loader.js",
  dataUrl: "Build/Micrometer.data",
  frameworkUrl: "Build/Micrometer.framework.js",
  codeUrl: "Build/Micrometer.wasm",
});

function Micrometer() {
  return (
    <div> 
    <Unity
      unityContext={unityContext}
      style={{
        justifyContent: "center",
        width: "60%",
        display: "flex",
        margin: "auto",
        textAlign: "center",
      }}
      
    />
    </div>
  );
}

export default Micrometer;