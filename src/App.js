
 import Todo from "./components/todo";
 import {useState} from 'react';
 import Model from "./components/Model";
 import Backdrop from "./components/Backdrop";


 function  App () {

 const [ModelIsOpen,setModelIsOpen] = useState(false);

 const firstDelete = () => {
   console.log("First Commit");
   setModelIsOpen(true);
}

const secondDelete = () => {
  console.log("Second Commit");
   setModelIsOpen(true);
}
const thirdDelete = () => {
  console.log("Third Delete");
  setModelIsOpen(true);
}

const fourthDelete = () => {
  console.log ("Fouirth commit");
  setModelIsOpen(true);
}

const fifthDelete = () => {
  console.log ("fifth commit");
  setModelIsOpen(true);
   
}

const sixthdelete = () => {
   console.log("sixth commit");
   setModelIsOpen(true);
  
}

const onSecond = () => {
  setModelIsOpen(false);
}

  return(
    <div>
      {ModelIsOpen && <Model onSecondCancel={onSecond} onConfirm ={onSecond}/>}
      {ModelIsOpen && <Backdrop onSecondCancel={onSecond} />}
      <Todo text='First Menu' onCancel={firstDelete} />
      <Todo text='Second Menu' onCancel={secondDelete} />
      <Todo text="Third Menu" onCancel={thirdDelete}/>
      <Todo text="Fourth Menu" onCancel={fourthDelete} />
      <Todo text="Fifth Menu" onCancel={fifthDelete} />
      <Todo text="Sixth Menu" onCancel={sixthdelete} />
     

    </div>
  );
}
export default App;