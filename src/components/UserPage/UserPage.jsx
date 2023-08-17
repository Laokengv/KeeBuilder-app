import React, { useEffect, useState } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';

function UserPage() {
  const dispatch = useDispatch();
  const [keyboards, setKeyboards] = useState([]);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    getKeyboards();
  }, []);

  function getKeyboards () {
    fetch('/api/keyboard')
    .then((response) => response.json())
    .then(keyboardsFromServer => setKeyboards(keyboardsFromServer))
  }

  return (
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2> */}
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
    {JSON.stringify(keyboards)}

<h2>Add a keyboard</h2>
Case: <input type="text"/>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
