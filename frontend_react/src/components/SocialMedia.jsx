import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin} from 'react-icons/bs';
import SPCV1 from '../assets/SPCV1.pdf'
import { ImProfile } from "react-icons/im";

const SocialMedia = () => (
  <div className="app__social">
    <div className = "App">
          <a href = {SPCV1} target = "_blank" rel='noopner noreferrer'>
            <ImProfile />
          </a>
        </div>
    <div>
      <a href="https://twitter.com/thesumeetpatil" target="_blank" rel="noopener noreferrer">
      <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/sumeet-patil/" target="_blank" rel="noopener noreferrer">
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://github.com/sumeetptl" target='_blank' rel="noopener noreferrer">
      <BsGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;