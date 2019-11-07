const axios = require('axios');

class ApiGithub {
  constructor(auth) {
    this.auth = auth;
    this.url = 'https://api.github.com/user/repos';
    this.headers = {
      'content-type': 'application/json',
    };
  }

  sendPost(data) {
    return new Promise((resolve, reject) => {
      const config = {
        url: this.url,
        method: 'post',
        headers: this.headers,
        data: data,
        auth: this.auth,
      };

      axios(config)
        .then(data => {
          // console.log( data );
          resolve(data);
        })
        .catch(error => {
          // console.log( error );
          reject(error);
        });
    });
  }
}

module.exports = ApiGithub;
