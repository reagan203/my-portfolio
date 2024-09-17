import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'CLI To DO list',
      description: 'a to do list that works in the CLI',
      image: '../terminal.png',
      repoLink: 'https://github.com/reagan203/terminal',
    },
    // MORE 
  ];

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
    backgroundColor: '#00d1b2',
    color: '#fff',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    borderRadius: '5px',
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#009d91',
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

export default CProjects;
