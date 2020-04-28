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

    static renderSelfCare() {
        return `<fieldset>
            <legend>I am grateful for: </legend>
            <textarea name="content1" maxlength="200" rows="4" id="content1"></textarea>
            </fieldset>
            <fieldset>
                <legend>Daily Affirmation </legend>
                <textarea name="content2" maxlength="200" rows="4" id="content2"></textarea>
            </fieldset>
            <fieldset>
                <legend>How could I have made today better? </legend>
                <textarea name="content3" maxlength="200" rows="4" id="content3"></textarea>
            </fieldset>
            <input type="submit" value="Submit"></input>`
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
            <input type="submit" value="Submit"></input>`
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
            <input type="submit" value="Submit"></input>`
    }

}

