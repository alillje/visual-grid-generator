import { Validator } from '../classes/validator.js'
const validator = new Validator(20)

// const validator = require('../src/classes/validator')

describe('Validates if a given ammount is bigger than the given max value (15)', () => {
  test('Should not throw error', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        3
      )
    ).toBe(undefined)
  })
  test('Should not throw error', () => {
    expect(
      validator.isBiggerThanMaxAmmount(
        3
      )
    ).toBe(undefined)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isBiggerThanMaxAmmount(21)
    }
    expect(
      t1
    ).toThrow(Error)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isBiggerThanMaxAmmount(200)
    }
    expect(
      t1
    ).toThrow(Error)
  })
})

describe('Validates if input is parseable to an integer', () => {
  test('Should return true', () => {
    expect(
      validator.isParseableToNumber(
        3
      )
    ).toBe(undefined)
  })
  test('Should return true', () => {
    expect(
      validator.isParseableToNumber(
        3
      )
    ).toBe(undefined)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isParseableToNumber(NaN)
    }
    expect(
      t1
    ).toThrow(Error)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isParseableToNumber('test')
    }
    expect(
      t1
    ).toThrow(Error)
  })
})

describe('Validates if input is a negative number', () => {
  test('Should not throw error', () => {
    expect(
      validator.isNotNegative(
        3
      )
    ).toBe(undefined)
  })
  test('Should not throw error', () => {
    expect(
      validator.isNotNegative(
        3
      )
    ).toBe(undefined)
  })
  test('Should not throw error', () => {
    expect(
      validator.isNotNegative(
        0
      )
    ).toBe(undefined)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isNotNegative(-273)
    }
    expect(
      t1
    ).toThrow(Error)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isNotNegative(-1)
    }
    expect(
      t1
    ).toThrow(Error)
  })
})

describe('Validates if input is a positive number', () => {
  test('Should not throw error', () => {
    expect(
      validator.isPositive(
        3
      )
    ).toBe(undefined)
  })
  test('Should not throw error', () => {
    expect(
      validator.isPositive(
        293
      )
    ).toBe(undefined)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isPositive(0)
    }
    expect(
      t1
    ).toThrow(Error)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isPositive(-273)
    }
    expect(
      t1
    ).toThrow(Error)
  })
  test('Should throw error', () => {
    /**
     * Wrapping function requried to test throws.
     */
    const t1 = () => {
      validator.isPositive(-1)
    }
    expect(
      t1
    ).toThrow(Error)
  })
})

describe('Validates if a start value is bigger than an end value', () => {
  test('Should return true', () => {
    expect(
      validator.endIsLessThanStartValue(
        5, 1
      )
    ).toBe(true)
  })
  test('Should return true', () => {
    expect(
      validator.endIsLessThanStartValue(
        61, 5
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    expect(
      validator.endIsLessThanStartValue(
        1, 5
      )
    ).toBe(false)
  })
  test('Should return false', () => {
    expect(
      validator.endIsLessThanStartValue(
        4, 3012
      )
    ).toBe(false)
  })
})

describe('Validates if a html element is selected', () => {
  test('Should return true', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'templateBox')
    expect(
      validator.isAlreadySelected(
        div
      )
    ).toBe(true)
  })
  test('Should return false', () => {
    const div = document.createElement('div')
    expect(
      validator.isAlreadySelected(
        div
      )
    ).toBe(false)
  })
})
