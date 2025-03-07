import { Link, useParams } from "react-router-dom";

const ExampleList = () => {
  const { hookName } = useParams();
  const examples = Array.from({ length: 10 }, (_, i) => `Example${i + 1}`);

  return (
    <div>
      <h2>{hookName} Examples</h2>
      <ul>
        {examples.map((example) => (
          <li key={example}>
            <Link to={`/hooks/${hookName}/${example}`}>{example}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleList;
