import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">All Apps</a>
        <a className="link link-hover">Top Rated</a>
        <a className="link link-hover">New Arrivals</a>
        <a className="link link-hover">Categories</a>
      </nav>

      <nav>
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Our Story</a>
        <a className="link link-hover">Developers</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Support</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>

      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover">Facebook</a>
        <a className="link link-hover">Instagram</a>
        <a className="link link-hover">YouTube</a>
      </nav>
    </footer>
  );
};

export default Footer;
