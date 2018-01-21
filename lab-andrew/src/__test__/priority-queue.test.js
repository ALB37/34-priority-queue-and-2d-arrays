'use strict';

const PriorityQueue = require('../lib/priority-queue');

describe('tests for priority-queue.js', () => {
  test('testing that isEmpty behaves as expected', () => {
    let testQueue = new PriorityQueue();
    expect(testQueue.isEmpty()).toEqual(true);
    testQueue.enqueue({priority: 5, value: 'a'});
    expect(testQueue.isEmpty()).toEqual(false);
  });

  test('testing that enqueue behaves properly and priority-queue stores highest priority objects in internal array at index 0, also testing that peek returns the highest priority queue in the heap', () => {
    let testQueue = new PriorityQueue();
    expect(testQueue.peek()).toBeNull();
    testQueue.enqueue({priority: 5, value: 'a'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 2, value: 'b'});
    expect(testQueue.peek()).toEqual('b');
    testQueue.enqueue({priority: 6, value: 'c'});
    expect(testQueue.peek()).toEqual('b');
  });

  test('testing that enqueue stores objects with the same priority in the queue order - FIFO', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 2, value: 'a'});
    testQueue.enqueue({priority: 2, value: 'b'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 6, value: 'c'});
    expect(testQueue.peek()).toEqual('a');
    testQueue.enqueue({priority: 1, value: 'd'});
    expect(testQueue.peek()).toEqual('d');
  });

  test('testing that dequeue method properly returns highest priority value in the priority-queue and removes that value', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 2, value: 'a'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toBeNull();
    testQueue.enqueue({priority: 5, value: 'f'});
    testQueue.enqueue({priority: 3, value: 'd'});
    testQueue.enqueue({priority: 1, value: 'a'});
    testQueue.enqueue({priority: 2, value: 'b'});
    testQueue.enqueue({priority: 2, value: 'c'});
    testQueue.enqueue({priority: 3, value: 'e'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toEqual('b');
    expect(testQueue.dequeue()).toEqual('c');
    expect(testQueue.dequeue()).toEqual('d');
    expect(testQueue.dequeue()).toEqual('e');
    expect(testQueue.dequeue()).toEqual('f');
  });

  test('testing that dequeue method properly returns highest priority value in the priority-queue and removes that value in edge cases', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 1, value: 'a'});
    testQueue.enqueue({priority: 2, value: 'b'});
    testQueue.enqueue({priority: 3, value: 'e'});
    testQueue.enqueue({priority: 3, value: 'f'});
    testQueue.enqueue({priority: 2, value: 'c'});
    testQueue.enqueue({priority: 4, value: 'h'});
    testQueue.enqueue({priority: 5, value: 'i'});
    testQueue.enqueue({priority: 6, value: 'j'});
    testQueue.enqueue({priority: 7, value: 'k'});
    testQueue.enqueue({priority: 3, value: 'g'});
    testQueue.enqueue({priority: 8, value: 'l'});
    testQueue.enqueue({priority: 2, value: 'd'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toEqual('b');
    expect(testQueue.dequeue()).toEqual('c');
    expect(testQueue.dequeue()).toEqual('d');
    expect(testQueue.dequeue()).toEqual('e');
    expect(testQueue.dequeue()).toEqual('f');
    expect(testQueue.dequeue()).toEqual('g');
    expect(testQueue.dequeue()).toEqual('h');
    expect(testQueue.dequeue()).toEqual('i');
    expect(testQueue.dequeue()).toEqual('j');
    expect(testQueue.dequeue()).toEqual('k');
    expect(testQueue.dequeue()).toEqual('l');
  });

  test('testing that FIFO is preserved when priority is constant/in order', () => {
    let testQueue = new PriorityQueue();
    testQueue.enqueue({priority: 1, value: 'a'});
    testQueue.enqueue({priority: 1, value: 'b'});
    testQueue.enqueue({priority: 1, value: 'c'});
    testQueue.enqueue({priority: 1, value: 'd'});
    testQueue.enqueue({priority: 1, value: 'e'});
    testQueue.enqueue({priority: 1, value: 'f'});
    testQueue.enqueue({priority: 2, value: 'g'});
    testQueue.enqueue({priority: 3, value: 'h'});
    testQueue.enqueue({priority: 3, value: 'i'});
    testQueue.enqueue({priority: 3, value: 'j'});
    testQueue.enqueue({priority: 3, value: 'k'});
    testQueue.enqueue({priority: 4, value: 'l'});
    testQueue.enqueue({priority: 4, value: 'm'});
    testQueue.enqueue({priority: 4, value: 'n'});
    testQueue.enqueue({priority: 4, value: 'o'});
    testQueue.enqueue({priority: 5, value: 'p'});
    testQueue.enqueue({priority: 5, value: 'q'});
    testQueue.enqueue({priority: 5, value: 'r'});
    testQueue.enqueue({priority: 5, value: 's'});
    testQueue.enqueue({priority: 5, value: 't'});
    testQueue.enqueue({priority: 6, value: 'u'});
    testQueue.enqueue({priority: 6, value: 'v'});
    testQueue.enqueue({priority: 6, value: 'w'});
    testQueue.enqueue({priority: 6, value: 'x'});
    testQueue.enqueue({priority: 7, value: 'y'});
    testQueue.enqueue({priority: 7, value: 'z'});
    expect(testQueue.dequeue()).toEqual('a');
    expect(testQueue.dequeue()).toEqual('b');
    expect(testQueue.dequeue()).toEqual('c');
    expect(testQueue.dequeue()).toEqual('d');
    expect(testQueue.dequeue()).toEqual('e');
    expect(testQueue.dequeue()).toEqual('f');
    expect(testQueue.dequeue()).toEqual('g');
    expect(testQueue.dequeue()).toEqual('h');
    expect(testQueue.dequeue()).toEqual('i');
    expect(testQueue.dequeue()).toEqual('j');
    expect(testQueue.dequeue()).toEqual('k');
    expect(testQueue.dequeue()).toEqual('l');
    expect(testQueue.dequeue()).toEqual('m');
    expect(testQueue.dequeue()).toEqual('n');
    expect(testQueue.dequeue()).toEqual('o');
    expect(testQueue.dequeue()).toEqual('p');
    expect(testQueue.dequeue()).toEqual('q');
    expect(testQueue.dequeue()).toEqual('r');
    expect(testQueue.dequeue()).toEqual('s');
    expect(testQueue.dequeue()).toEqual('t');
    expect(testQueue.dequeue()).toEqual('u');
    expect(testQueue.dequeue()).toEqual('v');
    expect(testQueue.dequeue()).toEqual('w');
    expect(testQueue.dequeue()).toEqual('x');
    expect(testQueue.dequeue()).toEqual('y');
    expect(testQueue.dequeue()).toEqual('z');
  });
});