import React, { useState, useContext, useEffect, useRef } from "react";
import { userAuthContext } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
  const authGoogle = useRef(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);

  const { user, logIn, googleSignIn } = useContext(userAuthContext);

  useEffect(() => {
    console.log(user);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!authGoogle.current) {
        await logIn(email, password);
      } else {
        await googleSignIn();
      }
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // const handleGoogleLogIn = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await googleSignIn();
  //     navigate("/");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  return (
    <>
      {loading ? (
        <h3>Cargando...</h3>
      ) : (
        <div>
          <div className="p-4 box">
            <h2 className="mb-3">Firebase Auth Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form
              onSubmit={(e) => {
                authGoogle.current = false;
                handleSubmit(e);
              }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Log In
                </Button>
              </div>
            </Form>
            <hr />
            <div>
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={(e) => {
                  authGoogle.current = true;
                  handleSubmit(e);
                }}
              />
            </div>
          </div>
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
