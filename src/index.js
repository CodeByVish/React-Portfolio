import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./app/App";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "", stack: "", compStack: "" };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error && (error.message || String(error)),
      stack: error && (error.stack || "")
    };
  }
  componentDidCatch(error, info) {
    this.setState({ compStack: info ? info.componentStack : "" });
    console.error("App crashed:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, fontFamily: "monospace", whiteSpace: "pre-wrap" }}>
          <h2>Something went wrong rendering the app.</h2>
          <p><strong>{this.state.message || "Unknown error"}</strong></p>
          {this.state.stack && (
            <>
              <h3>Stack</h3>
              <code>{this.state.stack}</code>
            </>
          )}
          {this.state.compStack && (
            <>
              <h3>Component stack</h3>
              <code>{this.state.compStack}</code>
            </>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </ErrorBoundary>
);
