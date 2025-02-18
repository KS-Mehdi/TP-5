const Fastify = require("fastify");
const fs = require("fs");
const connectDB = require("./databases/mongodb");
const routes = require("./routes");

// Charger les certificats HTTPS
const fastify = Fastify({
    https: {
        key: fs.readFileSync("./key.pem"),
        cert: fs.readFileSync("./cert.pem")
    },
    logger: true
});

// Connexion à MongoDB
connectDB();

// Ajouter les plugins de sécurité
fastify.register(require("@fastify/helmet"));
fastify.register(require("@fastify/cors"));

// Charger les routes
fastify.register(routes);

// Démarrer le serveur
fastify.listen({ port: 3000, host: "localhost" }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Serveur sécurisé en cours d'exécution sur ${address}`);
});
