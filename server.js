import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import apiRoutes from "./Routes/apiRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();
const DB = process.env.MONGO_URL;

// Get the directory name using the import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  await mongoose.connect(DB, {});
  console.log('Connected to MongoDB');
  } catch (error) {
  console.error('Error connecting to MongoDB:', error.message);
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', apiRoutes);

// Static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'));
});


app.get("/", (req, res) => {
  res.send("<h1>Welcome To DreamWed- Connect</h1>");
});

const PORT = process.env.PORT || 8000;




app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
