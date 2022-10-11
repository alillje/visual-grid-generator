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
 * Displays a grid box.
 *
 * @returns {React.ReactElement} - GridBox Component.
 */
const GridMenu = () => {
  const [numberOfRows, setNumberOfRows] = useState('')
  const [numberOfColumns, setNumberOfColumns] = useState('')
  const [rowGap, setRowGap] = useState('')
  const [columnGap, setColumnGap] = useState('')
  const userResetGrid = useSelector((state) => state.grid.reset)
  const dispatch = useDispatch()

  /**
   *
   */
  const sendRowAmmountToGlobalState = () => {
    dispatch(
      setAmountOfRows({
        numberOfRows
      })
    )
  }

  /**
   *
   */
  const sendColumnAmmountToGlobalState = () => {
    dispatch(
      setAmountOfColumns({
        numberOfColumns
      })
    )
  }

  /**
   *
   */
  const sendRowGapToGlobalState = () => {
    dispatch(
      globalSetRowGap({
        rowGap
      })
    )
  }

  /**
   *
   */
  const sendColumnGapToGlobalState = () => {
    dispatch(
      globalSetColumnGap({
        columnGap
      })
    )
  }

  /**
   *
   * @param event
   */
  const setGrid = (event) => {
    event.preventDefault()
    sendRowAmmountToGlobalState()
    sendColumnAmmountToGlobalState()
    sendRowGapToGlobalState()
    sendColumnGapToGlobalState()
  }

  /**
   * Dispatches a message to the global state that the grid should be reset.
   */
  const resetGrid = () => {
    dispatch(
      grid({
        reset: true
      })
    )
    resetInputFieldValues()
  }

  /**
   * Sets all input field values initial values.
   */
  const resetInputFieldValues = () => {
    setNumberOfRows('')
    setNumberOfColumns('')
    setRowGap('')
    setColumnGap('')
  }

  /**
   *
   *
   */
  const viewCssCode = () => {
    dispatch(
      setViewCssCode({
        viewCssCode: true
      })
    )
  }

  useEffect(() => {
    console.log(numberOfRows)
    if (userResetGrid) {
      setNumberOfRows('')
      setNumberOfColumns('')
      setRowGap('')
      setColumnGap('')
    }
  }, [numberOfRows, numberOfColumns, rowGap, columnGap, userResetGrid])

  return (
    <div className="gridMenuContainer">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: '15px', width: '90%', height: '40px' }
        }}
        noValidate
        autoComplete="off"
        // onSubmit={(event) => setGrid(event)}
      >
        <FormControl
          sx={ {
            width: '25ch',
            margin: '0px',
            input: {
              color: 'white',
              background: '#4e4e4e;',
              borderRadius: 2
            }
          }
          }
          value={numberOfRows}
          onChange={(event) => setNumberOfRows(event.target.value)}
        >
          <OutlinedInput placeholder="Number of rows" />
        </FormControl>
        <FormControl
          sx={ {
            width: '25ch',
            margin: '15px',
            input: {
              color: 'white',
              background: '#4e4e4e;',
              borderRadius: 2
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
            margin: '15px',
            input: {
              color: 'white',
              background: '#4e4e4e;',
              borderRadius: 2
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
            margin: '15px',
            input: {
              color: 'white',
              background: '#4e4e4e;',
              borderRadius: 2
            }
          }
          }
          value={columnGap}
          onChange={(event) => setColumnGap(event.target.value)}
        >
          <OutlinedInput placeholder="Column Gap (px)" />
        </FormControl>
        <Button onClick={(event) => setGrid(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          Set grid
        </Button>
        <Button onClick={(event) => resetGrid(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          Reset grid
        </Button>
        <Button onClick={(event) => viewCssCode(event)} variant="text" sx={ { color: 'white', border: '1px solid grey' } }>
          View CSS Code
        </Button>
      </Box>
    </div>
  )
}

export default GridMenu
