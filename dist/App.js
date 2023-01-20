function FocusInput() {
  var inputRef = React.useRef(null);

  return React.createElement(
    "div",
    { className: "flex" },
    React.createElement("input", {
      className: "rounded-md pl-2 mr-3 text-black",
      placeholder: "Type here",
      ref: inputRef
    }),
    React.createElement(
      "button",
      {
        className: "bg-orange-300 p-3 rounded-md shadow text-white font-bold",
        onClick: function onClick() {
          return inputRef.current.focus();
        }
      },
      "Focus on the input"
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen bg-[#151515] text-slate-300" },
    React.createElement(FocusInput, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));