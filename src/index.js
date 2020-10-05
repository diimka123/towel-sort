
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((accArr, arr, i) => {
    if (i % 2 !== 0 && i !== 0) {
      return [...accArr, ...arr.reverse()]
    } else {
      return [...accArr, ...arr]
    }
  }, [])
}
