const Select = ({   
  options,
  label,
  name,
  defaultValue = '',
  onChange, }) => {
  return ( 
    <div>
    <select
      onChange={onChange}
      name={name}
      defaultValue={defaultValue}
     
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option, key) => (
        <option key={key} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
   );
}
 
export default Select;