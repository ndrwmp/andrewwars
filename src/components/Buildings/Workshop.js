import React from 'react';
import ReactModal from 'react-modal';
import Units from './Units';

export default class Workshop extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true});
    }

    handleCloseModal() {
        this.setState({ showModal: false});
    }

    render() {
        return (
            <div className="building--workshop">
                <img alt="" onClick={this.handleOpenModal} src={require("../../assets/buildings/workshop.png")}></img>
                <ReactModal ariaHideApp={false} isOpen={this.state.showModal}>
                    <button onClick={this.handleCloseModal}>X</button>
                    {/* <Units onClick={this.props.buyUnit}/> */}
                    <Units row={this.props.row} col={this.props.col} onClick={this.props.onClick}/>
                </ReactModal>
            </div>
        );
    }
}