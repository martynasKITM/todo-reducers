import {ListGroup,Button} from "react-bootstrap";
import {useGlobalContext} from "../../context/TasksContext";
const Task = (props)=>{
    const {removeTask}=useGlobalContext();
    return(
        <ListGroup.Item>{props.title}:{props.desc}<Button onClick={()=>{removeTask(props.id)}} className="float-end">Šalinti</Button></ListGroup.Item>
    )
}

export default Task

