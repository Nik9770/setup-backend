import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({ path: ".env" });

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT || 8000, () => {
      console.log(`✅ Server is running at PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Error connecting to MongoDB:", err.message);
  });
