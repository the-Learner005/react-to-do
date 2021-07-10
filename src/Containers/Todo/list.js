import React, { useState}  from 'react';
import { Card, CardContent, List, ListItem, ListItemText, Box } from '@material-ui/core';
import {BorderColor, Delete} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function ToDoList({allTasks, saveData, deleteTask}) {
  const classes = useStyles();
  const editTask = function(task){
    saveData(task);
  }
  const _deleteTask = function(task){
    deleteTask(task);
  }
  
  return (
    <Card className={classes.root}>
      <CardContent>
        {allTasks.map((item,index) => {
          return (
            <List key={item.id} component="nav">
              <ListItem>
                <ListItemText primary={item.task_name} secondary={item.task_description} />
                <Box m={2} pt={3}><BorderColor button onClick={() => editTask(item)}></BorderColor></Box>
                <Box m={2} pt={3}><Delete button onClick={() => _deleteTask(item)}></Delete> </Box>
              </ListItem>
            </List>
          );
        })}
      </CardContent>
    </Card>
  );
}
