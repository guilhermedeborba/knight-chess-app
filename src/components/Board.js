import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Chessboard from 'chessboardjsx'
import IconLabel from './IconLabel'
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

  setPosition = async position => {
    const response = await get(Urls.validCells.get(position.toUpperCase()))
    const { validCells } = response.data

    const squareStyles = validCells.reduce((styles, cell) => {
      styles[cell.toLowerCase()] = activeCellStyle
      return styles
    }, {})

    this.setState({
      position: {
        [position]: knight
      },
      squareStyles
    })
  }

  render() {
    return (
      <div class="text-center">
        <Link to="/">
          <IconLabel iconName="question" label="Need help?" />
        </Link>
        <Chessboard
          id="knight-chess-board"
          draggable={true}
          onDrop={({ targetSquare }) => this.setPosition(targetSquare)}
          dropSquareStyle={null}
          position={this.state.position}
          onSquareClick={this.setPosition}
          squareStyles={this.state.squareStyles}
          boardStyle={{
            border: '2px solid #000000',
            margin: '0 auto',
            boxShadow: `
              rgba(0, 0, 0, 0.2) 0px 12px 15px 0px, 
              rgba(0, 0, 0, 0.2) 0px 12px 20px 0px
            `
          }}
        />
      </div>
    )
  }
}

export default Board
