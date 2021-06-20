import React, { Suspense } from "react";
import Navbar from "./components/layouts/navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layouts/footer";

function App() {
  const x = "ahmet";

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
