class Post {
    constructor(post, postJSON) {
        this.id = post.id
        this.categoryId = postJSON.category_id
        this.date = postJSON.date
        this.content1 = postJSON.content1
        this.content2 = postJSON.content2
        this.content3 = postJSON.content3
        this.category = postJSON.category
        Post.all.push(this)
    }

    renderLi() {
        //debugger
        return `
        <li data-id=${this.id}>
            <span>${this.category.name}</span><br>
            ${this.content1}<br> 
            ${this.content2}<br> 
            ${this.content3}<br>
            <button class="btn" data-id=${this.id}>edit</button>
        </li><br>`
    }

    updatePost({ value1, value2, value3, category_id }) {
        this.content1 = value1
        this.content2 = value2
        this.content3 = value3
        this.categoryId = category_id
    }

    renderUpdateForm() {
        if (this.categoryId === 2) {
            return `
        <form data-id=${this.id} >
          <h3>Edit Journal Entry</h3>
          <fieldset>
            <legend>I am grateful for: </legend>
            <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
          </fieldset>
          <fieldset>
            <legend>Daily Affirmation </legend>
            <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
          </fieldset>
          <fieldset>
            <legend>How could I have made today better? </legend>
            <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
          </fieldset>
            <input class="btn" type="submit" value="Edit Entry"></input>
        </form><br>`
        } else if (this.categoryId === 1) {
            return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset>
            <legend>How was your mental state today? </legend>
            <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
        </fieldset>
        <fieldset>
            <legend>What did I acccomplish today? </legend>
            <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
        </fieldset>
        <fieldset>
            <legend>How much did I spend today? </legend>
            <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
        </fieldset>
            <input class="btn" type="submit" value="Edit Entry"></input>
            </form></br>`
        } else {
            return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset>
                        <legend>Today I commit to: </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Three things I must do today: </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What is my inspiration for today? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Edit Entry"></input>`
        }
    }

    static findById(id) {
        return this.all.find(post => post.id === id);
    }

    static renderSelfCare() {
        return `
                    <fieldset>
                        <legend>I am grateful for: </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset >
                    <fieldset>
                        <legend>Daily Affirmation </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How could I have made today better? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }

    static renderDailyCare() {
        return `<fieldset>
                        <legend>How was your mental state today? </legend>
                        <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What did I acccomplish today? </legend>
                        <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How much did I spend today? </legend>
                        <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }
    static renderGoal() {
        return `<fieldset>
                            <legend>Today I commit to: </legend>
                            <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Three things I must do today: </legend>
                            <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>What is my inspiration for today? </legend>
                            <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
                        </fieldset>
                            <input class="btn" type="submit" value="Create Entry"></input><br><br>`
    }

}

Post.all = [];

