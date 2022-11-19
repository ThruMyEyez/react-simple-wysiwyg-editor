//🧐import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//🧐import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import Editor from "./components/Editor";

function App() {
  return (
    <main className="App">
      <header className="AppHeader">Simple React WYSIWYG Editor</header>

      <section className="AppContent">
        <article>
          <Editor></Editor>
        </article>
        {/* Fix this! <FontAwesomeIcon icon="fa-sharp fa-solid fa-bars" /> */}
      </section>

      <footer className="AppFooter">R-WYSIWYG.JS Project</footer>
    </main>
  );
}

export default App;
