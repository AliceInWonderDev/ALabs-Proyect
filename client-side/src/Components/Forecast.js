import React from 'react';

function Forecast({ response }){
    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                    
                <h2>El clima de la Ciudad es:</h2>
                    <p>
                        <h3> {response.temperature} F</h3>
                    </p>
                <h2>Su Humedad es:</h2>
                    <p>
                        {response.humidity}
                    </p>
                <h2>La hora actual es:</h2>
                    <p>
                        {response.time}
                    </p>
            </div>
        </div>
    )

}

export default Forecast;