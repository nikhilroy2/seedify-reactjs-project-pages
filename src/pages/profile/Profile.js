import React from "react";
import "./Profile.css";
function Profile(props) {
  return (
    <div id="ProfilePage">
      <Section1></Section1>
    </div>
  );
}

const Section1 = () => {
  return (
    <section id="Section1">
      <div className="section_container">Section1 of Profile</div>
    </section>
  );
};

export default Profile;
