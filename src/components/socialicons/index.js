import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { socialprofils as defaultSocials } from "../../content_option";
import "./style.css";

// Uses props if provided, otherwise falls back to content_option.js
function Socialicons({ socialprofils }) {
  const socials = socialprofils || defaultSocials || {};

  const items = [
    { key: "github", Icon: FaGithub },
    { key: "linkedin", Icon: FaLinkedinIn },
  ];

  return (
    <div className="social-icons">
      {items.map(({ key, Icon }) => {
        const href = socials[key];
        if (!href) return null;
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export { Socialicons };
export default Socialicons;
