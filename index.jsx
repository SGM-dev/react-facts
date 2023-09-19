import React from "react";
import ReactDOM from "react-dom/client";

import Header from "/Header.jsx";
import MainContent from "/MainContent.jsx";
import Footer from "/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
