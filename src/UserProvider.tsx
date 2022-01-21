import { createContext, useEffect, useState } from "react";
import firebase from "firebase";
import { create } from "cypress/types/lodash";

export const UserContext = createContext<firebase.User | null>(null);

interface IProp {
  children: React.ReactNode;
}
export default function UserProvider(props: IProp) {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      setLoading(true);
      setUser(firebaseUser);
      setLoading(false);
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}
