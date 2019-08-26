import BaseModelRequest from './base/BaseModelRequest';

export default class UserRequest extends BaseModelRequest {
  getModelName() {
    return 'users'
  }

  login(email, password, otp = '',redirectUrl) {
    let params = {
      grant_type: 'password',
      client_id: process.env.MIX_CLIENT_ID,
      client_secret: process.env.MIX_CLIENT_SECRET,
      username: email,
      password: password,
      scope: '*',
      otp: otp,
      redirectUrl: redirectUrl,
    }
    return this.post('/oauth/token', params);
  }

  register(email, username, phone, message = '') {
    let params = {
      email: email,
      username: username,
      phone: phone,
      message: message
    }
    return this.post('/add-user', params);
  }

}
