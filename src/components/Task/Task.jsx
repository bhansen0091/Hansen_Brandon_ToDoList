import React, { useState } from 'react';

const Task = ({idx, taskDescription, isComplete, handleDeleteTask, handleIsComplete}) => {

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
                                value={isComplete}
                                onChange = {(e) => {
                                    handleIsComplete(idx);
                                }}
                                readOnly
                                />
                        </div>
                    </div>
                        {
                            isComplete ?
                                <div className="px-2 border col-11 d-flex justify-content-between">
                                    <s>{taskDescription}</s>
                                    <button 
                                        type="button" 
                                        className="btn btn-sm btn-danger align-middle py-0"
                                        style={{height: "24px"}}
                                        onClick = {() => handleDeleteTask(idx)}
                                    >
                                        X
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