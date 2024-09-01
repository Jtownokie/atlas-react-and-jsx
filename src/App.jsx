// App
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { HelpfulResource } from "./components/HelpfulResource";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Section title="What is react?">
        React is a Front-End JavaScript Library used for building UI's. It utilizes a declarative syntax
        style to generate reusable Components. These Components streamline the development process to enable
        code reusability and to ensure UI design stays consistent across multiple development teams.
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>Code Reusability</li>
          <li>Design Consistency</li>
          <li>Human-Readable Declarative Syntax</li>
          <li>Rich Ecosystem of Third-Party Libraries</li>
          <li>Virtual DOM Manipulation to Improve Performance</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource label="The Beginner's Guide to React - egghead.io" link="https://egghead.io/courses/the-beginner-s-guide-to-react" />
        <HelpfulResource label="Learn React - Scrimba" link="https://v2.scrimba.com/learn-react-c0e" />
        <HelpfulResource label="Open Source React Courses - GitHub Repository" link="https://github.com/flashohq/open-source-react-courses" />
      </Section>
      <AboutMe>
        My name is Chris Stephens, and I am a Full Stack Web-Development Student currently finishing my last trimester at Atlas Coding School.
        After I graduate, I am looking to enter into a position in the fields of education or healthcare. Helping others is my passion, 
        and helping others learn is a great privilege. This trimester we are learning all about React. JavaScript is my favorite language to work 
        with, and React has an incredibly smooth learning curve, I can't wait to see what all it can do! In my free time I like to read and play video games, 
        I am definitely hoping to use my coding skill set to learn how to create fun interactive mediums.
      </AboutMe>
      <Footer />
    </div>
  );
}

export default App;
