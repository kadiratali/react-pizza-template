import React, { Suspense } from "react";
import Navbar from "./components/layouts/navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layouts/footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const x = "ahmet";

  return (
    <BrowserRouter>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
