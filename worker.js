self.addEventListener('message', (e) => {
  let i = e.data;
  while (i < 200e6) {
    if (i % 100000 === 0) {
      self.postMessage(i)
    }
    i++
  }
}, false)
