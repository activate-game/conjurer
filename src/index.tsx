import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router } from "@reach/router";
import * as serviceWorker from "./serviceWorker";
import ItemEditor from "./screens/ItemEditor";
import NotFound from "./screens/NotFound";

import "./index.css";

const client = new ApolloClient({
  uri: "https://api.activategame.dev/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ItemEditor path="/:dungeonId/item" />
        <NotFound default />
      </Router>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));

serviceWorker.unregister();
