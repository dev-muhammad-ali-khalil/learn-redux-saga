import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/actions';
import { successToast, warningToast } from '../utils/toastUtils';

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {
                display ?
                    <div style={{ border: '1.5px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', boxSizing: 'border-box', padding: '0px 12px 0px 0px', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                        <ol>
                            {
                                users?.map((user) => (
                                    <li key={user.id}>{user.name}</li>
                                ))
                            }
                        </ol>
                    </div> :
                    <></>
            }
            <button
                onClick={() => {
                    dispatch(getUsers(toasts));
                    setDisplay(true);
                }}
                style={{
                    marginTop: '10px',
                    width: '57.5%',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 10px',
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    cursor: 'pointer'
                }}
            >Get Users</button>
        </div>
    )
}

export default Users