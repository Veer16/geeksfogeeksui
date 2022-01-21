import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import { IStatusizedUser, IUser } from "./UsersReducer";
import "./App.css";

export default function ReduxBasics() {
  const dispatch = useDispatch(); //This hook is like an insert query

  //   select the table which in the case is UsersReducer
  const statusizedUser: IStatusizedUser = useSelector(
    (state: AppState) => state.UsersReducer
  );
  useEffect(() => {
    async function api() {
      const respone = await fetch("https://reqres.in/api/users");
      const json = await respone.json();
      //insert the json data to the reducer
      dispatch({ type: "completed", payload: json.data });
    }
    // Before running the api we insert the intial value
    dispatch({ type: "started" });
    api();
  }, []);
  // select column
  if (statusizedUser.loading) {
    return <div>It is Loading</div>;
  } else {
    return (
      <div className="grid-container">
        {statusizedUser.users.map(renderUser)}
      </div>
    );
  }
  function renderUser(user: IUser): JSX.Element {
    return (
      <div className="grid-item" key={user.id}>
        <img src={user.avatar} />
        <div>{user.email}</div>
        <div>{`${user.first_name}${user.last_name}`}</div>
      </div>
    );
  }
}
