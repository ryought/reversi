'use strict';

// var counter = require('./counter');

// counter.increment();
// console.log(counter.counter);

var hoge = 1;

function inc() {
  hoge++;
}

console.log('loaded');


function Counter(init_value) {
  console.log('hogehoge');
  this.x = init_value;
  this.increment = function() {
    this.x++;
  }
  this.log = function() {
    console.log(this.x, 'dayo');
  }
}


var c = new Counter(10);
console.log('c', c);
c.increment();
c.log();
console.log(c.x);


console.log(document.getElementById('hoge'))
