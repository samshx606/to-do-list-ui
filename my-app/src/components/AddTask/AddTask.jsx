import Button from "../Button/Button";
import Input from "../Input/Input";
import "./AddTask.css";
function AddTask(props) {
  return (
    <div className="add-task">
      <Input 
        className="input add-input" 
        disabled={false} 
        value={props.value} 
        onChange={props.onChange}
        placeholder="What needs to be done?"
      />
      <Button name="Add Task" className="btn add-btn" onClick={props.onClick} />
    </div>
  );
}
export default AddTask