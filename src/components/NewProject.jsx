import Input from "./Input";
import {useRef} from 'react';
import Modal from "./Modal";


export default function NewProject({addProject,onCancel}){

  const modal = useRef();

  let enteredTitle = useRef();
  let enteredDesc = useRef();
  let enteredDate = useRef();

  function addNewProject(){
    const title = enteredTitle.current.value;
    const desc = enteredDesc.current.value;
    const date = enteredDate.current.value;

    //Validations

    if(title.trim() === '' || desc.trim() === '' || date.trim() === ''){
        modal.current.open();
        return;
    }

    addProject({ 
        title:title,
        desc:desc,
        date:date
    });
    console.log(title,desc,date);
  }
   

    return(
        <>
        <Modal ref={modal} >
            <h2 className='text-xl font-bold text-stone-700 my-4'
            >Invalid Input</h2>
            <p className='text-stone-600 mb-4'>
                Opps.. looks like you forgot to enter a value.
            </p>
            <p className='text-stone-600 mb-4'>
                Please make sure you provide a valid value for every input field.
            </p>
        </Modal>
    <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950"
                onClick={onCancel}>Cancel</button>
            </li>
            <li>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={addNewProject}>Save</button>
            </li>
        </menu>    
            <div>
                <Input type="text" lable='Title' ref={enteredTitle}></Input>
                <Input lable='Description' textarea ref={enteredDesc}></Input>
                <Input type="date" lable='Due date' ref={enteredDate}></Input>
            </div>
    </div>
    </>
    );
}