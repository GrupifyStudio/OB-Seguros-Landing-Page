import React from "react";
import { TEAM_LIST_THREE } from "../../mocks/team";
import { TeamAreaThreeItem } from "./TeamAreaThreeItem";

import myGuy1 from '../../assets/img/about-placeholders/person1.png';
import myGuy2 from '../../assets/img/about-placeholders/person2.png';
import myGuy3 from '../../assets/img/about-placeholders/person3.png';
import myGuy4 from '../../assets/img/about-placeholders/person4.png';
// This really should be edited if this goes to prod, however, this is faster rn so im kicking the can down the road good luck!

const memberImages = [
  myGuy1,
  myGuy2,
  myGuy3,
  myGuy4,
];

export const TeamAreaThree = () => {
  const teamMembersWithImages = TEAM_LIST_THREE.map((member, index) => {
    return {
      ...member, 
      image: memberImages[index] || null,
    };
  });

  return (
    <section className="team-area-three">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-50 tg-heading-subheading animation-style1">
              <span className="sub-title tg-element-title">Expert People</span>
              <h2 className="title tg-element-title">Dedicated Team Members</h2>
              <p>
                Ever find yourself staring at your computer screen a good
                consulting slogan to come to mind? Oftentimes.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Map over the new array that includes the images */}
          {teamMembersWithImages.map((member) => (
            <div
              key={member.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-8"
            >
              <TeamAreaThreeItem member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
