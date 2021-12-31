import React, { useState, Fragment } from 'react'
import Error from './Error';

function Form({ PassMethodeToFomr, ERROR }) {
    const [City, SetCity] = useState('');
    const onsubmitHandle = (e) => {
        e.preventDefault();
        if (!City && City === "") return;
        PassMethodeToFomr(City);
    }
    return (
        <Fragment >
            <div className="card w-50 backgroundCard rounded p-3">
                <div className="card-body">
                    <form onSubmit={onsubmitHandle}>
                        <div className="form-floating mb-3 ">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="City ..."
                                value={City}
                                onChange={e => SetCity(e.target.value)}
                            />
                            <label htmlFor="floatingInput">City . . . </label>
                            <div className=" mt-3 d-grid gap-2">
                                <button className="btn btn-primary rounded-pill " type="submit">Search</button>
                            </div>
                        </div>
                    </form>
                    {ERROR && <Error />}
                </div>
            </div>

        </Fragment>
    )
}

export default Form
