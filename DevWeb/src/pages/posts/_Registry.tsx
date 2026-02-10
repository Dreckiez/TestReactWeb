import SurvivingSophomore from "./SurvivingSophomore";
import GameJam from "./GameJam";

const PostRegistry: Record<string, React.ComponentType> = {
    "surviving-sophomore": SurvivingSophomore,
    "game-jam": GameJam,
};

export default PostRegistry;