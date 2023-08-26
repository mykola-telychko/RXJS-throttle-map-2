import { interval } from 'rxjs';
import { throttle, map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttle

// Example 2: Throttle with promise
//emit value every 1 second
const srcInterval$ = interval(1000);
//incrementally increase the time to resolve based on source
const promise = (val) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Resolved: ${val}`), val * 100)
  );
//when promise resolves emit item from source
const example = srcInterval$.pipe(
  throttle(promise),
  map((val) => `Throttled off Promise: ${val}`)
);
const subscribe = example.subscribe((val) => console.log(val));
