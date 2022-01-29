import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Authentication, { IAuthentication } from "./Authentication";

export default function Login() {
  const history = useHistory();
  const onSubmit = async (details: IAuthentication) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(details.email, details.password);
      history.push("/");
    } catch (e) {
      throw e;
    }
  };
  return (
    <Authentication
      isUserNameVisible={false}
      title={"Welcome to Login page!"}
      height={400}
      onSubmit={onSubmit}
      tertiary={{
        label: "Sign Up",
        onClick: () => history.push("/SignUp"),
      }}
    />
  );
}
