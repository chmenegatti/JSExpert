const Fibonacci = require('./fibonacci');
const sinon = require('sinon');
const assert = require('assert');


//Fibonacci: o proximo valor corresponde a soma dos dois anteriores
;
(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.excute.name);
    
    for await (const i of fibonacci.excute(3)) {};
    
    const expectedCallCount = 4;

    assert.deepStrictEqual(spy.callCount, expectedCallCount)
  }

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.excute.name);
    const [...results] = fibonacci.excute(5);

    const { args } = spy.getCall(2);

    const expectedResult = [0, 1, 1, 2, 3];

    const expectedParams = Object.values({
      input: 3,
      current: 1,
      next: 2,
    });

    assert.deepStrictEqual(args, expectedParams);
    assert.deepStrictEqual(results, expectedResult);
  }

})()