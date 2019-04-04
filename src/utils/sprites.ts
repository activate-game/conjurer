import { Sprite } from "../components/SpritePicker";
import { assetUrl } from "../utils/assets";

const sprites: { [key: string]: Sprite[] } = {
  armor: [
    { image: assetUrl("armor-boots.png"), index: 36 },
    { image: assetUrl("armor-breastplate.png"), index: 38 },
    { image: assetUrl("armor-gauntlets.png"), index: 34 },
    { image: assetUrl("armor-helm.png"), index: 42 },
    { image: assetUrl("armor-shield.png"), index: 77 },
  ],
  artifact: [
    { image: assetUrl("artifact-amulet.png"), index: 81 },
    { image: assetUrl("artifact-book.png"), index: 1 },
    { image: assetUrl("artifact-compass.png"), index: 94 },
    { image: assetUrl("artifact-crown.png"), index: 56 },
    { image: assetUrl("artifact-gem.png"), index: 24 },
  ],
  weapon: [
    { image: assetUrl("weapon-battleaxe.png"), index: 67 },
    { image: assetUrl("weapon-broadsword.png"), index: 66 },
    { image: assetUrl("weapon-club.png"), index: 70 },
    { image: assetUrl("weapon-dagger.png"), index: 64 },
    { image: assetUrl("weapon-scepter.png"), index: 71 },
  ],
};

export default sprites;
