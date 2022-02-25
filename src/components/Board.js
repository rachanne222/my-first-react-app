import { Button } from 'bootstrap';
import React, {Component} from 'react';
import '../css/Board.css'
import Note from './Note';


class Board extends Component{
constructor(){
    super();
    }

    render() {
        return (
          <div>
            <div className="div-board">
              <div className="row">
                <Note title= "My first Book" body= "DR. Suess"/>
                <Note title= "My first Vacation" body= "Virgina Beach"/>
                <Note title= "My first Movie" body= "Bambi"/>
              </div>
            </div>
            <div>
              <button className="btn btn-success add-button">Add</button>
            </div>
          </div>
        );
      }
    }

export default Board;