import type { FC } from 'react';
import React from 'react';
import Icon from '../../assets/images/SocalIcons';
import { social } from '../../constants/socialContants';
import { ThemeContext } from '../../context/themeProvider';

const Social: FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const { secondary, oppositeSecondary, primary } = theme?.colors || {
    secondary: '#f0f0f0',
    oppositeSecondary: '#333333',
    primary: '#ffffff',
  };

  const backgroundColor =
    theme?.colors?.primary === '#ffffff' ? primary : secondary;

  return (
    <div className="social-container">
      {social.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social"
          style={{ backgroundColor }}
        >
          <Icon fill={oppositeSecondary} name={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
