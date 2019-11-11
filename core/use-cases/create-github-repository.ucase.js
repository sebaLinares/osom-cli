const CreateGithubRepository = async ({
  api,
  githubAdapter,
  repositoryData,
  successCallback,
  errorCallback,
}) => {
  try {
    const apiResponse = await api.sendPost(repositoryData);
    const responseToView = githubAdapter.responseToView(apiResponse);
    successCallback(responseToView);
  } catch (error) {
    // TODO
    if (error.response) {
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorToView = githubAdapter.errorToView(
        error.response.status,
        error.response.data.message,
        error.response.data.errors,
      );
      errorCallback(errorToView);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorCallback(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      errorCallback(error.message);
    }
  }
};

module.exports = CreateGithubRepository;
