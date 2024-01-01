import React, { Component } from 'react'

 class image extends Component {
    render() {
        return (
            
                <img className="login-logo" alt="" width={this.props.width} 
                height={this.props.height} 
                src={this.props.src} />  
            
        )
    }
}

export default image