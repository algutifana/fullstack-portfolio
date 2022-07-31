import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      <img src = 'images/me.png' style={{borderRadius: '5%', boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',float: 'right',height: 300, width: 200 }}/>

        Hello! My name is Aaron Algutifan.

      </SectionTitle>
      <SectionText>
        I am a Full Stack Developer and Software Engineering student at the University of Missouri looking for an internship or a full-time position.  
      </SectionText>
      
      <a href = 'images/aaronresumenewgrad.pdf' download = 'Aaron Algutifan Resume'>
      <Button>Download Resume!</Button>
      </a>


      
    </LeftSection>
  </Section>
);

export default Hero;