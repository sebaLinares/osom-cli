#!/usr/bin/env node
import dotenv from 'dotenv';
dotenv.config();

import { createGithubRepository } from './infrastructure/controllers/create-github-repository.controller';

createGithubRepository();
