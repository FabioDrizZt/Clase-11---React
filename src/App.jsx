import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Home from "./components/Home";
import LSexample from "./components/LSexample";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Auth() ? <Home /> : <LoginForm />}>
          {/* <Route path="/professional" element=<Professional/>> */}
          {/* <Route path="/professional/:id" element=<Detail/>/> */}
          {/* </Route> */}
          {/* <Route path="/contact" element=<Contact/>/>*/}
        </Route>
      </Routes>
    </>
  );
}

export default App;
