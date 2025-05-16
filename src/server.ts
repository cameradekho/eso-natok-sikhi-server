import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db-config';
import studentRoutes from './routes/student-routes';
import teacherRoutes from './routes/teacher-routes';


// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Product API!');
});

app.use('/api/student', studentRoutes);
app.use('/api/teacher', teacherRoutes);

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error(`Failed to start server: ${error.message}`);
  }
};

startServer();
