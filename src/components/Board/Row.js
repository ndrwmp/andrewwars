import React from 'react';
import Square from './Square.js';

export default class Row extends React.Component {
    renderSquare(i) {
        return <Square col={i}/>;
    }

    render() {
        return (
            <div className="board--row">
                <Square row={this.props.row} col={1}/>
                <Square row={this.props.row} col={2}/>
                <Square row={this.props.row} col={3}/>
                <Square row={this.props.row} col={4}/>
                <Square row={this.props.row} col={5}/>
                <Square row={this.props.row} col={6}/>
                <Square row={this.props.row} col={7}/>
                <Square row={this.props.row} col={8}/>
                <Square row={this.props.row} col={9}/>
                <Square row={this.props.row} col={10}/>
                <Square row={this.props.row} col={11}/>
                <Square row={this.props.row} col={12}/>
            </div>
        );
    }
}