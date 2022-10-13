import { CssColors } from '../classes/enum/colors.js'
import { RandomColorGenerator } from '../classes/random-color-generator.js'
const randomColorGenerator = new RandomColorGenerator()

describe('Validates if a random color is generated', () => {
  test('Should be true', () => {
    let isOneOfColorsInList = false
    const color = randomColorGenerator.getRandomColor()
    for (const value of Object.values(CssColors)) {
      if (value === color) {
        isOneOfColorsInList = true
      }
    }
    expect(
      isOneOfColorsInList
    ).toBe(true)
  })
})
