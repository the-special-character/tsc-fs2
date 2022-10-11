class ResponseWrapper {
  constructor(res) {
    this.res = res;
  }

  handle(data, status, statusCode) {
    let res = {};

    if (statusCode >= 200 && statusCode <= 300) {
      res = {
        result: data,
        status,
      };
    } else {
      res = {
        errorMessage: data,
        status,
      };
    }

    this.res.status(statusCode).send(res);
  }

  ok(data) {
    this.handle(data, 'OK', 200);
  }

  created(data) {
    this.handle(data, 'OK', 201);
  }

  updated(data) {
    this.handle(data, 'OK', 202);
  }

  internalError(errMessage) {
    this.handle(errMessage, 'UNKNOWN_ERROR', 500);
  }

  notfound(errMessage) {
    this.handle(errMessage, 'USER_NOT_FOUND', 404);
  }

  invalidInput(errMessage) {
    this.handle(errMessage, 'INVALID_INPUT', 400);
  }

  UNAUTHORIZED(errMessage) {
    this.handle(errMessage, 'UNAUTHORIZED', 401);
  }
}

module.exports = ResponseWrapper;
