// Copy Link Component
import copy from "../assets/copy.svg";

export function CopyLink(props) {
  return (
    <img className="copy" src={copy} onClick={() => {navigator.clipboard.writeText(props.link)}} />
  );
}
