import { Fab, makeStyles, Theme } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles<Theme, {}>({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  buttonItem: {
    margin: "0 10px",
  },
});

export interface IButtonItem {
  label: string;
  onClick: () => void;
}

interface IProps {
  primary: IButtonItem;
  secondary?: IButtonItem;
  tertiary?: IButtonItem;
}
export default function FormButtons(props: IProps) {
  const styles = useStyles();
  const history = useHistory();

  return (
    <div className={styles.buttons}>
      {props.primary && (
        <Fab
          type="submit"
          variant="extended"
          color="primary"
          className={styles.buttonItem}
          onClick={props.primary.onClick}
        >
          {props.primary.label}
        </Fab>
      )}

      {props.secondary && (
        <Fab
          onClick={props.secondary.onClick}
          variant="extended"
          color="secondary"
          className={styles.buttonItem}
        >
          {props.secondary.label}
        </Fab>
      )}
      {props.tertiary && (
        <Fab
          onClick={props.tertiary.onClick}
          variant="extended"
          className={styles.buttonItem}
        >
          {props.tertiary.label}
        </Fab>
      )}
      <Fab
        onClick={() => history.push("/HotelsUI")}
        variant="extended"
        className={styles.buttonItem}
      >
        Home
      </Fab>
    </div>
  );
}
