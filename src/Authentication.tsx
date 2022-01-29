import { makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import { useState } from "react";
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

export interface IAuthetication {
  userName: string;
  email: string;
  password: string;
}
interface IProps {
  isUserNameVisible: boolean;
  title: string;
  height: number;
  tertiary: IButtonItem;
  onSubmit: (data: IAuthetication) => void;
}
export default function Authentication(props: IProps) {
  const styles = useStyles(props);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthetication>();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit = async (data: IAuthetication) => {
    try {
      setLoading(true);
      await props.onSubmit(data);
      reset();
      history.push("/");
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  };

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
              id="username"
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
            id="emailAddress"
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
            id="password"
          />
          <FormButtons
            primary={{
              label: "Submit",
              onClick: () => onSubmit,
            }}
            secondary={{
              label: "Reset",
              onClick: () => reset(),
            }}
            tertiary={props.tertiary}
          />

          {errorMessage && (
            <Typography
              variant="h4"
              className={styles.errorMessage}
              id="errorMessage"
            >
              {errorMessage}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
}
