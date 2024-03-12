import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>123 Street Name</li>
              <li>City, State</li>
              <li>Country</li>
              <li>Email: example@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-secondary">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};


export default Footer;
