class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.bindEventListeners()
        this.fetchAndLoadPosts()
    }

    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            console.log(posts)
        })
    }
}