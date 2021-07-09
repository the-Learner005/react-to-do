import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../styles/app.scss';
import {makeStyles, Dialog, DialogTitle, TextField, Button, Grid} from '@material-ui/core';
function Task(props){
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    form:{
      maxWidth:'1000px'
    }
  }));
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <Dialog fullWidth={true} maxWidth={'lg'} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div>
        <h1>Add a Task</h1>
        <Formik
          initialValues={props.taskData ? { 'task_name': props.taskData.task_name, task_description: props.taskData.task_description , status: false} : { 'task_name': '', task_description: '' , status: false}}
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
            props.saveData(values);
            setSubmitting(false);
        }}
          >
          {({ values, isSubmitting, handleChange }) => (
            <Form className={`${classes.root} ${classes.form}`}>
              <Grid container spacing={12}>
                <Grid item xs={12}><TextField className="full-width" name="task_name" type="text" value={values.task_name} onChange={handleChange}  label="Task Name" variant="outlined" /></Grid>
                <Grid item xs={12}><ErrorMessage className="error" name="task_name" component="div" /></Grid>
              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={12}><TextField className="full-width" name="task_description" type="text" value={values.task_description} onChange={handleChange}  label="Task Description" variant="outlined" /></Grid>
                <Grid item xs={12}><ErrorMessage className="error" name="task_description" component="div" /></Grid>
              </Grid>
              <Grid container spacing={12}>
                <Grid item xs={12}><label>Is Task Completed ?</label><Field type="checkbox" name="status" checked={values.state} /> </Grid>
              </Grid>
              <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
                Add Task
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
}
export default Task;