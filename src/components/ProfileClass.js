import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: { name: "dummy Name", location: "Patna" },
    };
    console.log("Child-constructor method called");
  }
  componentDidMount() {
    // const data = await fetch("https://api.github.com/users/pkumars397");
    // const json = await data.json();
    // console.log(json);
    // this.setState({ userInfo: json });
    // console.log("Child-component did mount");
    // this.id = setInterval(() => {
    //   console.log("setTimeOut in mount");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("Child-component update");
  }
  componentWillUnmount() {
    clearInterval(this.id);
    console.log("Child-component unmounted");
  }
  render() {
    return (
      <>
        {console.log("Child-rendered")}
        <h1>Profile class component</h1>
        <h2>Name:{this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} alt="profilePic" />
        {/* <p>
          Count:{this.state.count},count2:{this.state.count2}
        </p> */}

        {/* we don't mutate the state in class coomponent directly */}
        {/* <button onClick={() => this.setState({ count: 1, count2: 2 })}>
          Change state
        </button> */}
        {/* <button onClick={() => this.setState({ count2: 2 })}>
          Change state
        </button> */}
      </>
    );
  }
}

export default Profile;
