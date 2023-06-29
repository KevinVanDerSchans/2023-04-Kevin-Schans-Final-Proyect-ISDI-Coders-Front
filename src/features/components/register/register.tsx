import { SyntheticEvent } from "react";
import { useUsers } from "../../hooks/use.users";
import { User } from "../../models/user";

export default function Register() {
  const { handleRegisterUser } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const data = {
      userName: (formElement.user as HTMLInputElement).value,
      email: (formElement.email as HTMLInputElement).value,
      password: (formElement.password as HTMLInputElement).value,

    } as unknown as Partial<User>;
    console.log(data)
    handleRegisterUser(data);
    formElement.reset();
  };

  return (
    <>
      <h2>Sign up</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Username</label>
          <input type="text" id="user" name="user" />
        </div>

        <div>
          <label htmlFor="email">E-mail address</label>
          <input type="email" id="email" name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}
