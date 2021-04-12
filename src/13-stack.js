/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  class Stack {
    constructor() { // конструктор класса запускается 1 раз при инициализации
      this.stack = []; // создаем пустой массив для каждого объекта класса свой
    }

    push(element) {
      this.stack.push(element); // добаляем новый элемент в стек для данного объекта
    }

    pop() {
      return this.stack.pop();// удаляем элемент из стека для данного объекта
    }

    peek() {
      return this.stack[this.stack.length - 1]; // возвращаем значение последнего элемента из стека для данного объекта
    }
  }

module.exports = Stack;
