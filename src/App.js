import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Darkm from "./components/Darkm";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "succeess");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch> */}
            {/* <Route path="/about">
              <Darkm />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the Text below" mode={mode} />
            </Route> */}
          {/* </Switch> */}
          <TextForm heading="Enter the Text below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
