import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import IconLabel from './IconLabel'
import Button from './Button'

const Step = ({ isActive, children }) => (
  <div style={{ display: isActive ? 'block' : 'none' }}>{children}</div>
)

const Wizard = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0)
  const history = useHistory()

  const goToNext = () => setActiveStep(activeStep + 1)
  const goToPrevious = () => setActiveStep(activeStep - 1)
  const goToChessboard = () => history.push('/chessboard')

  const isLastStep = activeStep === children.length - 1

  return (
    <div class="text-center">
      <Link to="/chessboard">
        <IconLabel iconName="chess-knight" label="Go to Playground" />
      </Link>
      <div
        class="wizard-cards"
        style={{
          maxWidth: '560px',
          minHeight: '560px',
          border: '2px solid rgb(0, 0, 0)',
          margin: '0px auto',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 15px 0px, rgba(0, 0, 0, 0.2) 0px 12px 20px 0px',
          backgroundColor: '#ffffff'
        }}
      >
        <div style={{ height: '500px' }}>
          {children.map((Child, index) => (
            <Step isActive={index === activeStep}>{Child}</Step>
          ))}
        </div>

        <div style={{ height: '50px' }}>
          <div class="wizard-control" style={{ display: 'inline-block' }}>
            <Button iconName="arrow-left" disabled={activeStep === 0} onClick={goToPrevious} />
          </div>
          <div class="wizard-control" style={{ display: 'inline-block' }}>
            {
              <Button iconName="arrow-right" onClick={isLastStep ? goToChessboard : goToNext}>
                {isLastStep ? 'Go to Playground!' : ''}
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Wizard
