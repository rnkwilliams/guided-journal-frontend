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
        this.postsContainer.addEventListener('click', this.editButtonHandler.bind(this))
    }

    // EVENT LISTENER FOR RENDERING A SPECIFIC FORM BASED ON CATEGORY CHOSEN
    selectHandler(e) {
        const categoryId = e.target.value

        if (categoryId == '2') {
            this.postForm.innerHTML = Post.renderSelfCare();
        } else if (categoryId == '1') {
            this.postForm.innerHTML = Post.renderDailyCare();
        } else {
            this.postForm.innerHTML = Post.renderGoal();
        }

        this.postForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const value1 = document.querySelector('#content1').value
            const value2 = document.querySelector('#content2').value
            const value3 = document.querySelector('#content3').value
            this.createPost(categoryId, value1, value2, value3)
        })
    }

    // CREATE POST
    createPost(categoryId, value1, value2, value3) {
        this.adapter.createPost(categoryId, value1, value2, value3).then(post => {
            const newPost = new Post(post.data.id, post.data.attributes)

            document.querySelector('#content1').value = ''
            document.querySelector('#content2').value = ''
            document.querySelector('#content3').value = ''
            this.postsContainer.innerHTML += newPost.renderLi()
        })
    }

    // EDIT BUTTON
    editButtonHandler(e) {
        const id = e.target.dataset.id
        const post = Post.findById(id);
        const hideNewForm = document.querySelector('#newpost-form')

        this.updatePost.innerHTML = post.renderUpdateForm()
        hideNewForm.style.display = "none";
    }

    // UPDATE FORM
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
                post.update(updatedPost)
                document.querySelector('#input-content1').value = ''
                document.querySelector('#input-content2').value = ''
                document.querySelector('#input-content3').value = ''
                //this.updatePost.style.display = "none";
                //this.postForm.style.display = "block";
                this.addPosts();
            })
    }

    addPosts() {
        //Clears innerHTML when function is called to avoid duplication of posts
        this.postsContainer.innerHTML = '';
        Post.all.forEach(
            post => (this.postsContainer.innerHTML += post.renderLi())
        );
    }

    // INITIAL FETCH GET POSTS
    fetchAndLoadPosts() {
        this.adapter.getPosts().then(posts => {
            posts.data.sort((a, b) => a.id - b.id).forEach(post => {
                const newPost = new Post(post, post.attributes)
                this.postsContainer.innerHTML += newPost.renderLi()
            })
        })
    }
}
