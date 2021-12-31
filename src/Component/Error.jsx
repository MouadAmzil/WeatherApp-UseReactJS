import React from 'react'


function Error() {
    return (

        <div className="alert alert-danger alert-dismissible fade show " id="Message">
            <strong>City Not Found </strong> Something has been wrong.
            <button type="button" className="btn-close"
                onClick={() => { document.getElementById("Message").classList.add("d-none") }} >
            </button>
            
        </div>

    )
}

export default Error
