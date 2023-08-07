import "../static/css/widgetStyle/customInput.css";
function CustomInput({
  type = null,
  id = null,
  placeholder = null,
  value = null,
  required = null,
  onChange = null,
  className = "",
}) {
  const newClassName = className + " form__input";
  return (
    <input
      type={type}
      id={id}
      className={newClassName}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
}
export default CustomInput;
