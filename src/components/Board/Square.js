import React from 'react';
import Workshop from '../Buildings/Workshop.js';
import HQ from '../Buildings/HQ.js';

export default class Square extends React.Component {
    render() {
        const position='row'+this.props.row+' col'+this.props.col;

        return (
            <div className={"board--square " + position}>
                {/* {this.props.row}{this.props.col} */}

                {/* render buildings */}
                {(this.props.row===8 && this.props.col===2) ? <Workshop row={this.props.row} col={this.props.col}/> : null}
                {(this.props.row===9 && this.props.col===3) ? <Workshop row={this.props.row} col={this.props.col}/> : null}
                {(this.props.row===2 && this.props.col===10) ? <Workshop row={this.props.row} col={this.props.col}/> : null}
                {(this.props.row===3 && this.props.col===11) ? <Workshop row={this.props.row} col={this.props.col}/> : null}
                {(this.props.row===9 && this.props.col===2) ? <HQ /> : null}
                {(this.props.row===2 && this.props.col===11) ? <HQ /> : null}
                
                {/* render unit */}
                {this.props.unit ? this.props.unit : null}
            </div>
        );
    }
}