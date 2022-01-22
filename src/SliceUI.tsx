import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
// import { IStatusizedUser, IUser } from "./UsersReducer";
import { completed, IUser, started } from "./UsersSlice";

export default function SliceUI() {
  const dispatch = useDispatch(); //insert query
  //   select table
  const users: IUser[] = useSelector((state: AppState) => state.UsersSlice);
  useEffect(() => {
    async function api() {
      const respone = await fetch("https://reqres.in/api/users");
      const json = await respone.json();
      //insert
      dispatch(completed(json.data));
    }
    // insert
    dispatch(started());
    api();
  }, [dispatch]);
  // select column
  return (
    <div className="grid-container">
      <h1>Inside the SliceUI component</h1>
      {users.map(renderUser)}
    </div>
  );
}
function renderUser(user: IUser): JSX.Element {
  return (
    <div className="grid-item" key={user.id}>
      <img src={user.avatar} alt="User Avatar" />
      <div>{user.email}</div>
      <div>{`${user.first_name}${user.last_name}`}</div>
    </div>
  );
}
