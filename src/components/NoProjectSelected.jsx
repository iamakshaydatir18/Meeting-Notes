
import img from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({onSelected}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={img} alt="An empty task list"
            className="w-16 h-16 object-contain mx-auto"/>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Seleted</h2>
            <p className='text-stone-400 mb-4'>
                Select a project or get started with new project
            </p>
            <p className='mt-8'>
                <Button onClick={onSelected}>Create new project</Button>
            </p>
        </div>
    );
}