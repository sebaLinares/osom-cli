#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();
import { taskToComplete } from './core/controllers/main.controller';

taskToComplete();
