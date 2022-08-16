import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getUser } from '../redux/userSlice';

function User() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    // getting the user
    dispatch(getUser());
  }, []);

  return <div>Hello {user.name}</div>;
}

export default User;
