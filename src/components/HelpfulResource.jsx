// Helpful Resource Component
import { OpenLink } from "./OpenLink";
import { CopyLink } from "./CopyLink";

export function HelpfulResource(props) {
  return (
    <div className="helpful-resource">
      {props.label}
      <OpenLink link={props.link} />
      <CopyLink link={props.link} />
    </div>
  );
}
