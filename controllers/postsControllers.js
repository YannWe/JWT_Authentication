const posts = require("../dataset/dataset.js");

//Create simple route to get all our posts
/**
 * @method: GET
 * @description: get posts of the logged user
 * @access: Private
 */

const getPosts = (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
  console.log(posts);
  //   res.write(posts)
  //   res.end();
  //.write + .end = .send
  // additional functionalities inside express, use .json. .json converts all types that are sent, making it simpler to use.
};

module.exports = getPosts;
