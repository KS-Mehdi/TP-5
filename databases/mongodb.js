import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/albumsDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connecté avec succès !");
    } catch (error) {
        console.error("Erreur de connexion à MongoDB :", error);
        process.exit(1);
    }
}

export default connectDB;
