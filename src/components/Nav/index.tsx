import React from "react";
import Logout from "../../assets/Logout"
import Logo from "../../assets/Logo"



import { Header,  User,NavRightContainer } from "./NavElements";
import OrangeButton from "../Button";

const Nav = () => {
  const handleLogout = (e:React.MouseEvent<SVGSVGElement, MouseEvent>) =>{
      window.location.href = "/"
      localStorage.removeItem("token")
  }
  return(
    <Header>
        <Logo/>
        <NavRightContainer>
        <OrangeButton buttonText="Donate" marginTop="0" type="text"/>
        <User>{localStorage.getItem("user")}</User>
        <Logout handleClick={handleLogout}/>
        </NavRightContainer>

  </Header>);
};

export default Nav;
