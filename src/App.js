import React, { Suspense } from "react";
import Navbar from "./components/layouts/navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/layouts/footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Promotions from "./pages/Promotions";
import Pizza from "./pages/Pizza";
import Sandwiches from "./pages/sandwiches";
import Extra from "./pages/Extra";

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
            <Route path="/promotions" component={Promotions} />
            <Route path="/pizza" component={Pizza} />
            <Route path="/sandwiches" component={Sandwiches} />
            <Route path="/extra" component={Extra} />
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
