import { useState } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../Fields/TextFields";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

//* TYPES

type body = {
  userName: string;
  password: string;
};

export const Login = () => {
 

  //* AXIOS REQUEST
  enum REQUEST {
    METHOD = "POST",
    URL = "https://goscrum-api.alkemy.org/auth/login",
  }

  const PostRegister = (user: body) => {
    // console.log({user:body})
    axios
      .post(REQUEST.URL, user)
      .then(({ data }) => {
        localStorage.setItem("token", data.result.token);
        window.location.href = "/GoScrum-Alkemy/tasklist";
        localStorage.setItem("user", data.result.user.userName);
      })
      .catch((err) => 
      swal({
        title: "Login Refused",
        text: "That account does not exist!",
        icon: "error",
      }));
  };

  //* HANDLES
  const handleSubmit = (body: body) => {
    PostRegister(body);
  };

  //* FORM SCHEMA
  const validateLogin = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(2, "The user name is too short")
      .required("User name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  //   const handleSubmit = () => {};
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validateLogin}
      >
        {(formik) => (
          <div className="login">
            <div className="form-login">
              <h1 className="login-title">Login</h1>
              <Form>
                <TextField label="userName" name="userName" type="text" />
                <TextField label="Password" name="password" type="password" />
               
                <button type="submit" className="submit-btn-form">
                  Login
                </button>
              </Form>
              <Link to="/signup" className="redirect-login-signup">
                don't have an account yet? Sign Up
              </Link>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
