"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEntrevista = exports.deleteEntrevista = exports.createEntrevista = exports.getEntrevistaById = exports.getEntrevista = void 0;
const database_1 = require("../database");
const getEntrevista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM entrevista');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal error');
    }
});
exports.getEntrevista = getEntrevista;
const getEntrevistaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM entrevista WHERE id =$1', [id]);
        return res.status(200).json(response.rows[0]);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal error');
    }
});
exports.getEntrevistaById = getEntrevistaById;
const createEntrevista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        yield database_1.pool.query('INSERT INTO entrevista (name) VALUES ($1)', [name]);
        return res.json({ message: 'Element created successfully', body: { element: { name } } });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal error');
    }
});
exports.createEntrevista = createEntrevista;
const deleteEntrevista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const element = (yield database_1.pool.query('SELECT * FROM entrevista WHERE id =$1', [id])).rows[0];
        yield database_1.pool.query('DELETE FROM entrevista WHERE id = $1', [id]);
        return res.json({ message: 'this element was deleted', element });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal error');
    }
});
exports.deleteEntrevista = deleteEntrevista;
const updateEntrevista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        yield database_1.pool.query('UPDATE entrevista SET name = $1 WHERE id = $2', [name, id]);
        return res.json({ message: 'Element updated successfully', body: { element: { id, name } } });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal error');
    }
});
exports.updateEntrevista = updateEntrevista;
