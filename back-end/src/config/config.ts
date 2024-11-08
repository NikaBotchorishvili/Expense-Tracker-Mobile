import { DBConfig } from './types/DBConfig';
import * as dotenv from 'dotenv';

dotenv.config();

export const Config: DBConfig = {
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '12345678',
  database: process.env.DB_DATABASE || 'ExpenseTracker',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
};
