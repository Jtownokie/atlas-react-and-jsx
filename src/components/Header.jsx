// Header Component, Combining Greeting and SocialLinks Components
import { Greeting } from "./Greeting";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <nav>
      <Greeting />
      <SocialLinks />
    </nav>
  );
}
