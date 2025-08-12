import "./Input.css";
function Input(props) {
    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };
    
    return (
        <input 
            type="text" 
            className={props.className} 
            disabled={props.disabled} 
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder || "Enter task..."}
        />
    );
}

export default Input;
