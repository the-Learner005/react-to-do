import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeStyles, Dialog, DialogTitle, TextField, Button, Grid, Box } from '@material-ui/core';
function Task(props){
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    form:{
      maxWidth:'500px'
    },
    error:{
      color:'red'
    }
  }));
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog fullWidth={true} maxWidth={'md'} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}> 
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Box pl={3} pt={3}><h1>{ props.taskData ? 'Edit Task' : 'Add Task' }</h1></Box>
          <Formik
            initialValues={props.taskData ? {id: props.taskData.id, 'task_name': props.taskData.task_name, task_description: props.taskData.task_description , status: false} : { 'task_name': '', task_description: '' , status: false}}
            validate={values => {
              const errors = {};
              if (!values.task_name) {
                errors.task_name = 'Please Enter Task Name';
              }
              if (!values.task_description) {
                errors.task_description = 'Please Enter Task Description';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              if(values.id){
                props.editTask(values);
              }
              else{
                props.addTask(values);
              }
              setSubmitting(false);
          }}
          >
          {({ values, isSubmitting, handleChange }) => (
            <Form className={`${classes.root}`}>
              <Box p={2}>
                <TextField fullWidth className="full-width" name="task_name" type="text" value={values.task_name} onChange={handleChange}  label="Task Name" variant="outlined" />
                <ErrorMessage className={classes.error} name="task_name" component="div" />
              </Box>
              <Box p={2}>
                <TextField fullWidth className="full-width" name="task_description" type="text" value={values.task_description} onChange={handleChange}  label="Task Description" variant="outlined" />
                <ErrorMessage className={classes.error} name="task_description" component="div" />
              </Box>
              <Box p={2}>
                <Button fullWidth type="submit" disabled={isSubmitting} variant="contained" color="primary">{props.taskData ? 'Update' : 'Add'}</Button>
              </Box>
            </Form>
          )}
        </Formik>
        </Grid>
      </Grid>
    </Dialog>
  );
}
export default Task;