export class ChildElementCalculator {
  #numberOfChildElements

  /**
   *
   * @param numberOfChildElements
   */
  setNumberOfChildElements (numberOfChildElements) {
    this.#numberOfChildElements = numberOfChildElements
  }

  /**
   *
   */
  getClassNameArray () {
    const classNameArray = []
    for (let i = 1; i <= this.#numberOfChildElements; i++) {
      classNameArray.push(`child${i}`)
    }
    return classNameArray
  }
}
