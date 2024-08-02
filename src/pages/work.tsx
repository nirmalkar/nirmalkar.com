import React from "react";
import Layout from "../components/layout";
import { ThemeContext } from "../context/themeProvider";
import Card from "../components/Card";

function Work() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Layout>
      <main className="work-container">
        <section className="project-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>Projects:</h3>
          <Card
            {...{
              clickable: true,
              textColor: theme.colors.oppositePrimary,
            }}
          />
        </section>
        <section className="technologies-container">
          <h3 style={{ color: theme.colors.oppositePrimary }}>Techologies:</h3>
        </section>
      </main>
    </Layout>
  );
}

export default Work;
