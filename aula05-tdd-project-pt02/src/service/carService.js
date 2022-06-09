const BaseRepository = require("../repository/base/baseRepository");


class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  test(id) {
    return this.carRepository.find(id);
  }
}

module.exports = CarService;