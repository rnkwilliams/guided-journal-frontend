class Post {
    constructor(post, postJSON) {
        debugger
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
        return `
        <div data-id=${this.id}>
            <div class="container">
                <div class="card mb-4 shadow-sm">   
                <div class="card-body">
                    <span>${this.category.name}</span><br><br>
                    <p class="card-text">
                    ${this.content1}<br>
                    ${this.content2}<br>
                    ${this.content3}<br></p>
                    <div class="d-flex justify-content-between align-items-center">
                     <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" data-id=${this.id}>Edit</button>
                     </div>
                     <small class="text-muted">Category: ${this.category.name}</small>
                    </div>
                </div>
                </div>
            </div>
        </div>`
    }

    update({ content1, content2, content3, category_id }) {
        this.content1 = content1
        this.content2 = content2
        this.content3 = content3
        this.categoryId = category_id
    }

    renderUpdateForm() {
        if (this.categoryId === 1) {
            return this.updateDailyCare();
        } else if (this.categoryId === 2) {
            return this.updateSelfCare();
        } else {
            return this.updateGoalSetting();
        }
    }

    updateSelfCare() {
        return `<form data-id=${this.id} >
        <h3>Edit Journal Entry</h3>
        <fieldset class="fieldset">
          <legend>I am grateful for: </legend>
          <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
        </fieldset>
        <fieldset>
          <legend>Daily Affirmation </legend>
          <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
        </fieldset>
        <fieldset>
          <legend>How could I have made today better? </legend>
          <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
        </fieldset>
          <input class="btn btn-secondary mb-2 form" type="submit" value="Edit Entry"></input>
      </form><br>`
    }

    updateDailyCare() {
        return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset class="fieldset">
            <legend>How was your mental state today? </legend>
            <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
        </fieldset>
        <fieldset>
            <legend>What did I acccomplish today? </legend>
            <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
        </fieldset>
        <fieldset>
            <legend>How much did I spend today? </legend>
            <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
        </fieldset>
            <input class="btn btn-secondary mb-2 form" type="submit" value="Edit Entry" id="edit"></input>
            </form></br>`
    }

    updateGoalSetting() {
        return `<form data-id=${this.id} >
            <h3>Edit Journal Entry</h3>
            <fieldset class="fieldset">
                        <legend>Today I commit to: </legend>
                        <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="input-content1">${this.content1}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>Three things I must do today: </legend>
                        <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="input-content2">${this.content2}</textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What is my inspiration for today? </legend>
                        <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="input-content3">${this.content3}</textarea>
                    </fieldset>
                        <input class="btn btn-secondary mb-2 form" type="submit" value="Edit Entry"></input>`
    }

    static findById(id) {
        return this.all.find(post => post.id === id);
    }

    static renderSelfCare() {
        return `
                    <fieldset class="fieldset">
                        <legend>I am grateful for: </legend>
                        <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset >
                    <fieldset>
                        <legend>Daily Affirmation </legend>
                        <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How could I have made today better? </legend>
                        <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input rows="4" class="btn btn-secondary mb-2 form" type="submit" value="Create Entry"></input><br><br>`
    }

    static renderDailyCare() {
        return `<fieldset class="fieldset">
                        <legend>How was your mental state today? </legend>
                        <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="content1"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>What did I acccomplish today? </legend>
                        <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="content2"></textarea>
                    </fieldset>
                    <fieldset>
                        <legend>How much did I spend today? </legend>
                        <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="content3"></textarea>
                    </fieldset>
                        <input class="btn btn-secondary mb-2 form" type="submit" value="Create Entry"></input><br><br>`
    }
    static renderGoal() {
        return `<fieldset class="fieldset">
                            <legend>Today I commit to: </legend>
                            <textarea class="form-control" rows="4" name="content1" maxlength="200" rows="4" id="content1"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>Three things I must do today: </legend>
                            <textarea class="form-control" rows="4" name="content2" maxlength="200" rows="4" id="content2"></textarea>
                        </fieldset>
                        <fieldset>
                            <legend>What is my inspiration for today? </legend>
                            <textarea class="form-control" rows="4" name="content3" maxlength="200" rows="4" id="content3"></textarea>
                        </fieldset>
                            <input class="btn btn-secondary mb-2 form" type="submit" value="Create Entry"></input><br><br>`
    }

}

Post.all = [];

