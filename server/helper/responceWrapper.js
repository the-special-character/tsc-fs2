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

  notFound(errMessage) {
    this.handle(errMessage, 'RECORD_NOT_FOUND', 400);
  }
}

module.exports = ResponseWrapper;
