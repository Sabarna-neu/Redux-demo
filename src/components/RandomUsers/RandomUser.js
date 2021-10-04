import React from 'react'
import {useSelector, useDispatch}from 'react-redux';
import {fetchUser} from '../../reducers/todoActions';
import {Button} from '@mui/material';


function RandomUser() {

    const dispatch = useDispatch();
    const users = useSelector(state=>state.users);
    const error = useSelector(state=>state.error);
    const loading = useSelector(state=>state.loading)
    console.log(users, error);
    return (
        <div>
            <Button variant="outlined" onClick={()=>{dispatch(fetchUser())}}>Fetch User</Button>
            {Object.keys(users).length === 0 && error !== '' && <p>Something went wrong</p>}
            {(Object.keys(users).length === 0 && <h1>{loading}</h1>)} 
            {(Object.keys(users).length > 0 &&
              <React.Fragment>
                 <h3>First Name : {users.name.first}</h3>
                 <h3>Last Name: {users.name.last}</h3>
                 <img src={users.picture.medium} />
             </React.Fragment> )
            }
        </div>
    )
}

export default RandomUser
