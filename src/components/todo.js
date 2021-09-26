
import '../index.css';
function Todo (props) {
  return (
    <div>
         <div className="card">
                <h2>Card Text</h2>
                <h3>{props.text}</h3>
                <textarea>Write sth...</textarea> <br></br>
                <button className="btn" onClick={props.onCancel} > Delete</button>
         </div>
    </div>
  );
}
export default Todo;