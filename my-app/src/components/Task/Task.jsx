import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Task.css";
function Task (props) {
    return (
        <div className="task">
            <Input 
                type="text" 
                className="task-display-input" 
                disabled={true} 
                value={props.value} 
            />
            <Button name="Delete" className="btn del-btn" onClick={props.onClick} />
        </div>
    );
}
export default Task;