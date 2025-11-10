import React from 'react';
import { ThemeContext } from '../../context/themeProvider';

type Props = {
  bg?: string;
  color?: string;
  onClose?: () => void;
  size?: number;
  crossSize?: number;
};

function CloseIcon({ bg, color, onClose, size, crossSize }: Props) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const { primary, oppositePrimary } = theme.colors;
        const backgroundColor = bg ?? primary;
        const textColor = color ?? oppositePrimary;

        return (
          <div
            onClick={onClose}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onClose?.();
              }
            }}
            role="button"
            tabIndex={0}
            style={{
              borderRadius: '50%',
              background: backgroundColor,
              height: `${size ?? 32}px`,
              width: `${size ?? 32}px`,
              display: 'flex',
              justifyContent: 'center',
              padding: '4px',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                fontSize: `${crossSize ?? 18}px`,
                color: textColor,
                fontWeight: 'bold',
                userSelect: 'none',
              }}
            >
              &#x2715;
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default CloseIcon;
