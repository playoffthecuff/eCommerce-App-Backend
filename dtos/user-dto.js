/* eslint-disable no-underscore-dangle */
module.exports = class UserDto {
  constructor(model) {
    this.email = model.email;
    this.id = model._id;
  }
};
