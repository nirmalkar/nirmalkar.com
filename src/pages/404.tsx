import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import PageNotFoundSvg from "../assets/images/NotFound";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found-container">
      <div className="not-found">
        <PageNotFoundSvg color={"#444"} />
        <p className="not-found-text">Page Not Found!</p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
