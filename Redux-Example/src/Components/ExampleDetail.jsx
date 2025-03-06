import { lazy, Suspense } from "react";

const ExampleDetail = ({ hookName, exampleName, setSelectedExample }) => {
  // Dynamically import the example component
  const ExampleComponent = lazy(() =>
    import(`../hooks/${hookName}/${exampleName}.jsx`).catch(() => ({
      default: () => <p>Example not found.</p>,
    }))
  );

  return (
    <div className="p-4">
      {/* Back button to return to example list */}
      <button
        onClick={() => setSelectedExample(null)}  // Ensure state updates correctly
        className="mb-4 text-gray-600 hover:underline"
      >
        Back to Examples
      </button>

      <h2 className="text-xl font-bold mb-4">{hookName} - {exampleName}</h2>
      
      <Suspense fallback={<p>Loading...</p>}>
        <ExampleComponent />
      </Suspense>
    </div>
  );
};

export default ExampleDetail;
