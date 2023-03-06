import React from 'react';
import './works.css';

import { FeaturedProject } from '../../components';
import {OtherProjects} from '../../containers';

const Works = () => {
  return (
    <a id="works"> 
        <FeaturedProject/>
        <FeaturedProject/>
        <FeaturedProject/>
        <OtherProjects/>
    </a>
  )
}

export default Works