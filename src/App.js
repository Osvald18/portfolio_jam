// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <Hero />
      <Section
        id="about"
        title="Who I Am"
        content="Hi, I’m a developer passionate about UI/UX, animations, and building modern web experiences."
      />
      <Section
        id="work"
        title="What I Do"
        projects={[
          {
            name: "Project A",
            desc: "A responsive portfolio built with React and Tailwind CSS.",
            link: "https://github.com/yourusername/project-a",
          },
          {
            name: "Project B",
            desc: "A full-stack web app using Node.js and PostgreSQL.",
            link: "https://github.com/yourusername/project-b",
          },
        ]}
      />
      <Section
        id="contact"
        title="Reach Me"
        content={
          <>
            <p>
              Email: <a href="mailto:you@example.com">you@example.com</a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/yourusername" target="_blank">
                yourusername
              </a>{" "}
              • LinkedIn:{" "}
              <a href="https://linkedin.com/in/yourusername" target="_blank">
                your-linkedin
              </a>
            </p>
          </>
        }
      />
      <Footer />
    </div>
  );
}

export default App;
