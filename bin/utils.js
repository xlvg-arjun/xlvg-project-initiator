const { resolve } = require('path');

function formDesinationPath(destinationName) {
  const destinationPathFormed = resolve(process.cwd(), destinationName);
  return destinationPathFormed;
}

module.exports =  {
  formDesinationPath,
};
