import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Authentication, { IAuthentication } from "./Authentication";

export default function SignUp() {
  const history = useHistory();
  const onSubmit = async (signUp: IAuthentication) => {
    console.log("Signup");
    try {
      const userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUp.email, signUp.password);
      console.log(userData);
      await userData.user?.updateProfile({ displayName: signUp.userName });
      history.push("/");
    } catch (e) {
      throw e;
    }
  };
  return (
    <Authentication
      isUserNameVisible
      title={"Welcome to SignUp page!"}
      height={400}
      onSubmit={onSubmit}
      tertiary={{
        label: "Login",
        onClick: () => history.push("/Login"),
      }}
    />
  );
}
