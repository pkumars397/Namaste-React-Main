import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import UserContext from "../utils/UserContext";
// import Component from "react";
// const About = () => {
//   return (
//     <div className="about">
//       <p>This is About us Page</p>
//       <h2>About us</h2>
//       <Outlet />
//       <ProfileClassComponent />
//       {/* <ProfileFunctionalComponent name={"prashant"} age={24} /> */}
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent-constructor");
  }
  componentDidMount() {
    console.log("parent-Mount");
  }
  render() {
    console.log("parent-render");
    return (
      <div>
        <h2>About Us</h2>
        <ProfileClassComponent />
        <UserContext.Consumer>
          {(value) => {
            return <h1>{value.user.name}</h1>;
          }}
        </UserContext.Consumer>
        {/* <ProfileFunctionalComponent /> */}
      </div>
    );
  }
}

export default About;
