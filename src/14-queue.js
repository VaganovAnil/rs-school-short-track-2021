// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

 class Queue {
  constructor() { // конструктор класса как в предыдущем
    this.head = null; // начальный указатель на список
    this.length = 0; // добавил счетчик списка чтобы не пробегать каждый раз и не считать длину
  }

  get size() {
    return this.length; // собственно всегда возвращаю просто значение длины
  }

  enqueue(element) {
    if (this.length === 0) {
      this.head = new ListNode(element); // если список пустой, тогда добавление элемента - это ссылка начального head на добавляемый элемент
      // элемент должен создаваться при помощи функции ListNode которая создана разработчиками теста. Она подключается в 1 строке файла
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
        // если списое не пустой, тогда идем по скиску последовательно пока не дойдем до конца
      }

      current.next = new ListNode(element); // когда дошли до конца - добавляем новый элемент в конец.
    }

    this.length++; // увеличиваем счетчик на 1
  }

  dequeue() {
    if (this.head === null) return null; // если список пустой - нечего возвращать
    const deletedElement = this.head.value; // запоминаем первый элемент чтобы после удаления можно было его вернуть как результат выполнения метода
    this.head = this.head.next;  // удаляем первый элемент путем смещения начальной ссылки head на второй элемент. первый элемент таким образом удаляется
    this.length--;  // уменьшаем длину списка
    return deletedElement;  // возвращаем элемент, который удалили
  }
}

module.exports = Queue;
