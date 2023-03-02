import React from 'react';
import './navbar.css';

import Doc from '../../documents/Resume.docx';

const navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow rounded">
            <a class="navbar-brand" href="/">Zachary Blum</a>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#works">Works</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn border border-success border-2 btn-outline-success" href={Doc}>Resume</a>
                </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default navbar
