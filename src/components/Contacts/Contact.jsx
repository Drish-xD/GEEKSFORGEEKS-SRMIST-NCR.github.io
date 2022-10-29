import React from "react";
import "./Contacts.css";
import { FaLinkedinIn, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contacts" id="Contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contacts-container">
        <a
          href="https://www.linkedin.com/company/gfg-srm/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/GEEKSFORGEEKS-SRMIST-NCR"
          target="_blank"
          rel="noreferrer"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/gfg_srmist_ncr"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://discord.gg/jSCXs8tV"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <FaDiscord />
        </a>
      </div>

      <footer>
        <p> &#9426; Copyrights 2022 by GFG SRMIST NCR. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
