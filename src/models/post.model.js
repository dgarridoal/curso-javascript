/**
 * Pregunta número 3
 */

//Se crea la nueva clase "Post" para una mejor vista de los datos
class Post {
  constructor(postId, id, name, email, body) {
    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
  }
}

export default Post;