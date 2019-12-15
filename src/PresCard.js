import React from 'react';

const PresCard = ({ item, person, email }) => {
  return (
    <div className="bg-light-blue dib tc br3 pa3 ma4 grow bw2 shadow-5"> 
      <img className='photo' src={`https://api.adorable.io/avatars/100/${person}.png`} alt="present"/>
      <h3>{person}</h3>
      <p>{item}</p>  
    </div>
  );
}

export default PresCard;