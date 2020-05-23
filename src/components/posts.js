class Posts {
    constructor() {
        this.adapter = new PostsAdapter()
        this.initBindingAndEventListeners()
        this.fetchAndLoadPosts()
    }

    initBindingAndEventListeners() {
        this.postForm = document.querySelector('#newpost-form')

        this.updatePost = document.querySelector('#update-post')
        this.updatePost.addEventListener('submit', this.updateFormHandler.bind(this))

        this.select = document.getElementById('categories')
        this.select.addEventListener('change', this.selectHandler.bind(this))

        this.postsContainer = document.querySelector('#posts-container')
        this.postsContainer.addEventListener('click', this.editButton.bind(this))
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
            const postId = post.data.id
            const newPost = new Post(postId, thePost)

            document.querySelector('#content1').value = ''
            document.querySelector('#content2').value = ''
            document.querySelector('#content3').value = ''
            this.postsContainer.innerHTML += newPost.renderLi()
        })
    }

    // EDIT POST
    editButton(e) {
        const id = e.target.dataset.id
        const post = Post.findById(id);
        const hideNewForm = document.querySelector('#newpost-form')

        this.updatePost.innerHTML = post.renderUpdateForm()
        hideNewForm.style.display = "none";
    }

    updateFormHandler(e) {
        e.preventDefault()
        const id = e.target.dataset.id
        const post = Post.findById(id)
        const value1 = document.querySelector('#input-content1').value
        const value2 = document.querySelector('#input-content2').value
        const value3 = document.querySelector('#input-content3').value
        const category_id = post.category.id

        this.adapter.updatePost(post.id, value1, value2, value3, category_id)
            .then(updatedPost => {
                debugger
                const post = Post.findById(updatedPost.id)
                const postUpdate = post.update(updatedPost)
                this.postsContainer.innerHTML = postUpdate.renderLi()

            })
    }

    // INITIAL FETCH GET POSTS
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            //console.log(posts.data)
            posts.data.sort((a, b) => a.id - b.id).forEach(post => {
                const newPost = new Post(post, post.attributes)
                //console.log(newPost)
                this.postsContainer.innerHTML += newPost.renderLi()
            })
        })
    }
}
