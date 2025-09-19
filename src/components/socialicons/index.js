import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.css";

// Named function: Socialicons (matches imports elsewhere)
function Socialicons({ socialprofils = {} }) {
  const items = [
    { key: "github", Icon: FaGithub },
    { key: "linkedin", Icon: FaLinkedinIn },
  ];

  return (
    <div className="social-icons">
      {items.map(({ key, Icon }) => {
        const href = socialprofils[key];
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

export { Socialicons };      // named export (fixes “not exported” error)
export default Socialicons;  // default export (also supported)
