const { spawn } = require('child_process');

const env = {
  ...process.env,
  HTTPS: 'true',
  SSL_CRT_FILE: 'localhost.pem',
  SSL_KEY_FILE: 'localhost-key.pem'
};

spawn('npm', ['start'], { 
  env, 
  stdio: 'inherit', 
  shell: true 
});
