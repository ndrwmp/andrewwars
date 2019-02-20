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
        if(this.props.aUnitIsSelected()) {
            console.log("didn't open buying units modal bc unit is being placed");
            return;
        }
        this.setState({ showModal: true});
        this.props.setModalStatus(true);
    }

    handleCloseModal() {
        this.setState({ showModal: false});
        this.props.setModalStatus(false);
    }

    render() {
        return (
            <div className="building workshop">
                <img alt="" onClick={this.handleOpenModal} src={require("../../assets/buildings/workshop.png")}></img>
                <ReactModal ariaHideApp={false} isOpen={this.state.showModal}>
                    <button onClick={this.handleCloseModal}>X</button>
                    <Units
                        row={this.props.row}
                        col={this.props.col}
                        handleBuyUnits={this.props.handleBuyUnits}
                        handleCloseModal={this.handleCloseModal}
                    />
                </ReactModal>
            </div>
        );
    }
}