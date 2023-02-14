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

function Kelvin() {
  var kelvin = {
    name: "Kelvin Njihia",
    career: "React Developer",
    quote: "Life is beautiful"
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      kelvin.name
    ),
    React.createElement(
      "h3",
      null,
      kelvin.career
    ),
    React.createElement(
      "p",
      null,
      kelvin.quote
    )
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen bg-[#151515] text-slate-300" },
    React.createElement(Kelvin, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));