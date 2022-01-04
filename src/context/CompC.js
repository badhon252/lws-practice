import React from 'react';
import { FirstName, LastName } from './ContextApi';

export default function CompC() {
    return (
      <div>
      <FirstName.Consumer>
      {(fName)=>{
          return (
            <LastName.Consumer>
            {(lName)=> <h1>{fName}{lName}</h1>}
            </LastName.Consumer>
          );
      }}
      </FirstName.Consumer>
        
      </div>
    );
}
