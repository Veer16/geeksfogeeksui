import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./ComponentA";
import { Route } from "react-router-dom";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import MainClass from "./MainClass";
import UsersClass from "./UsersClass";
import Hooks from "./Hooks";
import ComponentDidMount from "./ComponentDidMount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import ReduxBasics from "./ReduxBasics";
import WebsiteReducerUI from "./WebsiteReducerUI";
import HotelsUI from "./HotelsUI";
import SliceUI from "./SliceUI";
import HooksUI from "./HooksUI";
import SignUp from "./SignUp";
import Login from "./Login";
import Profile from "./Profile";
function App() {
  return (
    <switch>
      {/* Routing Example */}
      <Route exact path="/a" component={ComponentA} />
      <Route exact path="/b/:name" component={ComponentB} />
      <Route exact path="/c" component={ComponentC} />
      {/* Class based component */}
      <Route exact path="/MainClass" component={MainClass} />
      <Route exact path="/UsersClass" component={UsersClass} />
      {/* Function examples */}
      <Route exact path="/Hooks" component={Hooks} />
      <Route exact path="/ComponentDidMount" component={ComponentDidMount} />
      <Route exact path="/ComponentDidUpdate" component={ComponentDidUpdate} />

      {/* Redux example */}
      <Route exact path="/ReduxBasics" component={ReduxBasics} />
      <Route exact path="/WebsiteReducerUI" component={WebsiteReducerUI} />
      <Route exact path="/SliceUI" component={SliceUI} />
      {/* React Hooks form */}
      <Route exact path="/HooksUI" component={HooksUI} />

      {/* project */}
      <Route exact path="/HotelsUI" component={HotelsUI} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Profile" component={Profile} />
    </switch>
  );
}

export default App;
