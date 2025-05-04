import { IoCopyOutline } from '@react-icons/all-files/io5/IoCopyOutline';
import React, { useState } from 'react';
interface ThemeColors {
  primary: string;
  secondary: string;
  oppositePrimary: string;
  oppositeSecondary: string;
}
interface Theme {
  colors: ThemeColors;
}
interface CopyToClipboardButtonProps {
  text: string;
  theme: Theme;
  onCopy: () => void;
  copying: boolean;
}

const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  text,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          padding: '5px',
          backgroundColor: '#121212',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IoCopyOutline style={{ marginRight: '5px' }} />
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="language-javascript">
        <code className="language-javascript">{text}</code>
      </pre>
    </div>
  );
};

export default CopyToClipboardButton;
