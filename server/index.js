const express = require('express')

const app = express()

const port = 3000

// Creating the middleware

app.use( express.static('public') )

const path = require('path')

const clientRoot = path.join( __dirname, '../client', 'dist' )
app.use( express.static(clientRoot) )


app.get( '/', ( req, res ) => {
    // res.send( "Hello, World!" )
    res.sendFile('index.html', { clientRoot } )
})

app.get( '/test', ( req, res ) => {
    res.send( `Server Is Operational!` )
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
