// worker.js
// self.addEventListener('message', (e) => {
//   console.log('worker received message...', e.data)
//   // worker response
//   self.postMessage('hello index.html');
// }, false)

self.addEventListener('message', (e) => {
  let i = e.data;
  while (i < 1800000001) {
    if (i % 100000 === 0) {
      self.postMessage(i)
    }
    i++
  }
}, false)

// self.testVar = 34;
//
// self.addEventListener('message', (e) => {
//   self.foo = e.data
//   }
// }, false)
