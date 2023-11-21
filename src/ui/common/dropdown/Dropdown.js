export const Dropdown = ({ answers, onChange }) => {
  return (
    <select
      className="border w-full p-2 rounded-xl m-2"
      onChange={(answer) => onChange(answer)}
    >
      <option value="default" disabled selected></option>
      {answers?.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};
