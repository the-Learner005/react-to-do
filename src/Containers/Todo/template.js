import React, {useState} from 'react';
import { makeStyles, Button, Paper, Grid, Snackbar } from '@material-ui/core';
import Task from './Task';
import ToDoList from './list';
import uuid from 'react-uuid';
import AddIcon from '@material-ui/icons/Add';
import MuiAlert from '@material-ui/lab/Alert';
function Template(props){
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


  const classes = useStyles();
  
  const [Tasks, updateList] = useState([{id: uuid(), task_name: 'Task 1', task_description: 'Test data'}, {id: uuid(), task_name: 'Task 2', task_description: 'Test data'}]);
  const [TaskData, setTask] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
  const [showAlert, setAlert] = React.useState(false);
  
  const handleClickOpen = (action) => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const _updateTaskList = function(data){
    updateList(data);
  }
  const addTask = function(task){
    task.id = uuid();
    let copyTasks = [...Tasks];
    copyTasks.push(task);
    updateList(copyTasks);
    setAlert(true);
    setOpen(false);
    
  }
  const editTask = function(task){
    let copyTasks = [...Tasks];
    copyTasks.map((item, index) => {
      if(item.id === task.id){
        copyTasks[index] = task;
        return true;
      }
    });
    updateList(copyTasks);
    setOpen(false);
    setAlert(true);
  }

  const deleteTask = function(task){
    let copyTasks = [...Tasks];
    copyTasks.map((item, index) => {
      if(item.id === task.id){
        copyTasks.splice(index, 1);
        return true;
      }
    });
    updateList(copyTasks);
    setAlert(true);
  }

  const saveData = function(data){
    if(!data.id){
      handleClickOpen();
      setTask(null);
    }
    else{
      handleClickOpen();
      setTask(data);
    }
  }

  const Alert = function(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const closeAlert = function(){
    setAlert(false);
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div className={classes.paper}>
            <Button variant="outlined" onClick={saveData} color="primary">Add Task <AddIcon/></Button>
            <Task selectedValue={selectedValue} open={open} onClose={handleClose} updateTaskList={_updateTaskList} allTasks={Tasks} saveData={saveData} taskData={TaskData} addTask={addTask} editTask={editTask}></Task>
            <Snackbar open={showAlert} autoHideDuration={2000} onClose={closeAlert}>
              <Alert severity="success">
                Operation Successful
              </Alert>
            </Snackbar>
            <ToDoList allTasks={Tasks} saveData={saveData} deleteTask={deleteTask}></ToDoList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Template;