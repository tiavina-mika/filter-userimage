import { useEffect, useState } from "react";
import "./styles.css";

const layers = [
  {
    type: "mask",
    layers: [{ type: "userImage" }]
  },
  {
    type: "mask",
    layers: [{ type: "image" }]
  },
  { type: "image" },
  { type: "userImage" },
  {
    type: "mask",
    layers: [{ type: "userText" }, { type: "image" }]
  }
];

const App = () => {
  const [userImagesLayer, setUserImagesLayer] = useState([]);

  useEffect(() => {
    const newLayers = layers.filter((layer) => {
      const hasUserImageSubLayer =
        layer.layers &&
        layer.layers.find((subLayer) => subLayer.type === "userImage");
      const hasUserImageLayer = layer.type === "userImage";
      return hasUserImageSubLayer || hasUserImageLayer;
    });
    console.log(newLayers);
    setUserImagesLayer(newLayers);
  }, [setUserImagesLayer]);

  return (
    <div className="App">
      <h1>Get only layers with userImage</h1>
      <div>
        <h4>Input:</h4>
        <code>{JSON.stringify(layers)}</code>
      </div>

      <div>
        <h4>Output:</h4>
        <code>{JSON.stringify(userImagesLayer)}</code>
      </div>
    </div>
  );
};

export default App;
