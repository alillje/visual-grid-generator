import * as React from 'react'
import './grid-menu.css'
import { useState, useEffect } from 'react'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { setAmountOfRows, globalSetRowGap } from '../../redux/reducers/rows'
import {
  setAmountOfColumns,
  globalSetColumnGap
} from '../../redux/reducers/columns'
import { grid } from '../../redux/reducers/grid'
import { setViewCssCode } from '../../redux/reducers/css-code'
import { useSelector, useDispatch } from 'react-redux'

/**
 * GridMenu Component.
 * Displays a grid menu.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridMenu = () => {
  const [numberOfRows, setNumberOfRows] = useState('')
  const [numberOfColumns, setNumberOfColumns] = useState('')
  const [rowGap, setRowGap] = useState('')
  const [columnGap, setColumnGap] = useState('')
  const userHasResetGrid = useSelector((state) => state.grid.reset)
  const dispatch = useDispatch()

  /**
   * Dispatches/Sends the number of rows to the global state, making it accessable to
   * other components in the application.
   */
  const sendRowAmmountToGlobalState = () => {
    dispatch(
      setAmountOfRows({
        numberOfRows
      })
    )
  }

  /**
   * Dispatches/Sends the number of columns to the global state, making it accessable to
   * other components in the application.
   */
  const sendColumnAmmountToGlobalState = () => {
    dispatch(
      setAmountOfColumns({
        numberOfColumns
      })
    )
  }

  /**
   * Dispatches/Sends the row gap to the global state, making it accessable to
   * other components in the application.
   */
  const sendRowGapToGlobalState = () => {
    dispatch(
      globalSetRowGap({
        rowGap
      })
    )
  }

  /**
   * Dispatches/Sends the column gap to the global state, making it accessable to
   * other components in the application.
   */
  const sendColumnGapToGlobalState = () => {
    dispatch(
      globalSetColumnGap({
        columnGap
      })
    )
  }

  /**
   * Responsible for calling methods to send user input values to the global state.
   *
   */
  const sendGridValuesToGlobalState = () => {
    sendRowAmmountToGlobalState()
    sendColumnAmmountToGlobalState()
    sendRowGapToGlobalState()
    sendColumnGapToGlobalState()
  }

  /**
   * Dispatches/sends a message to the global state that the grid should be reset.
   */
  const sendResetGridMessage = () => {
    dispatch(
      grid({
        reset: !userHasResetGrid
      })
    )
  }

  /**
   * Dispatches/sends a message to the global state that the user is viewing the generated css code.
   */
  const sendViewCssCodeMessage = () => {
    dispatch(
      setViewCssCode({
        viewCssCode: true
      })
    )
  }

  /**
   * React useEffect callback method re-renders the component when
   * one of the values in the `Dependency Array` is updated or changed.
   */
  useEffect(() => {
    if (userHasResetGrid) {
      sendResetGridMessage()
    }
  }, [numberOfRows, numberOfColumns, rowGap, columnGap, userHasResetGrid])

  return (
    <div className="gridMenuContainer">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: '15px 0px 15px 0px', width: '90%', height: '40px' }
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl
          sx={ {
            width: '25ch',
            input: {
              color: '#ffffff',
              background: '#1e1e1e;',
              borderRadius: 2,
              '&:hover': {
                background: '#303030'
              }
            }
          }
          }
          value={!numberOfRows ? '' : numberOfRows}
          onChange={(event) => setNumberOfRows(event.target.value)}
        >
          <OutlinedInput placeholder="Number of rows" />
        </FormControl>
        <FormControl
          sx={ {
            width: '25ch',
            input: {
              color: '#ffffff',
              background: '#1e1e1e;',
              borderRadius: 2,
              '&:hover': {
                background: '#303030'
              }
            }
          }
          }
          value={numberOfColumns}
          onChange={(event) => setNumberOfColumns(event.target.value)}
        >
          <OutlinedInput placeholder="Number of columns" />
        </FormControl>
        <FormControl
          sx={ {
            width: '25ch',
            input: {
              color: '#ffffff',
              background: '#1e1e1e;',
              borderRadius: 2,
              '&:hover': {
                background: '#303030'
              }
            }
          }
          }
          value={rowGap}
          onChange={(event) => setRowGap(event.target.value)}
        >
          <OutlinedInput placeholder="Row gap (px)" />
        </FormControl>
        <FormControl
          sx={ {
            width: '25ch',
            input: {
              color: '#ffffff',
              background: '#1e1e1e;',
              borderRadius: 2,
              '&:hover': {
                background: '#303030'
              }
            }
          }
          }
          value={columnGap}
          onChange={(event) => setColumnGap(event.target.value)}
        >
          <OutlinedInput placeholder="Column Gap (px)" />
        </FormControl>
        <Button onClick={(event) => sendGridValuesToGlobalState(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          Set grid
        </Button>
        <Button onClick={(event) => sendResetGridMessage(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          Reset grid
        </Button>
        <Button onClick={(event) => sendViewCssCodeMessage(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          View CSS Code
        </Button>
      </Box>
    </div>
  )
}

export default GridMenu
