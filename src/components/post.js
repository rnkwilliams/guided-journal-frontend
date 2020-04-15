class Post {
    constructor(postJSON) {
        this.id = postJSON.id
        this.categoryId = postJSON.category_id
        this.date = postJSON.date
        this.content1 = postJSON.content1
        this.content2 = postJSON.content2
        this.content3 = postJSON.content3
        this.likes = postJSON.likes
    }

    renderLi() {
        return `<li>${this.content1}<br> ${this.content2}<br> ${this.content3}</li>`
    }
}