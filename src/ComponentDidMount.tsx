import { useEffect, useState } from "react";
import "./App.css";

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export default function ComponentDidMount() {
  const [user, setUser] = useState<IUser[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function api() {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      setUser(json.data);
      console.log(user);
      setLoading(false);
    }
    api();
  }, []);
  if (isLoading) {
    return <div>It is Loading</div>;
  } else {
    return <div className="grid-container"> {user.map(renderUser)}</div>;
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
