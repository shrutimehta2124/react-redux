const ExampleList = ({ hookName, setSelectedExample, setSelectedHook }) => {
    return (
      <div className="p-4">
        {/* Back button to return to the hooks list */}
        <button
          onClick={() => setSelectedHook(null)}  // Ensure state resets
          className="mb-4 text-gray-600 hover:underline"
        >
          Back to Hooks
        </button>
  
        <h2 className="text-xl font-bold mb-4">{hookName} Examples</h2>
  
        <ul className="space-y-2">
          {[...Array(10).keys()].map((num) => (
            <li key={num}>
              <button onClick={() => setSelectedExample(`Example${num + 1}`)} className="text-blue-500 hover:underline">
                Example {num + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ExampleList;
  