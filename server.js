import Fastify from "fastify";
import fs from "fs";
import connectDB from "./databases/mongodb.js";
import routes from "./routes.js";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

const fastify = Fastify({
    https: {
        key: fs.readFileSync("./key.pem"),
        cert: fs.readFileSync("./cert.pem")
    },
    logger: true
});

connectDB();

fastify.register(helmet);
fastify.register(cors);

fastify.register(routes);

fastify.listen({ port: 3000, host: "localhost" }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Serveur sécurisé en cours d'exécution sur ${address}`);
});

