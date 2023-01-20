export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen bg-slate-400/50" },
    React.createElement(
      "h1",
      null,
      "Hello Refs"
    )
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));