import React from "react";
import PresCard from "./PresCard";

const Preslist = ({ stuff }) => {
  return (
    <div className="flex-row">
      {" "}
      {stuff.map((pres, i) => {
        return (
          <PresCard
            key={stuff[i].id}
            item={stuff[i].item}
            group={stuff[i].group}
            // email={stuff[i].email}
          />
        );
      })}{" "}
    </div>
  );
};
export default Preslist;
