// linked list ragh
const obj = {
  value: 10,
  next: null,
};

const head = obj;
let tail = obj;

const data = {
  value: 20,
  next: null,
};

tail.next = data;

tail = data;

tail;

const data2 = {
  value: 30,
  next: null,
};

tail.next = data2;

tail = data2;

tail;

const test = {
  head: {
    value: 10,
    next: {
      value: 20,
      next: null,
    },
  },
};

let temp1 = test.head;

temp1.next = {
  value: 30,
  next: null,
};

console.log(temp1);
