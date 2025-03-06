const hooks = ["useState", "useEffect", "useContext", "useRef", "useReducer", "useMemo", "useCallback"];

const HookList = ({ setSelectedHook }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">React Hooks Examples</h2>
      <ul className="space-y-2">
        {hooks.map((hook) => (
          <li key={hook}>
            <button onClick={() => setSelectedHook(hook)} className="text-blue-500 hover:underline">
              {hook}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookList;
