import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";
import top from "./assets/backgroundTiles_top.jpg";
import bottom from "./assets/backgroundTiles_bottom.jpg";
import left from "./assets/backgroundTiles_left.jpg";
import right from "./assets/backgroundTiles_right.jpg";
import front from "./assets/backgroundTiles_back.jpg";
import back from "./assets/backgroundTiles_front.jpg";

const BackgroundSky = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const backgroundTexture = loader.load([
    `${top}`,
    `${bottom}`,
    `${left}`,
    `${right}`,
    `${front}`,
    `${back}`
  ]);
  scene.background = backgroundTexture;
  return null;
};

export default BackgroundSky;
