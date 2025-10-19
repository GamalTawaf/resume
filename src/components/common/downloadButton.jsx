import React from 'react';
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/downloadButton.css";

const DownloadButton = () => {
    return (
        <a 
            href="https://raw.githubusercontent.com/GamalTawaf/resume/main/resume/GamalTawaf_Resume.pdf" 
            className="download-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faFileDownload} />
            <span>Download Resume</span>
        </a>
    );
};

export default DownloadButton;