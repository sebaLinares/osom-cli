import { Response } from '../entities/Response';

export class GithubResponse {
  responseToView(responseData: any) {
    return new Response({
      cloneUrl: responseData.data.clone_url,
    });
  }

  errorToView(status: any, errorMessage: any, errorsArray: any) {
    let errorMessages;

    if (errorsArray) {
      errorMessages = errorsArray.map((error: any) => error.message);
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
        return 'Something went wrong, report this issue in http://github.com/sebaLinares/osom-cli';
    }
  }
}
