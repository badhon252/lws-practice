import React from 'react';

export default function Delete() {

     const handleDelete = (e) => {
       console.log(e.target);

       e.preventDefault();
     };

    return (
      <div>
        <button href="/" onClick={handleDelete}>
        X
          {/* {if(e.target.value = ""){
              return X;
          }} */}
        </button>
      </div>
    );
}
