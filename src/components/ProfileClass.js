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
      <div className=" mb-16">
        <h1 className="p-2 m-2 text-center text-2xl">Hello, We deliver Quality Food</h1>
        <div className="flex">
        <img className=" object-center relative inset-0 flex rounded-full m-2"
          style={{
            height: "40vh",
            border: "2px solid black",
            padding: "2px",
          }}
          src={this?.state?.userInfo?.avatar_url}
        ></img>
        <div className="mt-16 ml-10">
        <h2 className="text-lg text-center ">Name: {this.state.userInfo.name}</h2>
        <h3 className="text-center mb-5">Loacation: {this.state.userInfo.location}</h3>
        <h3> I'm a Developer. FoodVillage is developed by me. </h3>
        </div>
        </div>
      </div>
    );
  }
}
export default ProfileClass;
