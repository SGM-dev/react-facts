import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <footer>
        <small>© 2023 SGM development. All rights reserved.</small>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);