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


module.exports = router