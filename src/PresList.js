import React from 'react';
import PresCard from './PresCard';

const Preslist = ({stuff}) => {
    return (
        <div>
            {
            stuff.map((pres, i) => {
                return (
                    <PresCard
                        key={stuff[i].id}
                        item={stuff[i].item} 
                        person={stuff[i].person} 
                        email={stuff[i].email}
                    />
                );
            })
            } 
        </div>
    );
}
export default Preslist;