import React from 'react';

const TaskGenerator = ({inputs, handleInputChange, handleTaskCreate}) => {

    return(
        <div className="container d-flex justify-content-center">
            <div className="col-6 align-self-center border mt-5 mb-3">
                <form onSubmit={handleTaskCreate} className="my-3">
                    <div className="form-group row">
                        <label 
                            htmlFor="description" 
                            className="col-3 text-right col-form-label"
                            >Task:
                        </label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                name="description"
                                placeholder="Task Description"
                                className="form-control"
                                onChange={handleInputChange}
                                value={inputs.description}
                            />
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="btn btn-primary btn-outline-dark text-white mx-3"
                    />
                </form>
            </div>
        </div>
    );
}

export default TaskGenerator;