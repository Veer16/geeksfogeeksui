import {
  makeStyles,
  Fab,
  TextField,
  Typography,
  Theme,
} from "@material-ui/core";
import { ViewColumnTwoTone } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import FormButtons, { IButtonItem } from "./FormButtons";
// import FormButtons from "./FormButtons";

const useStyles = makeStyles<Theme, IProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: (props) => props.height - 60 + "px",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  outerDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  innerDiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "300px",
  },
  title: {
    textAlign: "center",
  },
  buttonItem: {
    margin: "0 10px",
  },
});

export interface IAuthentication {
  userName: string;
  email: string;
  password: string;
}

interface IProps {
  isUserNameVisible: boolean;
  title: string;
  height: number;
  tertiary: IButtonItem;
  onSubmit: (data: IAuthentication) => void;
}
export default function Authentication(props: IProps) {
  const styles = useStyles(props);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthentication>();
  const history = useHistory();

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        <Typography variant="h3" className={styles.title}>
          {props.title}
        </Typography>

        <form
          className={styles.container}
          onSubmit={handleSubmit(props.onSubmit)}
        >
          {props.isUserNameVisible && (
            <TextField
              {...register("userName", {
                required: true,
                minLength: { value: 4, message: "4 is min length" },
              })}
              variant="outlined"
              label="User Name"
              placeholder="User Name"
              required={true}
              error={errors && errors.userName?.message ? true : false}
              helperText={errors.userName?.message}
            />
          )}
          <TextField
            type="email"
            {...register("email", {
              minLength: { value: 4, message: "4 is min length" },
              pattern: {
                value: /\w+@\w+\.\w+/,
                message: "Email regex not matched",
              },
            })}
            variant="outlined"
            label="Email Address"
            placeholder="Email Address"
            required={true}
            error={errors && errors.email?.message ? true : false}
            helperText={errors.email?.message}
          />

          <TextField
            type="password"
            {...register("password", {
              required: true,
              minLength: { value: 4, message: "min length is 4" },
            })}
            variant="outlined"
            label="Password"
            placeholder="Password"
            required={true}
            error={errors && errors.password?.message ? true : false}
            helperText={errors.password?.message}
          />
          <FormButtons
            primary={{
              label: "Submit",
              onClick: () => console.log("submit"),
            }}
            secondary={{
              label: "Reset",
              onClick: () => reset(),
            }}
            tertiary={props.tertiary}
          />
        </form>
      </div>
    </div>
  );
}
