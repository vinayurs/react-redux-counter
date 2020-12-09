import React, { Component } from 'react'
import {connect} from 'react-redux';

class Counter extends Component {

    constructor(props){
        super()
    }

    increment=()=>{

        this.props.dispatch({type:'increment'})
    }

    decrement=()=>{

        this.props.dispatch({type:'decrement'})

    }

    render() {
        return (
            <div>

                <h1>Counter</h1>
                <h1>{this.props.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

            </div>
        )
    }
}


const mapStateToProps=(state)=>({
    count : state.count
});


export default connect(mapStateToProps)(Counter)
