/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( /* matrix */ ) {
  throw new Error('Not implemented');
}
def matrixElementsSum(matrix):
  costSum = 0
for x in range(len(matrix)):
  for y in range(len(matrix[0])):
  if x > 0:
  if matrix[x - 1][y] == 0:
  matrix[x][y] = 0
costSum += matrix[x][y]
return costSum
module.exports = getMatrixElementsSum;
