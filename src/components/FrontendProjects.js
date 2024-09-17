import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FrontendProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Kenyan Cuisine',
      description: 'A Kenyan cuisine website.',
      image: '../cuisine.png',
      repoLink: 'https://github.com/reagan203/kenyan-cuisine',
    },
    {
      id: 2,
      title: 'Analog clock',
      description: ' an analog clock built using html and css.',
      image: '../analog.png',
      repoLink: 'https://github.com/reagan203/analog-clock',
    },
    {
      id: 3,
      title: 'Realestate website',
      description: 'A relestate website in the frontend built using React.',
      image: '../realestate.png',
      repoLink: 'https://github.com/reagan203/realestate-frontend',
    },
    {
      id: 4,
      title: 'A calculator',
      description: 'A calculator with all functionality built using Html',
      image: '../calc.png',
      repoLink: 'https://github.com/reagan203/simple-calculator',
    },
    {
      id: 5,
      title: 'A coffee website',
      description: ' A coffee website built using react.',
      image: '../coffe app.png',
      repoLink: '#',
    },
    {
      id: 6,
      title: 'A snake game',
      description: ' A fun snake game.',
      image: '../snake.png',
      repoLink: 'https://github.com/reagan203/snake-game',
    },
    {
      id: 7,
      title: 'chat website',
      description: ' A chat website built using chat engine and node.js',
      image: '../chat.png',
      repoLink: 'https://github.com/reagan203/fullstack-chat-app',
    },
    {
      id: 8,
      title: 'Trivia',
      description: ' A trivia game website with a range of topics.',
      image: '../trivia.png',
      repoLink: 'https://github.com/reagan203/trivia-app',
    },
    {
      id: 9,
      title: 'Weather app',
      description: ' A weather website that tells you the weather of any location in the world',
      image: '../weather.png',
      repoLink: 'https://github.com/reagan203/weather-app',
    },
    {
      id: 10,
      title: 'car rental website',
      description: 'a car rental website with very responsive website',
      image: '../rental.png',
      repoLink: 'https://github.com/reagan203/rentals-frontend',
    },
    // Add more projects as needed
  ];

  // Inline styles for the component
  const cardStyle = {
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100%',
  };

  const imgStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  const cardBodyStyle = {
    backgroundColor: '#f8f9fa',
  };

  const buttonStyle = {
    backgroundColor: '#00d1b2', /* Accent color */
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    borderRadius: '5px',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#009d91', /* Slightly darker shade for hover effect */
    transform: 'scale(1.1)',
    textDecoration: 'none',
  };

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((project) => (
          <div className="col" key={project.id}>
            <div className="card project-card h-100" style={cardStyle}>
              <img src={project.image} className="card-img-top" alt={project.title} style={imgStyle} />
              <div className="card-body" style={cardBodyStyle}>
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a 
                  href={project.repoLink} 
                  className="btn repo-btn" 
                  style={buttonStyle} 
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendProjects;
