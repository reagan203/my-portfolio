import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-dark text-light" style={{ fontFamily: 'Roboto, sans-serif', overflow: 'hidden' }}>
      <div className="row w-100">
        {/* Left side with profile picture */}
        <div className="col-md-4 d-flex justify-content-center align-items-center" style={{ borderRight: '2px solid #00d1b2' }}>
          <div className="image-wrapper" style={{ transition: 'transform 0.3s', position: 'relative' }}>
            <img
              src="./profile.JPG"
              alt="Profile"
              className="img-fluid rounded-circle shadow-lg profile-spin"
              style={{
                width: '300px',
                height: '300px',
                border: '5px solid #00d1b2',
                objectFit: 'cover',
                filter: 'drop-shadow(0 0 15px #00d1b2)',
                transition: 'transform 0.3s',
              }}
            />
          </div>
        </div>

        {/* Center with intro text */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center text-center" style={{ borderRight: '2px solid #00d1b2' }}>
          <h1 className="display-4 mb-4" style={{ fontFamily: 'Orbitron, sans-serif', color: '#00d1b2', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Hello, I'm Reagan Mwangi!
          </h1>
          <p className="lead" style={{ fontSize: '1.3rem', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6', maxWidth: '700px' }}>
            A software engineer passionate about web development and C programming.
          </p>
          <p style={{ fontSize: '1.1rem', fontFamily: 'Roboto, sans-serif', lineHeight: '1.6', maxWidth: '700px' }}>
            I am skilled in frontend development using HTML, CSS, JavaScript, React, and Node.js. On the backend, I have experience with Python, SQL, Flask, and FastAPI. I am also proficient in design using Figma. Additionally, I have a strong grasp of C programming and am adept at using GitHub for version control.
          </p>
        </div>

        {/* Right side with links */}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-start pr-5" style={{ borderLeft: '2px solid #00d1b2' }}>
          <div className="mb-4" style={{ transform: 'translateX(10%)', transition: 'transform 0.3s' }}>
            <a href="https://github.com/reagan203" className="btn btn-outline-light btn-block mb-3" style={{ transition: 'all 0.3s', boxShadow: '0 0 15px rgba(0, 209, 178, 0.6)' }}>
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/reagan-mwangi-907a33250" className="btn btn-outline-light btn-block mb-3" style={{ transition: 'all 0.3s', boxShadow: '0 0 15px rgba(0, 209, 178, 0.6)' }}>
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <p className="mt-3">
              <FaEnvelope className="mr-2" /> <a href="mailto:reaganm746@gmail.com" className="text-light">Email: reaganm746@gmail.com</a>
            </p>
            <p>
              <FaPhone className="mr-2" /> <a href="tel:+254769016743" className="text-light">Phone: +254 769 016 743</a>
            </p>
            <a href="./cv mpya.pdf" className="btn btn-outline-light mt-4" style={{ boxShadow: '0 0 15px rgba(0, 209, 178, 0.6)' }}>View CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
