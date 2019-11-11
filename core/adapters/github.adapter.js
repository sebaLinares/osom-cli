const Response = require('../entities/Response');

class GithubResponse {
  responseToView(responseData) {
    return new Response({
      cloneUrl: responseData.data.clone_url,
    });
  }

  errorToView(status, errorMessage, errorsArray) {
    let errorMessages;
    if (errorsArray) {
      errorMessages = errorsArray.map(error => error.message);
    }

    switch (status) {
      case 400:
        return `${errorMessage}`;
      case 401:
        return `Repository creation failed. ${errorMessage}`;
      case 422:
        return `${errorMessage}
Because ${errorMessages.join(', ')}`;
      default:
        return `Something went wrong, report this issue in http://github.com/sebaLinares/osom-cli`;
    }
  }
}

module.exports = GithubResponse;
