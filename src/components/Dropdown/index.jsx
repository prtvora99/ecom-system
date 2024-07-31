const Dropdown = ({ options = [], onChange = () => {} }) => {
  return (
    <select onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>{option.name}</option>
      ))}
    </select>
  );
};

export default Dropdown;
