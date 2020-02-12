// const cancelIt = defer(fn, 100)
// 50msec later...
// cancelIt()
// and fn never was run...
// How can you write code with "threaded" cancelation, but with natural expressive power
export function defer(fn, ms = 0) {
  const timeoutId = setTimeout(fn, ms);
  return () => clearTimeout(timeoutId);
}

