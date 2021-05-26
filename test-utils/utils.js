function getIdByName(name, fixtureName) {
  const data = fixtureName.find(fixture => fixture.name === name);
  return data ? data._id.toString() : '5fd1981426b8da06e1be9f40';
};

module.exports = {
  getIdByName
};
