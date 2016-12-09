const connection = require('./connection')
const url = connection.URL

const SECRET = {
  JWT: '',
  SESSION: ''
}

const GITHUB = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  CALLBACK: `${url}/auth/github/callback`
}

const FACEBOOK = {
  APP_ID: '',
  APP_SECRET: '',
  CALLBACK: `${url}/auth/facebook/callback`
}

const TWITTER = {
  API_KEY: '',
  API_SECRET: '',
  CALLBACK: `${url}/auth/twitter/callback`
}

const GOOGLE = {
  CLIENT_ID: '',
  CLIENT_SECRET: '',
  CALLBACK: `${url}/auth/google/callback`
}

module.exports = {
  SECRET,
  GITHUB,
  FACEBOOK,
  TWITTER,
  GOOGLE
}
