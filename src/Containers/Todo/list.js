import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import uuid from 'react-uuid';

import { KeyboardArrowRight, BorderColor} from '@material-ui/icons';

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

export default function ToDoList(props) {
  const classes = useStyles();

  const [Tasks, updateList] = useState(props.allTasks);
  const _editTask = function(task){
    props.saveData(task);
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        {props.allTasks.map((item,index) => {
          return (
            <List key={item.id} component="nav" aria-label="main mailbox folders">
              <ListItem button onClick={() => _editTask(item)}>
                <KeyboardArrowRight></KeyboardArrowRight>
                <ListItemText primary={item.task_name} secondary={item.task_description} />
                <BorderColor></BorderColor>
              </ListItem>
            </List>
          );
        })}
      </CardContent>
    </Card>
  );
}
