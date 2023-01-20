function FocusInput() {
  const inputRef = React.useRef(null);

  return (
    <div className="flex">
      <input
        className="rounded-md pl-2 mr-3 text-black"
        placeholder="Type here"
        ref={inputRef}
      />
      <button
        className="bg-orange-300 p-3 rounded-md shadow text-white font-bold"
        onClick={() => inputRef.current.focus()}
      >
        Focus on the input
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="grid place-content-center h-screen bg-[#151515] text-slate-300">
      <FocusInput />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
