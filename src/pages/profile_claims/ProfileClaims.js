import React from "react";
import "./ProfileClaims.css";
import ProfileJumbotron from "../../components/ProfileJumbotron/ProfileJumbotron";
function ProfileClaims(props) {
  return (
    <div id="ProfileClaims">
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

export default ProfileClaims;
