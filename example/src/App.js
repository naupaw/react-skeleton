import Skeleton from "@pedox/react-skeleton";
import "@pedox/react-skeleton/dist/index.css";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>@pedox/react-skeleton</h1>
      <a href="https://github.com/pedox/react-skeleton">Github Link</a>
      <p>
        My approach to build this package is provide easy loading skeleton
        without any doubt.
      </p>
      <h1>Installation</h1>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {`npm install @pedox/react-skeleton`}
      </SyntaxHighlighter>
      OR
      <SyntaxHighlighter language="bash" style={atomDark}>
        {`yarn add @pedox/react-skeleton`}
      </SyntaxHighlighter>
      <h1>Basic Usage</h1>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`import React from 'react'
import Skeleton from "@pedox/react-skeleton";
import "@pedox/react-skeleton/dist/index.css";

const App = () => (
  <div className='app'>
    <Skeleton />
  </div>
)
export default App
`}
      </SyntaxHighlighter>
      <h1>Skeleton Example</h1>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton />`}
      </SyntaxHighlighter>
      <h1>Custom Width</h1>
      <Skeleton width={60} />
      <Skeleton width={100} />
      <Skeleton width={200} />
      <Skeleton width={50} />
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton width={60} />`}
      </SyntaxHighlighter>
      <h1>Custom Height</h1>
      <Skeleton width={400} height={8} />
      <Skeleton width={200} height={8} />
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton width={400} height={8} />`}
      </SyntaxHighlighter>
      <h1>Rounded</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Skeleton round width={60} />
        </div>
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <Skeleton width={200} />
          <Skeleton width={100} />
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton round width={60} />`}
      </SyntaxHighlighter>
      <h1>Square</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <Skeleton square width={60} />
        </div>
        <div style={{ flex: 1, marginLeft: "20px" }}>
          <Skeleton width={200} />
          <Skeleton width={100} />
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton square width={60} />`}
      </SyntaxHighlighter>
      <div
        style={{
          background: "#333",
          color: "#fff",
          margin: "15px -30px",
          padding: "5px 30px 15px",
        }}
      >
        <h1>Dark Mode</h1>
        <Skeleton width={400} dark />
        <Skeleton width={200} height={10} dark />
      </div>
      <SyntaxHighlighter language="jsx" style={atomDark}>
        {`<Skeleton dark width={400} />`}
      </SyntaxHighlighter>
    </div>
  );
}

export default App;
