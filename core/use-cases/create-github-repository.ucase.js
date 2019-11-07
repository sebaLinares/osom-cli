const CreateGithubRepository = async ({ api, repositoryData, successCallback, errorCallback }) => {
  try {
    const apiResponse = await api.sendPost(repositoryData);
    successCallback(apiResponse);
  } catch (error) {
    // TODO
    errorCallback(error);
  }
};

module.exports = CreateGithubRepository;
