module.exports = api => {
  const env = api.env();

  let dev = false;
  let modules;

  switch (env) {
    case 'docs':
    case 'test':
    case 'dist-dev':
      dev = true;
      modules = false;
      break;
    case 'dist-prod':
    case 'esm':
      modules = false;
      break;
    case 'cjs':
    default:
      modules = 'commonjs';
  }

  return {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: [env === 'test' && 'istanbul'].filter(Boolean),
  };
};
