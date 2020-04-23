class PostsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/posts'
    }

    getPosts() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createPost(selectCat, value1, value2, value3) {
        const post = {
            category_id: selectCat,
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
}
