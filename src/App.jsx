import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {

  const[projectDetails,setProjectDeatils] = useState({
      selectedProjectId:undefined,
      projects: [],
      tasks:[]
  });

  function addProject(){

    setProjectDeatils( prev =>{

      return{
        ...prev,
        selectedProjectId:null
      }
    });
  }

 function addNewProject(newValue){
  setProjectDeatils( prev =>{

    const porjectId = Math.random();
    const newProject ={
      ...newValue,
      id:porjectId
    }
    return{
      ...prev,
      selectedProjectId:undefined,
      projects:[...prev.projects,newProject]
    }
  });
 }

 function cancelFunction(){
  setProjectDeatils( prev =>{

    return{
      ...prev,
      selectedProjectId:undefined
    }
  });
 }

 function selectedProject(id){
  setProjectDeatils( prev =>{
    return{
      ...prev,
      selectedProjectId:id
    }
  });
 }

 function onDelete(){
  setProjectDeatils( prev =>{
    return{
      ...prev,
      selectedProjectId:undefined,
      projects:prev.projects.filter(project => project.id !== prev.selectedProjectId),
    }
  });
 }

 function onAddNewTasks(text){
  setProjectDeatils( prev =>{

    const taskId = Math.random();
    const prevTasks = prev.tasks.find(taskItem => taskItem.projectId === prev.selectedProjectId);
    console.log("Previous Tasks - ", prevTasks,"text value is - ",text);
    let newTask ={};
    let newtext ={};
    if(prevTasks){

      newtext ={
          id:taskId,
          text:text
      }

      prevTasks.text =[ ...prevTasks.text,newtext];
      
      return{
        ...prev
      }

    }else{

      newtext ={
        id:taskId,
        text:text,
      }

      newTask ={
        text:[newtext],
        projectId:prev.selectedProjectId
      }

      return{
        ...prev,
        tasks:[...prev.tasks,newTask]
      }

    }
  
  });
 }
  console.log(projectDetails);
 function onDeleteNewTasks(id){

      setProjectDeatils((previous) =>{

        let object = previous.tasks.filter(task => task.projectId === projectDetails.selectedProjectId);
        console.log("Object is before - ",object);
        object[0].text = object[0].text.filter(text => text.id != id);
        console.log("Object is After - ",object);

        return{
          ...previous,
        }
      })
 }

  const currentProject = projectDetails.projects.find(project=> project.id === projectDetails.selectedProjectId); 
  const Tasks = projectDetails.tasks.find(task=> task.projectId === projectDetails.selectedProjectId); 


  let content = <SelectedProject project ={currentProject} onDelete={onDelete}
                onAddNewTasks={onAddNewTasks}
                onDeleteNewTasks={onDeleteNewTasks} showTask={Tasks}/>;


  if(projectDetails.selectedProjectId === null){
    content = <NewProject addProject={addNewProject} onCancel={cancelFunction}></NewProject>;
  }else if(projectDetails.selectedProjectId === undefined){
    content = <NoProjectSelected onSelected={addProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
      onSelected={addProject} 
       projects={projectDetails.projects}
       onSelectedProject={selectedProject}
       selectProjectId={projectDetails.selectedProjectId}
      />
       {content}
    </main>
  );
}

export default App;
