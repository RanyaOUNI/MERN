const jokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes",jokeController.findAllJokes),
    app.get("/api/jokes/:id",jokeController.findOneJoke),
    app.post("/api/jokes",jokeController.createJokes),
    app.put("/api/jokes/:id",jokeController.updateJoke)
    app.delete("/api/jokes/:id",jokeController.deleteJoke)


}

