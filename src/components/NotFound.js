import React from 'react';

//Lets the user know their search had no results. Used by the PhotoContainer component.

const NotFound = () => {
  return (
    <ul>
      <li className="not-found">
        <h3>Sorry, we found no results.</h3>
        <p>Check for typos or consider using a broader term.</p>
      </li>
    </ul>
  );
};

export default NotFound;