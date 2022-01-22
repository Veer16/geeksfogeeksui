import { useForm } from "react-hook-form";
interface IForm {
  name: string;
  email: string;
  password: string;
}

export default function HooksUI() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const myCallBack = (data: IForm) => {
    //   sending data to backend
    console.log(
      "mycallback got invoked" + data.name + data.email + data.password
    );
  };
  return (
    <form onSubmit={handleSubmit(myCallBack)}>
      <input
        type="text"
        {...register("name", {
          required: true,
          minLength: { value: 4, message: "name should be mini 4" },
          maxLength: { value: 8, message: "name should be max 8 " },
        })}
        placeholder="Name"
      />
      {errors.name?.message && <div>{errors.name.message}</div>}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: { value: /\w+@\w+\.\w+/, message: "Email invalid" },
        })}
      />
      {errors.email?.message && <div>{errors.email.message}</div>}
      <input type="password" placeholder="Password" {...register("password")} />
      <button onClick={() => reset()}>Reset</button>
      <button type="submit">Submit</button>
    </form>
  );
}
