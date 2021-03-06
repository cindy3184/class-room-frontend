
function Input({ 
  name, 
  description, 
  type, 
  value, 
  placeholder, 
  handleChange,
  hidden }) {
    return (
      <>
        <label htmlFor={name}>{description}</label>
        <input
        
          id={name}
          name={name}
          description={description}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </>
    );
}

export default Input;
