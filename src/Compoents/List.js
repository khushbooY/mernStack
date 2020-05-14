import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        var List = [1, 2, 3, 4, 5]
        return (<div>
            {List.map((index) => {
                return <div>{index}</div>

            })}
        </div>);
    }
}

export default List;
