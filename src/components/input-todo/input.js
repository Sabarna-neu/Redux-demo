import React from 'react';
import TextField from '@mui/material/TextField';
import classes from './input.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {addItem} from '../../reducers/todoActions';

const Input = () => {
    const items = useSelector(state => state.items);
    
    
    const [todoItem, setTodoItem] = useState('');

    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        fontFamily: `Nunito, sans-serif !important`,
                        marginRight: '0.5rem',
                        width: '30%',
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                    }
                }
            }
    
        }
    })
    // const todo = useSelector(state => state.todo)    
    const dispatch = useDispatch();

    // Add Todolist
    const onSubmitHandler = () => {
        // addItem(item);
        setTodoItem('');
        dispatch(addItem(todoItem));
    }
    
    return (
        <div className={classes.inputdiv}>
            <ThemeProvider theme={theme}>
                <TextField id="standard-basic" value={todoItem} onChange={e=>setTodoItem(e.target.value)} label="Add Todo" variant="standard" />
                <Button variant="outlined" onClick={onSubmitHandler}>Submit</Button>
            </ThemeProvider>
        </div>
    )
}

export default Input
