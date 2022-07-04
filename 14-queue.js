/*
  Create a queue data structure. The queue should be a class with methods 'add' and 'remove'.

  Adding to the queue should store an element until it is removed.

  --Examples

  const q = new Queue();
  q.add(1);
  q.remove(); // returns 1;

  Queue is FIFO - First in first out.
*/

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

const q = new Queue();
console.log(q);
q.add(1);
console.log(q);
q.add(5);
q.add(8);
q.remove();
console.log(q);