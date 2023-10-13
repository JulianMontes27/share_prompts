import React from "react";
import "../styles/globals.css"; //import the CSS to the entire APP.
import Nav from "@components/Nav";
import { Provider } from "@components/Provider";

// export the metadata of the app
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

//in NEXTjs, the Layout of the APP is wrapped around everything!
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
