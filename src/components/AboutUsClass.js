import React from "react";
class AboutUsClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)

    this.state = {
        userInfo:{name:"",
        avatar_url:""
    }};
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mksmukesh");
    const json = await data.json();
    this.setState({
        userInfo:json
    })

    console.log(json);
  }
  

  render() {
    // const { name } = this.props;
       const{avatar_url,login,type}=this.state.userInfo
    return (
      <div className="about-container">
        <img src={avatar_url}></img>
        <h2>Designation:{type}</h2>
        <h2>Name:{login}</h2>
        
      </div>
    );
  }
}
export default AboutUsClass;
