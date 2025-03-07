import { lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ExampleDetail = () => {
  const { hookName, exampleId } = useParams();
  const navigate = useNavigate();

  // Dynamically import the example component
  const ExampleComponent = lazy(() =>
    import(`../hooks/${hookName}/${exampleId}.jsx`).catch(() => ({
      default: () => <p>Example not found.</p>,
    }))
  );

  return (
    <div className="p-4">
      {/* Back button to return to example list */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-gray-600 hover:underline"
      >
        Back to Examples
      </button>

      <h2 className="text-xl font-bold mb-4">
        {hookName} - {exampleId}
      </h2>

      <Suspense fallback={<p>Loading...</p>}>
        <ExampleComponent />
      </Suspense>
    </div>
  );
};

export default ExampleDetail;
