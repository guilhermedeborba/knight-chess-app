import React from 'react'
import Board from '../components/Board'
import WizardInstructions from '../components/WizardInstructions'

const routes = [
  {
    id: 'instructions-wizard',
    path: '/',
    exact: true,
    component: WizardInstructions,
  },
  {
    id: 'chessboard',
    path: '/chessboard',
    component: Board,
  }
]

export default routes
