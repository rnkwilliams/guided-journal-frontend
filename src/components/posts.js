class Posts {
    constructor() {
        this.posts = []
        this.adapter = new PostsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingAndEventListeners() {
        this.postsContainer = document.querySelector('#posts-container')
        //this.newPostContent1 = document.querySelector('#content1')
        //console.log(this.newPostContent1)
        //this.newPostContent2 = document.querySelector('#content2')
        //this.newPostContent3 = document.querySelector('#content3')

        this.select = document.getElementById('categories')
        this.select.addEventListener('change', this.selectHandler.bind(this))

        this.postForm = document.querySelector('#newpost-form')
        this.postForm.addEventListener('submit', this.createPost.bind(this))
    }

    selectHandler(e) {
        const categoryId = e.target.value
        //console.log(categoryId)
        if (categoryId == '2') {
            this.postForm.innerHTML = Post.renderSelfCare();
            const value1 = document.querySelector('#content1')
            //console.log(value1.value)
            const value2 = document.querySelector('#content2')
            const value3 = document.querySelector('#content3')
            this.postForm.addEventListener('submit', this.createPost(value1, value2, value3))
        } else if (categoryId == '1') {
            this.postForm.innerHTML = Post.renderDailyCare();
            const value1 = document.querySelector('#content1')
            const value2 = document.querySelector('#content2')
            const value3 = document.querySelector('#content3')
            this.postForm.addEventListener('submit', this.createPost(value1, value2, value3))
        } else {
            this.postForm.innerHTML = Post.renderGoal();
            const value1 = document.querySelector('#content1')
            const value2 = document.querySelector('#content2')
            const value3 = document.querySelector('#content3')
            this.postForm.addEventListener('submit', this.createPost(value1, value2, value3))
        }
    }

    createPost(value1, value2, value3) {
        //e.preventDefault()
        console.log(value1, value2, value3)

    }

    // createPost(e) {
    //     e.preventDefault()
    //     //let select = document.getElementById('categories')
    //     //const selectCat = this.select.options[this.select.selectedIndex].value
    //     const value1 = this.newPostContent1.value
    //     const value2 = this.newPostContent2.value
    //     const value3 = this.newPostContent3.value

    //     this.adapter.createPost(value1, value2, value3).then(post => {
    //         this.posts.push(new Post(post))
    //         this.newPostContent1.value = ''
    //         this.newPostContent2.value = ''
    //         this.newPostContent3.value = ''
    //         this.render()
    //     })
    // }

    // INITIAL FETCH
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            //console.log(posts.data)
            posts.data.forEach(post => {
                const thePost = post.attributes
                const newPost = new Post(thePost)
                //console.log(newPost)
                this.postsContainer.innerHTML += newPost.renderLi()
            })
        })
    }

    render() {
        this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    }
}
