import axios from 'axios'

export default class PostsService {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3000/api/'
  }

  getAll() {
    return axios.get('posts?filter={"include":["comments"]}')
  }

  get(id) {
    return axios.get(`posts/${ id }?filter={"include":["comments"]}`)
  }

  add(newPost) {
    newPost.id = null;
    return axios.post('posts', newPost)
  }

  edit(id, post) {
    return axios.put('posts/' + id, post)
  }

  delete(id) {
    return axios.delete('posts/' + id)
  }

  addComment(comment, postId) {
    return axios.post('posts/' + postId + '/comments', comment)
  }

  getComment() {
    return axios.get('')
  }
}

export const postsService = new PostsService()