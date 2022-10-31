import React from 'react';   
    
class ClassComponent extends React.Component { 
    render() {
        return (
            <div style={this.props.s}>
            <p>{this.props.c}</p>
        </div>
        );
    }
}

export default ClassComponent;