import React, { Component } from 'react';
import { aboutText, aboutSkills } from 'data';
import BackgroundComponent from './Background.component';

class Background extends Component {
  render() {
    return (
      aboutText && <BackgroundComponent intro={aboutText} skills={aboutSkills} {...this.props} />
    );
  }
}

export default Background;

/* <div className="about__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">HTML5</span>
              <span className="bars__bar-label--pct">80%</span>
            </div>
            <div className="bars__bar bars__bar--pct-80">&nbsp;</div>
          </div>
          <div className="about__bars bars">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">CSS3</span>
              <span className="bars__bar-label--pct">70%</span>
            </div>
            <div className="bars__bar bars__bar--pct-70">&nbsp;</div>
          </div>
          <div className="about__bars bars ">
            <div className="bars__bar-label">
              <span className="bars__bar-label--text">Javscript</span>
              <span className="bars__bar-label--pct">90%</span>
            </div>
            <div className="bars__bar bars__bar--pct-90">&nbsp;</div>
          </div> */

//           .bars {
//   margin: 2rem auto;

//   & __bar {
//     width: 100 %;
//     background - color: #eee;
//     border - radius: 20rem;
//     line - height: 0.5rem;
//     position: relative;

//     &:: before {
//       content: "";
//       position: absolute;
//       bottom: 0;
//       border - top - left - radius: 20rem;
//       border - bottom - left - radius: 20rem;
//       background - color: #27ccc0;
//       height: 0.4rem;
//     }

//     @include fill - bar(70);
//     @include fill - bar(80);
//     @include fill - bar(90);

//     & -label {
//       display: flex;
//       padding - bottom: 0.4rem;
//       align - content: center;
//       justify - content: space - between;
//     }
//   }
// }
