import React from 'react';
import Row from './Row.js';

export default class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Row row={1}/>
                <Row row={2}/>
                <Row row={3}/>
                <Row row={4}/>
                <Row row={5}/>
                <Row row={6}/>
                <Row row={7}/>
                <Row row={8}/>
                <Row row={9}/>
                <Row row={10}/>
            </div>
        );
    }
}