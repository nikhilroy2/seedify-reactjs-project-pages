import React from "react";
import "./ProfileOverView.css";
import ProfileJumbotron from "../../components/ProfileJumbotron/ProfileJumbotron";
function ProfileOverview(props) {
  return (
    <div id="ProfileOverview">
      <Section1></Section1>
    </div>
  );
}

const Section1 = () => {
  return (
    <section id="Section1">
      <ProfileJumbotron></ProfileJumbotron>
    </section>
  );
};

export default ProfileOverview;
