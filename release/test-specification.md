## Test specification

### Automatic Unit tests
_________

Automatic unit tests are defined in the `test`-folder, in the root of the project.

The automatic unit test, tests the following requriements:

* 1
* 2
* 4
* 6
* 7
* 8
* 9
* 10
* 11
* 12


### Manual Tests
_________

*Prerequisites*
If not already done, run the `npm install` command in the terminal.

In development, start the application by running the `npm start` command in the terminal.

*Note: The requriement tested is presented along with each test case.*

## TC1 Setting a grid with correct input (numbers)

* (Requirements 1, 2)

### TC1.1
*INPUT*
<br>
1. In the right hand menu, enter the following values and press *SET GRID* as follows: 
<br>
<img src="./img/test-examples/test-1.png" height="350px" alt="test"><img>

*OUTPUT*
1. The main grid area should look as follows:
<br>
<img src="./img/test-examples/test-2.png" height="320px" alt="test"><img>

### TC1.2
*INPUT*
<br>
1. Press `RESET GRID`
2. In the right hand menu, enter the following values and press *SET GRID* as follows: 
<br>
<img src="./img/test-examples/test-3.png" height="350px" alt="test"><img>

*OUTPUT*
1. The main grid area should look as follows:
<br>
<img src="./img/test-examples/test-4.png" height="400px" alt="test"><img>


## TC2 Selecting an area 

* (Requirements 3)

### TC2.1
*INPUT*
1. Press `RESET GRID`
2. Press down the mouse on the first cell. (Position: Row 1, Column 1)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 3, Column 3) and release the mouse button.

*OUTPUT*
1. An area should have been selected, looking as follows (color of the selected area may differ):
<img src="./img/test-examples/test-5.png" width="500px" alt="test"><img>

### TC2.2
*INPUT*
1. Press `RESET GRID`
2. TC1.1
2. Press down the mouse on the cell (Position Row 4, Column 5)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 7, Column 6) and release the mouse button.

*OUTPUT*
1. An area should have been selected, looking as follows:
<img src="./img/test-examples/test-6.png" width="500px" alt="test"><img>

## TC3 Selecting multiple areas

* (Requirements 3)

### TC3.1
*INPUT*
1. Press `RESET GRID`
2. Press down the mouse on the cell (Position Row 2, Column 1)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 5, Column 1)
4. An area should have been selected
5. Press down the mouse on the cell (Position Row 1, Column 1)
6. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 1, Column 5) and release the mouse button.

*OUTPUT*
1. 2 areas should have been selected, looking as follows:
<img src="./img/test-examples/test-7.png" width="500px" alt="test"><img>

### TC3.2
*INPUT*
1. Press `RESET GRID`
2. TC1.1
3. Press down the mouse on the cell (Position Row 2, Column 1)
4. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 8, Column 2)
5. An area should have been selected
6. Press down the mouse on the cell (Position Row 1, Column 1)
7. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 1, Column 8) and release the mouse button.
8. Another area should have been selected
9. Press down the mouse on the cell (Position Row 2, Column 3)
10. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 8, Column 8) and release the mouse button.

*OUTPUT*
1. 3 areas should have been selected, looking as follows:
<img src="./img/test-examples/test-8.png" width="500px" alt="test"><img>

## TC4 Generating CSS code

* (Requirements 4)

### TC4.1
*INPUT*
1. Press `RESET GRID`
2. TC3.1
3. Press `VIEW CSS CODE`

*OUTPUT*
1. A pop-up window should appear with the corresponding CSS code, as follows:
<br>
<img src="./img/test-examples/test-9.png" width="500px" alt="test"><img>

### TC4.2
*INPUT*
1. Press `RESET GRID`
2. TC3.2
3. Press `VIEW CSS CODE`

*OUTPUT*
1. A pop-up window should appear with the corresponding CSS code, as follows:
<br>
<img src="./img/test-examples/test-10.png" width="500px" alt="test"><img>

## TC5 Resetting settings

* (Requirements 5)

### TC5.1
*INPUT*
1. TC3.2
2. Press `RESET GRID`

*OUTPUT*
1. The grid should be reset to its initial state, as follows:
<br>
<img src="./img/test-examples/test-11.png" width="500px" alt="test"><img>

## TC5 Selecting an already selected area

* (Requirements 6)

### TC5.1
*INPUT*
1. Press `RESET GRID`
2. Press down the mouse on the first cell. (Position: Row 1, Column 1)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 3, Column 3) and release the mouse button.
4. An area should be selected.
5. Press down the mouse on the first cell. (Position: Row 1, Column 1)
6. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 3, Column 3) and release the mouse button.

*OUTPUT*
1. A new selection should not have been created on top of the first one.

### TC5.2
1. Press `RESET GRID`
2. Set number of rows to 7
3. Set number of rows to 6
4. Set row gap to 1
5. Set column gap to 3

6. Press down the mouse on the cell (Position: Row 1, Column 1)
7. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 4, Column 4) and release the mouse button.
8. An area should be selected.
9. Press down the mouse on the first cell. (Position: Row 1
10. Column 1)
11. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 3, Column 3) and release the mouse button.

*OUTPUT*
1. Only one area (the first) should be selected.


## TC6 Only positive numbers when setting number of rows and columns

* (Requirements 7, 8)

### TC6.1
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-13.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Only positve values are allowed`

### TC6.2
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-14.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Only positve values are allowed`

### TC6.3
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-15.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Only positve values are allowed`

### TC6.4
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-16.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Only positve values are allowed`

## TC7 No negative numbers when setting row and column gap

* (Requirements 9, 10)

### TC7.1
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-17.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `No negative values are allowed`

### TC7.2
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-18.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `No negative values are allowed`

## TC8 Only create selection from left to right and top to bottom

* (Requirements 1)

### TC8.1
*INPUT*
1. Press `RESET GRID`
2. Start a dragging selection from position (Row 1, Column 5)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 1, Column 1) and release the mouse button.

*OUTPUT*
1. No area should have been selected.

### TC8.2
*INPUT*
1. Press `RESET GRID`
2. Start a dragging selection from position (Row 5, Column 1)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 1, Column 1) and release the mouse button.


*OUTPUT*
1. No area should have been selected.

*OUTPUT*
1. No area should have been selected.

### TC8.3
*INPUT*
1. Press `RESET GRID`
2. Start a dragging selection from position (Row 5, Column 5)
3. Keep the mouse pressed down and drag the mouse pointer to cell (Position Row 1, Column 1) and release the mouse button.


*OUTPUT*
1. No area should have been selected.

## TC9 Setting values above max allowed

* (Requirements 12)

### TC9.1
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-19.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Number of rows and columns can only be set to a maximum of 20`

### TC9.2
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-20.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Number of rows and columns can only be set to a maximum of 20`

### TC9.3
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-21.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Number of rows and columns can only be set to a maximum of 20`

### TC9.4
*INPUT*
1. Press `RESET GRID`
2. Input the following values and press set grid:
<br>
<img src="./img/test-examples/test-22.png" width="250px" alt="test"><img>

*OUTPUT*
1. An error message should appear, saying `Number of rows and columns can only be set to a maximum of 20`

