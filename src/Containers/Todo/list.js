import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  return (
    <Card className={classes.root}>
      <CardContent>
        {Tasks.map((item,index) => {
          
          return (
            <List key={index} component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <KeyboardArrowRight></KeyboardArrowRight>
                <ListItemText primary={index} secondary={item} />
                <BorderColor></BorderColor>
              </ListItem>
            </List>
          );
        })}
      </CardContent>
    </Card>
  );
}
