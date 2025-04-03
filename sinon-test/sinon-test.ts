import sinon from 'sinon';

var fakeTimer = sinon.useFakeTimers(new Date('2024-03-03T12:00:00Z').getTime());
// console.log(new Date());
setTimeout(() => {
  console.log(new Date()); // 2025-04-01T12:00:00.000Z（固定）
}, 1000);