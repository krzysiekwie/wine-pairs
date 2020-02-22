import React from "react";

const PresCard = ({ item, group, email }) => {
  return (
    <article className="h5 w5 dib bg-white ma4 br3 pa3 pa4-ns mv3 ba b--black-10 grow shadow-5">
      <div className="tc">
        <img
          className="br-100 h3 w3 dib photo"
          src={`https://api.adorable.io/avatars/100/${group}.png`}
          alt="present"
        />
        <h3> {group} </h3>{" "}
        <p className="lh-copy measure center f6 black-70"> {item} </p>{" "}
        {/* email is not used  */}{" "}
      </div>
    </article>
    // <div className="bg-light-blue dib tc br3 pa3 ma4 grow bw2 shadow-5">
    //   <img
    //     className="photo"
    //     src={`https://api.adorable.io/avatars/100/${group}.png`}
    //     alt="present"
    //   />
    //   <h3> {group} </h3> <p class="mw4 f6 lh-copy mt2 mid-gray"> {item} </p>{" "}
    //   {/* email is not used  */}{" "}
    // </div>
  );
};

export default PresCard;
