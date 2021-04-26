import React, { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css";

export const LoginForm = () => {
  const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBr1ehjxkXlICK-Zu0Wu_zUg8H68aQAp5k`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const returnSecureToken = true;
  const [, setIdToken] = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: returnSecureToken,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      setEmail("");
      setPassword("");
      setIdToken(result.idToken);
      setSuccess('Te has logueado con exito..');
    } else {
      const errorResponse = await response.json();
      setError(errorResponse.error);
    }
  };

  const clearFields = (e) => {
    setEmail("");
    setPassword("");
  };

  return !error ? (
    <Form onSubmit={loginUser}>
      <Form.Group
        controlId="formBasicEmail"
        value={email}
        onChange={handleChangeEmail}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Introduce your company email.
        </Form.Text>
      </Form.Group>
      <Form.Group
        controlId="formBasicPassword"
        value={password}
        onChange={handleChangePassword}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onclick={clearFields}>
        Submit
      </Button>
      <div className="success-container">
        <p>{success}</p>
      </div>
    </Form>
  ) : (
    <Form onSubmit={loginUser}>
      <Form.Group
        controlId="formBasicEmail"
        value={email}
        onChange={handleChangeEmail}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Introduce your company email.
        </Form.Text>
      </Form.Group>
      <Form.Group
        controlId="formBasicPassword"
        value={password}
        onChange={handleChangePassword}
      >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onclick={clearFields}>
        Submit
      </Button>
      <div className="error-container">
        <p>{error.message}</p>
      </div>
    </Form>
  );
};
