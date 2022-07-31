import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #FFFFFF;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #8A307F;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #FFFFFF;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#FFFFFF;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #8A307F;
border-radius: 15px;
transition: 0.5s;
&:hover{
  opacity: 0;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #FFFFFF;
font-size: 1.5rem;

margin-left: 20px;
`