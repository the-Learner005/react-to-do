import React, {useState} from 'react';
import { makeStyles, Button, Icon, Paper, Grid} from '@material-ui/core';
import Task from './Task';
import ToDoList from './list';
import uuid from 'react-uuid';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
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
  
  const handleClickOpen = (action) => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const _updateTaskList = function(data){
    updateList(data);
    // Here is the issue, After Tasks list get updated , its not updating Todolist
  }
  const addTask = function(task){
    task.id = uuid();
    let copyTasks = [...Tasks];
    copyTasks.push(task);
    updateList(copyTasks);
  }
  const editTask = function(task){
    let copyTasks = [...Tasks];
    copyTasks.map((item, index) => {
      if(item.id == task.id){
        item = task;
      }
    });
    updateList(copyTasks);
  }

  const findTask = function(id){
    let copyTasks = [...Tasks];
    copyTasks.map((item, index) => {
      if(item.id == id){
        return item;
      }
    });
    return false;
  }

  const saveData = function(data){
    if(!data.id){
      handleClickOpen();
      setTask(null);
    }
    else{
      handleClickOpen();
      setTask(data);
      // editTask(data);
    }
  }

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Button variant="outlined" onClick={saveData} color="primary">
              Add Task <AddIcon/>
            </Button>
            <Task selectedValue={selectedValue} open={open} onClose={handleClose} updateTaskList={_updateTaskList} allTasks={Tasks} saveData={saveData} taskData={TaskData}></Task>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <ToDoList allTasks={Tasks} saveData={saveData}></ToDoList>
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
           <p>Get</p>
          </Paper>
        </Grid>
      </Grid> 
      
    </div>
  );
}
export default Template;