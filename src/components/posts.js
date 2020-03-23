class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadPosts()
    }

    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            posts.forEach(post => this.posts.push(new Post(post)))
        })
            .then(() => {
                this.render()
            })
    }

    render() {
        const postsContainer = document.querySelector('#posts-container')
        postsContainer.innerHTML = this.posts.map(post => `<li>${post.content1} ${post.content2} ${post.content3}</li>`).join('')
    }
}