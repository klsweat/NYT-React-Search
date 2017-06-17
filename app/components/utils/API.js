import axios from "axios";

const API = {
  // Retrieves all Articles from the db
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Saves a new article to the db
  saveArticles: function(text) {
    return axios.post("/api/articles", { text });
  },
  // Deletes a article from the db
  deleteArticles: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  // Toggles a article's favorite property in the db
  favoriteArticles: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(`/api/articles/${_id}`, { favorited });
  }
};
export default API;