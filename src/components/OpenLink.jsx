// Open Link Component
import open from "../assets/open.svg";

export function OpenLink(props) {
  return (
    <a href={props.link} target="_blank"><img src={open} /></a>
  );
}
