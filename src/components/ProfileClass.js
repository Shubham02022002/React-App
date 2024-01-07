import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "DummyName",
        avatar_url: "DummyAvatar",
        location: "DummyLocation",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Shubham02022002");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div>
        <h1>Hey, Welcome to this amazing website</h1>
        <img
          style={{
            height: "40vh",
            border: "1px solid black",
            padding: "1px",
            borderRadius: "5px",
          }}
          src={this?.state?.userInfo?.avatar_url}
        ></img>
        <h2>Name:{this.state.userInfo.name}</h2>
        <h3>Loacation:{this.state.userInfo.location}</h3>
      </div>
    );
  }
}
export default ProfileClass;
