// src/app/page.js (or src/app/home.js if you have a different setup)


import Image from 'next/image';
import InteractiveButtons from '../components/InteractiveButtons';

const Home = () => {
  return (
    <>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '7rem' }}>
        <div style={{ width: '40%' }}>
          <p style={{fontSize:'45px'}}>My Self <span style={{ color: 'rgb(51, 194, 194)', fontWeight: '1000' }}>Atharav</span></p>
          <p style={{fontSize:'30px'}}>& I am a Software Developer</p>
          <InteractiveButtons />
        </div>
        <div style={{ width: '40%', marginLeft: '20rem' }}>
          <Image
            src="/pngegg.png"
            alt="Profile Image"
            width={220}
            height={220}
            style={{ borderRadius: '50%', border: '2px solid rgb(125 160 96)', filter: 'drop-shadow(20px 20px 40px rgb(0, 1, 3))' }}
          />
        </div>
      </section>
      <div style={{ color: '#F1FADA', margin: '3rem 5rem', display: 'flex' }}>
        I'm a CSE undergrad with a passion for Machine Learning, Artificial Intelligence, and Cloud Computing. With expertise in C++, Python, HTML/CSS, JS, SQL I am committed to delivering innovative software solutions that solve complex problems. As a skilled developer, I have completed several successful projects. I'm always looking for opportunities to expand my knowledge and skills.
      </div>
      <div style={{ color: 'gray', marginTop: '-2.5rem', marginLeft: '5rem' }}>
        Currently Intern at Website Vikreta.
      </div>
      <div style={{ color: '#F1FADA', position: 'relative', margin: '3rem 5rem', display: 'flex', fontSize: '1.3rem', fontWeight: '600' }}>
        Click on About Me section for more details and projects
      </div>
    </>
  );
};

export default Home;
