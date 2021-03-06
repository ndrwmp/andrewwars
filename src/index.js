import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.js';
import './index.css';
import './terrain.css';
import './buildings.css';
import './units.css';
  
class Game extends React.Component {
    render() {
        return (
            <div className="container">
                <Board />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById('root'));
  