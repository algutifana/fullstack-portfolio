import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AchievementsStyles';

const data = [
  { number: 180000, text: 'USD Crowdfunded'},
  { number: 250000, text: 'USD Trading Volume'},
  { number: 120, text: 'Users / Holders', },
  { number: 10, text: 'Projects', }
];

const Achievements = () => (
  <Section id = 'achievements'>
    <SectionDivider/>
    <br/>
    <SectionTitle>Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Achievements;
