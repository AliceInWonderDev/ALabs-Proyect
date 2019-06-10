import React from 'react';

function Error({message}){
    return(
        <div className="card-panel red darken-5 error col s12 m10">
            {message}
        </div>
    )

}

export default Error;