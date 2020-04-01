import React, { Component } from 'react'
import Chessboard, { Piece } from 'chessboardjsx'
import Urls from '../config/constants/api-urls'
import { get } from '../utils/http'

const knight = 'wN'
const activeCellStyle = { 
  border: `2px solid #000000`,
  borderRadius: '50px'
}

class Board extends Component {
  state = {
    position: {
      h1: knight // default position
    },
    squareStyles: {}
  }

  setPosition = async ({ targetSquare }) => {
    const response = await get(Urls.validCells.get(targetSquare.toUpperCase()))
    const { validCells } = response.data

    const squareStyles = validCells.reduce((styles, cell) => {
      styles[cell.toLowerCase()] = activeCellStyle
      return styles
    }, {})

    this.setState({
      position: {
        [targetSquare]: knight
      },
      squareStyles
    })
  }

  render() {
    return (
      <Chessboard
        id="knight-chess-board"
        draggable={true}
        onDrop={this.setPosition}
        position={this.state.position}
        squareStyles={this.state.squareStyles}
        darkSquareStyle={{
          backgroundColor: '#383838'
        }}
        lightSquareStyle={{
          backgroundColor: '#ededed'
        }}
        boardStyle={{
          margin: 'auto',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px, rgba(0, 0, 0, 0.2) 0px 12px 20px 0px'
        }}
      />
    )
  }
}

export default Board
