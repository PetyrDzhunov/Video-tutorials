const config = {
    PORT: 4000,
    DB_URI: 'mongodb://localhost/video-tutorial',
    SALT_ROUNDS: 10,
    SECRET: 'VERYSTRONGSECRET',
    COOKIE_NAME: 'TOKEN',
};

module.exports = config;