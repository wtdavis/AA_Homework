export class Game {
    constructor() {
        this.gameStartMessage = "Would you like to play a game?"
    }


start () {
    document
        .getElementById("button")
        .addEventListener("click", () => {
            const messageContainer = document.getElementById("message");
            messageContainer.innerText = this.gameStartMessage
        })
}

}