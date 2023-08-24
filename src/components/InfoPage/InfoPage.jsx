import React from 'react';
import './InfoPage.css'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="info-container">
      <h1 className="info-title">Technologies Utilized</h1>
      <p>Node</p>
      <p>Express</p>
      <p>React, React-DOM</p>
      <p>Postgresql</p>
      <p>Heroku</p>
      <p>Javascript</p>
      <p>Redux, React-Redux</p>
      <p>DaisyUI</p>
      <p>Tailwind CSS</p>
      <p>HTML</p>
      <p>Passport</p>
      <p>CSS</p>
    </div>
  );
}

export default InfoPage;
