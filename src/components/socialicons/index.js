import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

// Minimal + robust: only GitHub + LinkedIn, opens in new tab
export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a
              href={socialprofils.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="social-link"
            >
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a
              href={socialprofils.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

export default Socialicons;
