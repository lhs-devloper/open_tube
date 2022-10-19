import "regenerator-runtime";
import "dotenv/config"
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const Port = process.env.PORT || 4000;

const handleListening = () => console.log(`Server listening on port http://localhost:${Port} 🖥`);

app.listen(Port, handleListening);