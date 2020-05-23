class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPost(categoryId, value1, value2, value3) {
        const post = {
            category_id: categoryId,
            content1: value1,
            content2: value2,
            content3: value3,
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ post }),
        })
            .then(res => res.json())
    }

    updatePost(postId, value1, value2, value3, category_id) {
        //debugger
        const post = {
            content1: value1,
            content2: value2,
            content3: value3,
            category_id: category_id,
        }
        return fetch(`${this.baseUrl}/${postId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ post }),
        })
            .then(res => res.json())
    }
}
