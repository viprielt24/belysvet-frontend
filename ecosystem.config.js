module.exports = {
  apps: [{
    name: 'belysvet',
    script: './server/server.js',

    instances: 1,
    autorestart: false,
    watch: false,
    max_memory_restart: '1G',
    exec_mode: 'fork',
    append_env_to_name: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_file: 'logs/combined.log',
  }]
};