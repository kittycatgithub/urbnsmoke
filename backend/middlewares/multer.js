import multer from 'multer'
import path from 'path'
import fs from 'fs'

// Ensure folder exists
const folderPath = path.join( process.cwd() + '/public/products' )
if( !fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true })
}

const storage = multer.diskStorage({
    destination: function ( req , file, cb ){
       return cb(null, 'public/products');
    }, 
    filename: function ( req , file , cb ){
       return cb(null, new Date().toLocaleDateString('en-GB').replace(/\//g, '-') + '-' +  file.originalname );
    }
})

const upload = multer( { storage } )

export default upload
    

