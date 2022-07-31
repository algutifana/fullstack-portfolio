import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCodeBadge, DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href ='/'>

      < a style = {{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '25px'}}>
        <DiCodeBadge size = '3rem' /> <Span>Aaron Algutifan</Span>

      </a>

      </Link>
    </Div1>


    <Div2>
    <li>
        <Link href = '#achievements'>
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#skills'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      
      
    </Div2>

    <Div3>

      <SocialIcons href = 'https://github.com/algutifana'>
        <AiFillGithub size = '3rem'></AiFillGithub>
      </SocialIcons>

      <SocialIcons href = 'https://linkedin.com/in/aaron-algutifan'>
        <AiFillLinkedin size = '3rem'></AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
