import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";
import { Data } from "./pages/Data";
import { NavigationMenu } from "./components/NavigationMenu/NavigationMenu";
import { AuthProvider } from "./Providers/AuthProvider";

function App() {

  return (
    <AuthProvider>
      <Router>
        <div className="header-container">
          <header className="header">
            <a href="/Landing">
              <img
                className="header-logo"
                src="/tecdesoft-logohead.png"
                alt="logo"
              ></img>
            </a>
            <NavigationMenu />
          </header>
          <main className="main-container">
            <Switch>
              <Route path="/data">
                <Data />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
