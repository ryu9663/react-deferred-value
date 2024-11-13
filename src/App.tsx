import "./App.css";
import BlockingRendering from "./BlockingRendering";
import ConcurrentRendering from "./ConcurrentRendering";

function App() {
  return (
    <>
      {/* <ConcurrentRendering /> */}
      <BlockingRendering />
    </>
  );
}

export default App;
