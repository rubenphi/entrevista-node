import {request, Request, response, Response} from 'express';
import {QueryResult} from 'pg';
import { pool} from '../database';

export const getEntrevista = async(req: Request, res: Response): Promise<Response> => {
  try{
    const response: QueryResult = await pool.query('SELECT * FROM entrevista');  
    return res.status(200).json(response.rows);
  }catch(e) {
    console.log(e);
    return res.status(500).json('Internal error')
  }
}

export const getEntrevistaById = async(req: Request, res: Response): Promise<Response> => {
  try{
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM entrevista WHERE id =$1' , [id]);
    return res.status(200).json(response.rows[0]);
  }
  catch(e){
    console.log(e);
    return res.status(500).json('Internal error')
  }

}


export const createEntrevista = async(req: Request, res: Response): Promise<Response> => {
  try{
    const { name } = req.body;
    await pool.query('INSERT INTO entrevista (name) VALUES ($1)', [name]);
    return res.json({message: 'Element created successfully', body: {element:{name}}});
  }
  catch(e){
     console.log(e);
    return res.status(500).json('Internal error')
  }

}


export const deleteEntrevista = async(req: Request, res: Response): Promise<Response> => {
  try{
    const id = parseInt(req.params.id);
    const element: QueryResult = (await pool.query('SELECT * FROM entrevista WHERE id =$1' , [id])).rows[0];
    await pool.query('DELETE FROM entrevista WHERE id = $1', [id]);
    return res.json({message: 'this element was deleted', element})

  }
  catch(e){
     console.log(e);
    return res.status(500).json('Internal error')
  }

}

export const updateEntrevista = async(req: Request, res: Response): Promise<Response> => {
  try{
    const id = parseInt(req.params.id);
    const { name } = req.body;
    await pool.query('UPDATE entrevista SET name = $1 WHERE id = $2', [name, id]);
    return res.json({message: 'Element updated successfully', body: {element:{id, name}}});

  }
  catch(e){
    console.log(e);
    return res.status(500).json('Internal error')
  }

}

