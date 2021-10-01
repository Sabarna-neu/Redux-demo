import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { ListItem, ListItemText, List, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonIcon from '../ButtonIcon';
import ListsTheme from '../ListsTheme';
import { useSelector, useDispatch } from 'react-redux';
import { completedTask, deleteTask } from '../../reducers/TodoReducer';
import classes from './views.module.css';

function Views() {

    const [status, setStatus] = useState('');
    const todo = useSelector(state => state.todo)

    const list = todo.items;

    const dispatch = useDispatch();

    let AllListContent = <List>
        {list.map(i => {
            if (status === '') {
                if (i.status === 1) {
                    return (
                        <ListItem >
                            <ListItemText className={classes.strikethrough} key={i.id} primary={i.value} />
                        </ListItem>
                    )
                }
                else {
                    return (
                        <ListItem >
                            <ListItemText key={i.id} primary={i.value} />
                            <ButtonIcon> <DeleteIcon onClick={() => dispatch(deleteTask(i.id))} /> </ButtonIcon>
                            <ButtonIcon onClick={() => dispatch(completedTask(i.id))} > <CheckIcon /> </ButtonIcon>
                        </ListItem>
                    )
                }
            }
        })}
    </List>;

    let CompletedListContent = <List>
        {list.map(i => {
            if (status === 1 && i.status === 1) {
                return (
                    <ListItem >
                        <ListItemText key={i.id} primary={i.value} />
                        <ButtonIcon> <DeleteIcon onClick={() => dispatch(deleteTask(i.id))} /> </ButtonIcon>
                        <ButtonIcon onClick={() => dispatch(completedTask(i.id))} > <CheckIcon /> </ButtonIcon>
                    </ListItem>
                )
            }
        })}
    </List>;
    let pendingListContent = <List>
        {list.map(i => {
            if (status === 0 && i.status === 0) {
                return (
                    <ListItem >
                        <ListItemText key={i.id} primary={i.value} />
                        <ButtonIcon> <DeleteIcon onClick={() => dispatch(deleteTask(i.id))} /> </ButtonIcon>
                        <ButtonIcon onClick={() => dispatch(completedTask(i.id))} > <CheckIcon /> </ButtonIcon>
                    </ListItem>
                )
            }
        })}
    </List>;
    return (
        <ListsTheme>
            <h1>My Lists </h1>
            {list.length === 0 && <p>Add items in todo List</p>}
            {list.length > 0 && ((status === '' && AllListContent) || (status === 1 && CompletedListContent) || (status === 0 && pendingListContent))}
            <div className={classes.buttonList}>
                <Button variant="outlined" onClick={() => setStatus('')} >All Task</Button>
                <Button variant="outlined" onClick={() => setStatus(0)} >Pending Task</Button>
                <Button variant="outlined" onClick={() => setStatus(1)}>Completed Task</Button>
            </div>

        </ListsTheme>
    )
}

export default Views
