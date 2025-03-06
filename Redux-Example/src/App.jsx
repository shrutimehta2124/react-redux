import { useState } from "react";
import HookList from "./Components/HookList";
import ExampleList from "./Components/ExampleList";
import ExampleDetail from "./Components/ExampleDetail";

const App = () => {
  const [selectedHook, setSelectedHook] = useState(null);
  const [selectedExample, setSelectedExample] = useState(null);

  return (
    <div className="p-6">
      {!selectedHook ? (
        <HookList setSelectedHook={setSelectedHook} />
      ) : !selectedExample ? (
        <ExampleList hookName={selectedHook} setSelectedExample={setSelectedExample} setSelectedHook={setSelectedHook} />
      ) : (
        <ExampleDetail hookName={selectedHook} exampleName={selectedExample} setSelectedExample={setSelectedExample} />
      )}
    </div>
  );
};

export default App;
