class responseWrapper {
  constructor(res) {
    this.res = res;
  }

  handle(data, status, statuscode) {
    let res = {};
    if (statuscode >= 200 && statuscode <= 300) {
      res = {
        result: data,
        status,
      };
    } else {
      res = {
        ErrorMessage: data,
        status,
      };
    }
    this.res.status(statuscode).send(res);
  }

  OK(result) {
    this.handle(result, `Done Succesfully`, 200);
  }

  CREATED(result) {
    this.handle(result, `Created Succesfully`, 201);
  }

  UPDATED(result) {
    this.handle(result, `Record Updated Succesfully`, 200);
  }

  DELETED(result) {
    this.handle(result, `Succesfully`, 200);
  }

  DATA_NOT_AVAILABLE(ErrorMessage) {
    this.handle(ErrorMessage, `Data you are searching is not found`, 400);
  }

  INVALID_INPUT(ErrorMessage) {
    this.handle(ErrorMessage, `Data you are entering is not valid`, 400);
  }

  INTERNAL_ERROR(ErrorMessage) {
    this.handle(ErrorMessage, `Internal-Error`, 500);
  }
}

module.exports = responseWrapper;
