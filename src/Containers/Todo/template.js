import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Add from './add';
import ToDoList from './list';
import Edit from './edit';
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
  const [Tasks, updateList] = useState([]);
  function _updateTaskList(data){
    updateList(data);
  }
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Add updateTaskList={_updateTaskList} allTasks={Tasks}></Add>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <ToDoList allTasks={[Tasks]}></ToDoList>
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <Edit></Edit> */}
          </Paper>
        </Grid>
      </Grid> 
    </div>
  );
}
export default Template;