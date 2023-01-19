"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'ruben',
    database: 'entrevista',
    host: '127.0.0.1',
    password: 'japon93',
    port: 5432
});
