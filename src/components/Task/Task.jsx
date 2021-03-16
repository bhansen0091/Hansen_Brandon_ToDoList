import React, { useState } from 'react';

const Task = ({idx, taskDescription, handleDeleteTask}) => {

    const [isComplete, setIsComplete] = useState(false);

    const callTwoFunc = (idx) => {
        handleDeleteTask(idx);
        setIsComplete(false);
    }

    return(
        <div>
            <div className="container">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input 
                                type="checkbox" 
                                name="isChecked"
                                checked={isComplete}
                                onChange = {(e) => {
                                    setIsComplete(e.target.checked)
                                    console.log(isComplete);
                                }}
                                />
                        </div>
                    </div>
                        {
                            isComplete ?
                                <div className="px-2 border col-11 d-flex justify-content-between">
                                    <s>{taskDescription}</s>
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-danger"
                                        onClick = {
                                            () => callTwoFunc(idx)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div > 
                                : 
                                <div className="px-2 border col-11 text-left">
                                    {taskDescription}
                                </div > 
                        }
                </div>
            </div>
        </div>
    );
}

export default Task;