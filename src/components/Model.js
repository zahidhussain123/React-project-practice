
import '../index.css'

function Model (props) {
   
    return(
        <div className="modal">
            <div>
                <h2>Are you Sure?</h2>
                <span>
                    <button className="btn" onClick={props.onSecondCancel} >Cancel</button>
                    <button className="btn-primary" onClick={props.onSecondCancel} >Confirm</button>
                </span>
            </div>
        </div>
    );
}
export default Model;