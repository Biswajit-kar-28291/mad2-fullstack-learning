new Vue({
  el: "#app",
  data: {
    title: "Post Search App",
    posts: [],
    search: "",
    loading: false,
    error: ""
  },

  methods: {
    fetchPosts: function () {
      var vm = this;
      vm.loading = true;
      vm.error = "";

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
          }
          return response.json();
        })
        .then(function (data) {
          vm.posts = data;
        })
        .catch(function (err) {
          console.log("Fetch error:", err);
          vm.error = "Failed to fetch data";
        })
        .finally(function () {
          vm.loading = false;
        });
    },

    removePost: function (id) {
      this.posts = this.posts.filter(function (post) {
        return post.id !== id;
      });
    }
  },

  computed: {
    filteredPosts: function () {
      var vm = this;

      return vm.posts.filter(function (post) {
        return post.title.toLowerCase().includes(vm.search.toLowerCase());
      });
    }
  },

  created: function () {
    this.fetchPosts();
  }
});