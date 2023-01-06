import { Textfit } from "react-textfit";
import "../../assets/Screen.css";

function Screen({ value }) {
  return (
    <Textfit className="screen" mode="single" max={50}>
      {value}
    </Textfit>
  );
}

export default Screen;
