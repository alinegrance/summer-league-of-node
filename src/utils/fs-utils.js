const fs = require('fs').promises;
const path = require('path');

const readJson = async (pathname) => {
  const data = await fs.readFile(path.resolve(__dirname, pathname));
  return JSON.parse(data);
};

const writeJSON = async (pathname, data) => {
  const updatedData = JSON.stringify(data);
  await fs.writeFile(path.resolve(__dirname, pathname), updatedData);
};

module.exports = {readJson, writeJSON}