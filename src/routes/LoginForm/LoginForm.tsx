import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./LoginForm.module.scss";

function LoginForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      email !== "" &&
      email !== undefined &&
      password !== "" &&
      password !== undefined
    ) {
      e.preventDefault();
      navigate("/");
    }
  };

  return (
    <div className={styles.loginForm}>
      <div className={`d-flex justify-content-center ${styles.headerText}`}>Login</div>
      <form>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email address"
          type="email"
          required
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
          type="password"
          required
          className={styles.inputText}
        />
        <Button
          onClick={(event) => {
            handleSubmit(event);
          }}
          type="submit"
          id="button"
        >
          Login
        </Button>

        <span>
          Or Click here to <Link to={"/signUp"}> Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginForm;
