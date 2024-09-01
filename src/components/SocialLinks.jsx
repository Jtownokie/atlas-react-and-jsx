// Social Links Component
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/c-r-stephens/" target="_blank"><img src={linkedin} /></a>
      <a href="https://github.com/Jtownokie" target="_blank"><img src={github} /></a>
    </div>
  )
}
