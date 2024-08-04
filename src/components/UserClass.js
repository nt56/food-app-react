import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    //API Call
    const data = await fetch("https://api.github.com/users/nt56");
    const json = await data.json();
    console.log(json);

    //updating the information on UI
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>contact : tirthnagbhushan56@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
