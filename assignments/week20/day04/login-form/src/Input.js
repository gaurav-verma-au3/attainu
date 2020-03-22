import React from 'react';

function Input(props) {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" class="form-control" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Enter Password" />
                </div>
            </form>
        </div>

    );
}

export default Input;
