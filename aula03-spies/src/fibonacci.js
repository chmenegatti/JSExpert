class Fibonacci {
  *excute(input, current = 0, next = 1) {
    
    if (input === 0) {
      return 0;
    }

    // retorna o valor
    yield current;

    // chama a função novamente
    yield* this.excute(input - 1, next, current + next);
  }
}

module.exports = Fibonacci;