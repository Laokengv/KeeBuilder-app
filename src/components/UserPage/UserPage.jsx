import React, { useEffect, useState } from 'react';
// import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Products from '../Products/Products';

function UserPage() {
  const dispatch = useDispatch();
  const [keyboards, setKeyboards] = useState([]);
  const [selectedCasesId, setSelectedCasesId] = useState();
  const [selectedKeycapsId, setSelectedKeycapsId] = useState();
  const [selectedStabilizersId, setSelectedStabilizersId] = useState();
  const [selectedSwitchesId, setSelectedSwitchesId] = useState();


  const history = useHistory();
  // const user = useSelector((store) => store.user);

  useEffect(() => {
    getKeyboards();
  }, []);

  function getKeyboards() {
    fetch('/api/keyboard')
      .then((response) => response.json())
      .then(keyboardsFromServer => setKeyboards(keyboardsFromServer))
  }

    // const handleSubmit = (event) => {
    //   event.preventDefault();

    //   fetch('/api/keyboard', {
    //     method: 'POST',
    //     body: JSON.stringify({}),
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    //   .then(response => response.json())
    //   .catch((err) => {
    //     console.log('Error on POST', err);
    //   })
    // }

  return (
    <div className="container">
    
      {/* {JSON.stringify(keyboards)} */}

      <h2>Select a case</h2>
      <Products name="cases" selected={selectedCasesId} setSelected={setSelectedCasesId} />
      <Products name="keycaps" selected={selectedKeycapsId} setSelected={setSelectedKeycapsId} />
      <Products name="stabilizers" selected={selectedStabilizersId} setSelected={setSelectedStabilizersId} />
      <Products name="switches" selected={selectedSwitchesId} setSelected={setSelectedSwitchesId} />
      {
        JSON.stringify({
          selectedCasesId,
          selectedKeycapsId,
          selectedStabilizersId,
          selectedSwitchesId
        })
      }
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
