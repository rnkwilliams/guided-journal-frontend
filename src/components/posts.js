class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingAndEventListeners() {
        this.postsContainer = document.querySelector('#posts-container')
        this.newPostContent1 = document.querySelector('#content1')
        this.newPostContent2 = document.querySelector('#content2')
        this.newPostContent3 = document.querySelector('#content3')
        this.selfCare = document.querySelectorAll('option')[2]
        //console.log(this.selfCare)

        this.postForm = document.querySelector('#newpost-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
    }

    createPost(e) {
        e.preventDefault()
        const value1 = this.newPostContent1.value
        const value2 = this.newPostContent2.value
        const value3 = this.newPostContent3.value
        const selfCare = this.selfCare.value

        this.adapter.createPost(selfCare, value1, value2, value3).then(post => {
            this.posts.push(new Post(post))
            this.newPostContent1.value = ''
            this.newPostContent2.value = ''
            this.newPostContent3.value = ''
            this.render()
        })
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
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
}