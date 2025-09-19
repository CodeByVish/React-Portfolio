import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./style.css";

// Renders only the socials you actually provided in content_option.js
export default function SocialIcons({ socialprofils = {} }) {
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
