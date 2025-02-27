import React from 'react'
import Wizard from './Wizard'
import Env from '../config/env'

const imgStyle = {
  display: 'block',
  margin: 'auto',
  width: 'auto',
  height: '300px',
  border: '2px solid black'
}

const WizardInstructions = () => (
  <Wizard>
    <div style={{ padding: '0 25px 0 25px' }}>
      <h1>Motivation</h1>

      <div style={{ textAlign: 'left' }}>
        <p>
          <strong>Do you wanna win that Chess match? I will help you!</strong> Follow the instructions below and get to
          know where your knight piece could be in <strong>2</strong> turns.
        </p>

        <p>
          The knight is a chess piece that can only move in <strong>L-shape</strong>, 2 steps
          horizontally and 1 vertically or 2 vertically and 1 horizontally.
        </p>
        <img style={imgStyle} src={`${Env.publicUrl}/chessboard-1.jpg`} />
      </div>
    </div>

    <div style={{ padding: '0 25px 0 25px' }}>
      <h1>How to use it</h1>

      <div style={{ textAlign: 'left' }}>
        <p style={{ textAlign: 'center' }}>
          <strong>Choose a square! :)</strong>
        </p>
        <p>You could click or drag the Knight to the choosen square.</p>
        <img style={imgStyle} src={`${Env.publicUrl}/chessboard-2.jpg`} />
        <br />
        <br />
        Woops! those are the places that your knight could be in two turns.
      </div>
    </div>

    <div style={{ padding: '0 25px 0 25px' }}>
      <h1>Any questions?</h1>

      <div>
        <p style={{ textAlign: 'center' }}>
          Send me an email: <strong>guilhermemb1998@gmail.com</strong>
        </p>
        <p>If not, what are you waiting for? Go to the Playground!</p>
        <img style={imgStyle} src={`${Env.publicUrl}/chessboard-play.gif`} />
      </div>
    </div>
  </Wizard>
)

export default WizardInstructions
