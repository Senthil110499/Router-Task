import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog Category</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
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