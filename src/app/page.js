import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';

const Home = () => {
  const resume = () => {
    window.open('https://drive.google.com/file/d/1wiK5AblOcsRR4U1kb7wwajy1Y_JmH7kK/view?usp=sharing');
  };

  const git = () => {
    window.open('https://drive.google.com/file/d/1wiK5AblOcsRR4U1kb7wwajy1Y_JmH7kK/view?usp=sharing');
  };

  return (
    <>
      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '7rem' }}>
        <div style={{ width: '40%' }}>
          <p>My Self <span style={{ color: 'rgb(51, 194, 194)', fontWeight: '800' }}>Atharav</span></p>
          <p>&amp; I am a Software Developer</p>
          {/* <button className="but" onClick={resume} style={{ backgroundColor: '#635985', color: 'white', fontWeight: '700', borderRadius: '20px', border: 'none', padding: '0.6rem', width: '137px', height: '50px', marginRight: '10px' }}>Download Resume</button>
          <button className="but" onClick={git} style={{ backgroundColor: '#635985', color: 'white', fontWeight: '700', borderRadius: '20px', border: 'none', padding: '0.6rem', width: '137px', height: '50px' }}>GITHUB Profile</button> */}
        </div>
        <div style={{ width: '40%', marginLeft: '20rem' }}>
          <Image src="/pngegg.png" alt="Profile Image" width={220} height={220} style={{ borderRadius: '50%', border: '2px solid rgb(125 160 96)', filter: 'drop-shadow(20px 20px 40px rgb(0, 1, 3))' }} />
        </div>
      </section>
      <div style={{ color: '#F1FADA', margin: '3rem 5rem', display: 'flex' }}>
        I&apos;m a CSE undergrad with a passion for Machine Learning, Artificial Intelligence, and Cloud Computing. With expertise in C++, Python, HTML/CSS, JS, SQL I am committed to delivering innovative software solutions that solve complex problems. As a skilled developer, I have completed several successful projects. I&apos;m always looking for opportunities to expand my knowledge and skills.
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
