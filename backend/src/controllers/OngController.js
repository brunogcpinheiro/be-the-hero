module.exports = {
  index(request, response) {
    return response.json({ hello: "world" });
  }
};
