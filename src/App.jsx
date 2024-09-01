// App
import { Header } from "./components/Header";
import { Section } from "./components/Section";

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
    </div>
  );
}

export default App;
