import reactImage from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import state from "./assets/state-mgmt.png";
import config from "./assets/config.png";
import jsxUI from "./assets/jsx-ui.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export const userData = {
  firstName: "Klajdi",
  lastName: "Gashi",

  title: "Intern",
};

export function User() {
  <div id="user" data-testid="user">
    <h2>
      {userData.firstName} {userData.lastName}
    </h2>
    <p>{userData.title}</p>
  </div>;
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The Core UI building block."
              img={componentsImg}
            />
            <CoreConcept
              title="State"
              description="The Core UI building block"
              img={state}
            />
            <CoreConcept
              title="Config"
              description="The Core UI building block"
              img={config}
            />
            <CoreConcept
              title="JSX"
              description="The Core UI building block"
              img={jsxUI}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
