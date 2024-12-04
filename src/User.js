import React from "react";
export default class User extends React.Component{
    getUserList(){
        return 'user list'
    };

    render(){
        return(
            <div>
                <h2 className="text-white font-bold text-[20px]">User Class Component</h2>
            </div>
        )
    }
}