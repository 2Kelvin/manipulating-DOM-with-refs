export default function App() {
  return (
    <div className="grid place-content-center h-screen bg-slate-400/50">
      <h1>Hello Refs</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
