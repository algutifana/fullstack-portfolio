import React from 'react';
import { DiFirebase, DiNodejs, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './SkillsStyles';

const Skills = () =>  (
  <Section id = 'skills'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Skills</SectionTitle>

    <SectionText>
    I have quite a few different front-end and back-end skills I have picked up over the course of my academic and professional career.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size = '3rem'></DiReact>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experienced with <br /> 
            React.js, Next.js, HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size = '3rem'></DiNodejs>
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experienced with <br /> 
            Node.js, MongoDB, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size = '3rem'></DiPython>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experienced with <br /> 
            Python, Javascript, Java, Solidity 
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Skills;
