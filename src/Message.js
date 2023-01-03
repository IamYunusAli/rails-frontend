import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMessage } from './redux/message';

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h3>Message page</h3>
      <Link to="/">Home</Link>
      <h1>{message.message}</h1>
    </div>
  );
};

export default Message;
