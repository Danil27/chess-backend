import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Game } from "./game";
import { Match } from "./entity/Match";

AppDataSource.initialize().then(async () => {

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)
            // this.matchRepository = 

    (new Game(AppDataSource.getRepository(Match))).run();

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error));
export { AppDataSource };



