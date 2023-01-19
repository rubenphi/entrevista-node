import { Pool } from 'pg';

export const pool = new Pool({
  user: 'ruben',
  database: 'entrevista',
  host: '127.0.0.1',
  password: 'japon93',
  port:5432
})
