import React from 'react';
import './footer.css';

import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4 pb-0">
          <section class="mb-4">
            <a href="/" class="btn btn-outline-light btn-floating m-1">
              <Icon.Github/>
            </a>
            <a href="/" class="btn btn-outline-light btn-floating m-1">
              <Icon.Linkedin/>
            </a>
          </section>
        </div>

        <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2"}}>
        © 2023 Copyright: Zachary Blum
        </div>
      </footer>
    </>
  )
}

export default Footer