import type { FC } from 'react';
import React from 'react';
import Icon from '../../assets/images/SocalIcons';
import { social } from '../../constants/socialContants';
import { ThemeContext } from '../../context/themeProvider';

const Social: FC = React.memo(() => {
  const { theme } = React.useContext(ThemeContext);
  const { oppositeSecondary } = theme?.colors || {
    oppositeSecondary: '#333333',
  };

  return (
    <div className="social-container">
      {social.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <Icon fill={oppositeSecondary} name={social.name} />
        </a>
      ))}
    </div>
  );
});

Social.displayName = 'Social';

export default Social;
