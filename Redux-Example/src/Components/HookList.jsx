import { Link } from "react-router-dom";

const hooks = ["useState", "useEffect", "useCallback", "useMemo", "useContext", "useReducer", "useRef"];

const HookList = () => {
  return (
    <div>
      <h2>React Hooks</h2>
      <ul>
        {hooks.map((hook) => (
          <li key={hook}>
            <Link to={`/hooks/${hook}`}>{hook}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookList;
