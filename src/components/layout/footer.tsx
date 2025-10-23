import React, { useState } from 'react';
import ShareIcon from '../../assets/svg/Share';
import { ThemeContext } from '../../context/themeProvider';

const Footer: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const [copyStatus, setCopyStatus] = useState(false);
  const copyWebsite = () => {
    const href = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(href);
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
  };

  return (
    <footer className="footer">
      <p>All materials © nirmalkar {new Date().getFullYear()}</p>
      <div onClick={copyWebsite} className="share-icon">
        <div className="copy-text">
          {copyStatus && "copied"}
        </div>
        <ShareIcon size={20} color={theme.colors.oppositePrimary} />
      </div>
    </footer>
  );
};

export default Footer;
