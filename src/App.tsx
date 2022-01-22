import { Route } from "react-router-dom";
import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentDidMount from "./ComponentDidMount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import Hooks from "./Hooks";
import HooksUI from "./HooksUI";
import HotelsUI from "./HotelsUI";
import Login from "./Login";
import MainClass from "./MainClass";
import Profile from "./Profile";
import ReduxBasics from "./ReduxBasics";
import SignUp from "./SignUp";
import SliceUI from "./SliceUI";
import UsersClass from "./UsersClass";
import WebsiteReducerUI from "./WebsiteReducerUI";
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
