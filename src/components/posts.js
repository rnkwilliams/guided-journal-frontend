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
        this.postForm = document.querySelector('#newpost-form')

        this.select = document.getElementById('categories')
        this.select.addEventListener('change', this.selectHandler.bind(this))

        this.postsContainer.addEventListener('click', this.editPost.bind(this))
    }

    // EVENT LISTENER FOR RENDERING A SPECIFIC FORM BASED ON CATEGORY CHOSEN
    selectHandler(e) {
        const categoryId = e.target.value
        //console.log(categoryId)
        if (categoryId == '2') {
            this.postForm.innerHTML = Post.renderSelfCare();
            this.postForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const value1 = document.querySelector('#content1').value
                const value2 = document.querySelector('#content2').value
                const value3 = document.querySelector('#content3').value
                this.createPost(categoryId, value1, value2, value3)
            })

        } else if (categoryId == '1') {
            this.postForm.innerHTML = Post.renderDailyCare();
            this.postForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const value1 = document.querySelector('#content1').value
                const value2 = document.querySelector('#content2').value
                const value3 = document.querySelector('#content3').value
                this.createPost(categoryId, value1, value2, value3)
            })
        } else {
            this.postForm.innerHTML = Post.renderGoal();
            this.postForm.addEventListener('submit', (e) => {
                e.preventDefault()
                const value1 = document.querySelector('#content1').value
                const value2 = document.querySelector('#content2').value
                const value3 = document.querySelector('#content3').value
                this.createPost(categoryId, value1, value2, value3)
            })
        }
    }
    // CREATE POST
    createPost(categoryId, value1, value2, value3) {
        //console.log(value1, value2, value3)
        this.adapter.createPost(categoryId, value1, value2, value3).then(post => {
            const thePost = post.data.attributes
            let newPost = new Post(thePost)

            document.querySelector('#content1').value = ''
            document.querySelector('#content2').value = ''
            document.querySelector('#content3').value = ''
            this.postsContainer.innerHTML += newPost.renderLi()
            debugger;
        })
    }

    //EDIT POST
    editPost(e) {
        const id = parseInt(e.target.dataset.id)
        const post = Post.findById(id)

        //console.log(e.target)
        //debugger;
    }

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

    // render() {
    //     this.postsContainer.innerHTML = this.posts.map(post => post.renderLi()).join('')
    // }
}
