import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeading,
  faTextWidth,
  faImage,
  faLink,
  faBullhorn,
  faCode,
  faMobileButton,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const blockTypes = [
  { type: "title", label: "Title", icon: faHeading },
  { type: "text", label: "Text", icon: faTextWidth },
  { type: "image", label: "Image", icon: faImage },
  { type: "button", label: "Button", icon: faMobileButton },
  { type: "link", label: "Link", icon: faLink },
  { type: "cta", label: "CTA", icon: faBullhorn },
  { type: "code", label: "Code", icon: faCode },
  { type: "preview", label: "Preview", icon: faEye, isPreview: true },
];

const Sidebar: React.FC<{ onPreview: () => void }> = ({ onPreview }) => {
  return (
    <div className="col-1">
      <ul className="list-unstyled">
        {blockTypes.map((block) => (
          <li
            key={block.type}
            data-type={block.type}
            className="block-source"
            onClick={block.isPreview ? onPreview : undefined}
          >
            <div className="text-center">
              <div>
                <FontAwesomeIcon icon={block.icon} size="2x" />
              </div>
              <span className="text-center">{block.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
