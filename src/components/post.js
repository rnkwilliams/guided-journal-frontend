class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.date = postJSON.date
        this.content1 = postJSON.content1
        this.content2 = postJSON.content2
        this.content3 = postJSON.content3
        this.likes = postJSON.likes
    }
}