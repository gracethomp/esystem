export const Dropdown = ({ answers, onChange, name }) => {
  return (
    <>
      {answers.length > 2 ? (
        <select
          className="border w-full p-2 rounded-xl m-2"
          onChange={(answer) => onChange(answer)}
        >
          <option value="default" disabled selected></option>
          {answers?.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
      ) : (
        <div className="flex flex-col m-2">
          {answers?.map((value) => (
            <label key={value} className="inline-flex items-center">
              <input
                type="radio"
                name={name}
                value={value}
                onChange={(value) => onChange(value)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">{value}</span>
            </label>
          ))}
        </div>
      )}{" "}
    </>
  );
};
