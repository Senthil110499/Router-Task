import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blog Category</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-evenly " id="navbarSupportedContent">
        <Link to='/'>ALL</Link>
        <Link to='/FullStack'>FULL STACK DEVELOPMENT</Link>
        <Link to='/DataScience'>DATA SCIENCE</Link>
        <Link to='/CyberSecurity'>CYBER SECURITY</Link>
        <Link to='/Career'>CAREER</Link>
    </div>
  </div>
</nav>
    );
};

export default Navbar;