import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/actions';
import { successToast, warningToast } from '../utilities/toast';

const Users = () => {
    const users = useSelector((state) => state.userData.users);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);

    // Toast object
    const toasts = {
        successToast,
        warningToast
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
            <button
                onClick={() => {
                    dispatch(getUsers(toasts));
                    setDisplay(true);
                }}
                style={{
                    width: '30%',
                    border: 'none',
                    borderRadius: '2px',
                    padding: '6px 10px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    cursor: 'pointer'
                }}
            >Get Users</button>
            {
                display ?
                    <ol>
                        {
                            users?.map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))
                        }
                    </ol> :
                    <></>
            }

        </div>
    )
}

export default Users