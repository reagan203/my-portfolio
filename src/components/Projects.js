import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <div className="container-fluid vh-100 bg-dark text-light p-5" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h2 className="text-center mb-4" style={{ color: '#00d1b2' }}>Projects</h2>
      <div className="row">
        {/* Frontend Projects */}
        <div className="col-md-4 mb-4">
          <Card className="h-100 border-light shadow-lg" style={{ borderColor: '#00d1b2' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/frontend.jpg`} />
            <Card.Body>
              <Card.Title className="text-center" style={{ color: '#00d1b2' }}>Projects</Card.Title>
              <Card.Text>
                Explore the projects I've built using HTML, CSS, JavaScript, and React.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Link to="/projects/frontend" className="btn btn-outline-light" style={{ borderColor: '#00d1b2', color: '#00d1b2' }}>
                  View  Projects
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* C Projects */}
        <div className="col-md-4 mb-4">
          <Card className="h-100 border-light shadow-lg" style={{ borderColor: '#00d1b2' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/terminal.jpg`} />
            <Card.Body>
              <Card.Title className="text-center" style={{ color: '#00d1b2' }}> Projects</Card.Title>
              <Card.Text>
                Take a look at my out of the box projects, where I demonstrate my skills in low-level programming.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Link to="/projects/c-projects" className="btn btn-outline-light" style={{ borderColor: '#00d1b2', color: '#00d1b2' }}>
                  View  Projects
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>

        {/* Backend Projects */}
        {/* <div className="col-md-4 mb-4">
          <Card className="h-100 border-light shadow-lg" style={{ borderColor: '#00d1b2' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/backend.jpg`} />
            <Card.Body>
              <Card.Title className="text-center" style={{ color: '#00d1b2' }}>Backend Projects</Card.Title>
              <Card.Text>
                See my backend development work using Python, Flask, FastAPI, and SQL.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Link to="/projects/backend" className="btn btn-outline-light" style={{ borderColor: '#00d1b2', color: '#00d1b2' }}>
                  View Backend Projects
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
