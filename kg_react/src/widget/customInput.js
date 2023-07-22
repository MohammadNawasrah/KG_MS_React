function CustomInput({
  type = "",
  id = "",
  className = "",
  placeholder = "",
  value = "",
  required = "",
  onChange = "",
}) {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
}
export default CustomInput;
