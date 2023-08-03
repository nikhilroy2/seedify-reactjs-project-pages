import React from "react";
import "./ProfileOverView.css";
import ProfileJumbotron from "../../components/ProfileJumbotron/ProfileJumbotron";
function ProfileOverview(props) {
  return (
    <div id="ProfileOverview">
      <Section1></Section1>
      <Section2></Section2>
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


const Section2 = ()=> {
  return (
    <section id="Section2">
      <div className="section_container">
        <div className="flex">
          <div className="overview_card overview_card_1">
            <div className="card_header">
              <h3>Initial Offerings Participated</h3>
              <button className="info_btn">
              <img className="info_icon" src={require('../../static/images/info_icon.5ae402af.svg').default} alt="" />
              </button>
            </div>
            <div className="card_body">
              <span className="text-[28px] font-bold">0.0%</span>
              <span className="text-[56px] font-bold">0/0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileOverview;
