import React from 'react';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';

import { View, Text } from 'react-native';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        turn: PLAYERX,
        moves: 0,
        values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
    };
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(this.state.values));
      let newMovement = this.state.turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      this.setState({
          turn: this.state.turn === PLAYERX ? PLAYER0 : PLAYERX,
          values: valuesCopy,
          moves: this.state.moves + 1
      });
  }

  resetClick(){
    this.setState({
      turn: PLAYERX,
      values: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
      ],
      winner: undefined,
      moves: 0
    });
  }

  render() {
    let text = "Turn of " + this.state.turn;

    return (
      <View style={{flex:1, margin:30}}>
        <Header text={text}/>
        <Board values={this.state.values}  appClick={this.appClick}/>
        <Text style={{fontSize: 25, padding: 30, textAlign:'center'}}>Number of moves: {this.state.moves}</Text>
        <Reset resetClick={this.resetClick}></Reset>
      </View>
    );
  }

}