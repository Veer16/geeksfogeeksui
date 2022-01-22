import { makeStyles, Theme, Typography } from "@material-ui/core";
import firebase from "firebase";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import { UserContext } from "./UserProvider";
const useStyles = makeStyles<Theme, {}>({
  title: {
    textAlign: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  innerDiv: {
    height: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
});
export default function Profile() {
  const styles = useStyles();
  const history = useHistory();
  const context = useContext(UserContext);
  const signOut = async () => {
    await firebase.auth().signOut();
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerDiv}>
        <Typography variant="h3" className={styles.title}>
          Welcome to the CHANGED 🍔 Profile Page
        </Typography>

        {context?.email && (
          <Typography variant="h4" className={styles.title}>
            {context.email}
          </Typography>
        )}

        {context?.displayName && (
          <Typography variant="h4" className={styles.title}>
            {context.displayName}
          </Typography>
        )}

        {context?.uid && (
          <Typography variant="h4" className={styles.title}>
            {context.uid}
          </Typography>
        )}

        <FormButtons
          primary={{
            label: "Sign Out",
            onClick: () => signOut(),
          }}
        />
      </div>
    </div>
  );
}
