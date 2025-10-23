import type { FC } from 'react';
import React from 'react';
import Icon from '../../assets/images/SocalIcons';
import { social } from '../../constants/socialContants';
import { ThemeContext } from '../../context/themeProvider';

const Social: FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const { secondary, oppositeSecondary } = theme?.colors;
  return (
    <div className="social-container">
      {social.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social"
          style={{ backgroundColor: secondary }}
        >
          <Icon fill={oppositeSecondary} name={social.name} />
        </a>
      ))}
    </div>
  );
};

export default Social;
