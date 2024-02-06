import AboutUsClass from "./AboutUsClass";
import UserCard from "./UserCard";
import React from "react";

class AboutUS extends React.Component {
  constructor() {
    super();
    this.intern = null;
  }
  componentDidMount() {
   this.intern= setInterval(() => {
      console.log("ComponentDidMount called ")
    }, 1000);
  }
  componentWillUnmount(){
    console.log("componentwillunmount called")
    clearInterval(this.intern);
  }
  render() {
    return (
      <div>
        <AboutUsClass  />
      </div>
    );
  }
}
export default AboutUS;
