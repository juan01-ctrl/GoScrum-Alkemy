import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../Fields/TextFields";
import SelectFields from "../../Fields/SelectFields";
import { useState } from "react";
import InputSwitch from "./InputSwitch";
import swal from 'sweetalert';


//* TYPES
type values = {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    continent: string;
    region: string;
    teamID: string;

};
type body = {
  userName: string;
  email: string;
  password: string;
  role: string;
  continent: string;
  region: string;
  teamID: string;

};


//
export const Signup = () => {
  const navigate = useNavigate()

  //*STATES
  const [haveTeam, setHaveTeam] = useState<boolean>(false);


  //* AXIOS REQUEST
enum REQUEST {
METHOD = "POST",
URL = "https://goscrum-api.alkemy.org/auth/register"

}

  const PostRegister = async(user:body) =>{
    // console.log({user:body})
    try {
      const data = await axios.post(REQUEST.URL, {user})
      
      navigate("/")
    } catch (error) {
      if(error instanceof Error)
      swal({
        title: "Oops!",
        text: "That account already exist!",
        icon: "error",
      })
    }
  }

  //* HANDLES
  const handleSubmit = (values:values) => {
   let {confirmPassword,...body} = values
    body.teamID = body.teamID || crypto.randomUUID()

    PostRegister(body)
    
  };


  //* FORM SCHEMA

  const validateSignup = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .min(2,"The user name is too short")
      .required("User name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
    region: Yup.string()
      .oneOf(
        ["Otro", "Latam", "Brazil", "America del Norte"],
        "You must select a region"
      )
      .required("Region is required"),
    continent: Yup.string()
      .oneOf(["Europa", "America", "Otro"], "You must select a continent")
      .required("Continent is required"),
    role: Yup.string()
      .oneOf(["Team Member", "Team Leader"], "You must select a role")
      .required("Role is required"),
  });



  return (
    <>
      {
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "",
            continent: "",
            region: "",
            teamID: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validateSignup}
        >
          {(formik) => {

            const {continent} = formik.values
            return(
            <div className="signup">
              <div className="form-signup">
                <h1 className="signup-title">Sign Up</h1>
                <Form>
                  <TextField label="Username" name="userName" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Password" name="password" type="password" />

                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                  <InputSwitch setHaveTeam={setHaveTeam} />
                  {haveTeam && (
                    <>
                      <TextField name="teamID" type="text" label="Team ID" />
                    </>
                  )}
                  <SelectFields
                    name="role"
                    options={["Select a role", "Team Member", "Team Leader"]}
                  />
                  <SelectFields
                    name="continent"
                    options={[
                      "Select a Continent",
                      "Europa",
                      "America",
                      "Otro",
                    ]}

                    // setContinent={setContinent}
                  />
                  {continent && (
                    <SelectFields
                      name="region"
                      options={
                        continent === "Europa" ||
                        continent === "Otro"
                          ? ["Select a Region", "Otro"]
                          : ["Select a Region", "Latam", "Brazil"]
                      }
                    />
                  )}
                  <button type="submit" className="submit-btn-form">
                    Register
                  </button>
                </Form>
                <Link to="/" className="redirect-login-signup">
                  do you have an account? Login
                </Link>
              </div>
            </div>
          )}}
        </Formik>
      }
    </>
  );
};
