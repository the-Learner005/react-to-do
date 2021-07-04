import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from '../../styles/app.scss';
function Add(props){
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
  }));
  const classes = useStyles();

  const sendData = (values) => {
    let tasks = [...props.allTasks];
    tasks.push(values);
    props.updateTaskList([tasks]);
  };
  return (
    <div>
      <h1>Add a Task</h1>
      <Formik
        initialValues={{ 'task_name': '', task_description: '' , status: false}}
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
          sendData(values);
          setSubmitting(false);
       }}
        >
        {({ values, isSubmitting, handleChange }) => (
          <Form className={classes.root}>
            <Grid container spacing={12}>
              <Grid item xs={12}><TextField className="full-width" name="task_name" type="text" values={values.task} onChange={handleChange}  label="Task Name" variant="outlined" /></Grid>
              <Grid item xs={12}><ErrorMessage className="error" name="task_name" component="div" /></Grid>
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={12}><TextField className="full-width" name="task_description" type="text" values={values.task_description} onChange={handleChange}  label="Task Description" variant="outlined" /></Grid>
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
  );
}
export default Add;