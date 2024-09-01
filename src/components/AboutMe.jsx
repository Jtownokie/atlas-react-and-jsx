// About Me Component
import aboutme from "../assets/about-me-img.png";

export function AboutMe(props) {
  return (
    <div className="about-me">
      <img src={aboutme} />
      {props.children}
    </div>
  );
}
