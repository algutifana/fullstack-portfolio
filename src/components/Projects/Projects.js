import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionText, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ApiComponent from '../APICall/Api';
import Button from '../../styles/GlobalComponents/Button';

const Projects = () => (
  
  <Section nopadding id = 'projects' >
    <SectionDivider/>
    <SectionTitle main >Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>

          <CardInfo>{description}</CardInfo>

          <div>
            <Hr />
            <TitleContent>Tech Used</TitleContent>

            <TagList>
              {tags.map((tag,i) =>(
                <Tag key = {i}>{tag}</Tag>
              ))}
            </TagList>
          </div>

          <UtilityList>
            <ExternalLinks href = {visit}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
    <SectionText>This is a randomly generated emoji from an API that I created in Python! Try refreshing the page to get a new one!</SectionText>
    <Button onClick = {() => {window.open('https://14r92n.deta.dev/docs');}}>Link to the API Docs!</Button>

      <ApiComponent></ApiComponent>


  </Section>
  
);

export default Projects;