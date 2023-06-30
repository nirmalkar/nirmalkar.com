import React from "react";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  return (
    <div>
      <div>
        <a href="https://twitter.com/nirmalkar_">twitter</a>
        <a href="https://github.com/nirmalkar">github</a>
        <a href="https://codepen.io/nirmalkar">codepen</a>
        <a href="https://www.linkedin.com/in/nirmalkar/">likedin</a>
      </div>
    </div>
  );
};

export default Social;
