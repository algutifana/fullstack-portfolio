import Achievements from '../components/Achievements/Achievements';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    
    <Layout>
      {/* <Section grid> */}
        <Hero />
        
        {/* <BgAnimation /> */}
      {/* </Section> */}
      <Achievements />
      
      <Skills />
      <Projects />
      
    </Layout>
    
  );
};

export default Home;
