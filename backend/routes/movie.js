const con = require('../db')
const express = require('express')
const { request, response } = require('express')
const router = express.Router()

router.get('/',(request,response)=>{
    const conn = con.openConnection()
    conn.query(`SELECT * FROM movie;`,(error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})

router.post('/',(request,response)=>{
    const{movie_id, movie_title,movie_release_date,movie_time,director_name} = request.body
    const conn = con.openConnection()
    conn.query(`INSERT INTO movie(movie_id, movie_title,movie_release_date,movie_time,director_name) 
    VALUES(${movie_id},'${movie_title}','${movie_release_date}','${movie_time}','${director_name}')`,(error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
router.put('/:movie_id',(request,response)=>{
    const{movie_id} = request.params
    const{movie_title,movie_time} = request.body
    const conn = con.openConnection()
    conn.query(`UPDATE movie SET movie_title='${movie_title}' AND movie_time='${movie_time}' WHERE movie_id = ${movie_id}`,(error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
router.delete('/:id',(request,response)=>{
    const{movie_id} = request.params
    const conn = con.openConnection()
    conn.query(`DELETE FROM movie WHERE movie_id=${movie_id};`,(error,data)=>{
        conn.end()
        if(error){
            response.send(error)
        }else{
            response.send(data)
        }
    })
})
module.exports = router