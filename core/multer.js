import multer from 'multer';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Multer Storage to save uploaded Files from XLS and CSV
var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, __dirname + '../../uploads')
    },
    filename: async function(req,file,cb){
        cb(null,file.originalname);
    }
})
var uploadMW = multer({storage:storage});

export default uploadMW;