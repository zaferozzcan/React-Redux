import React, { Component } from "react";


class Ninjas extends Component {
    render() {
        return (
            <div className="greet">
                <div>  Name:{this.props.name}</div>
                <div>  Age: {this.props.age}</div>
                <div>  State: {this.props.state}</div>
            </div>
        )
    }
}

export default Ninjas;