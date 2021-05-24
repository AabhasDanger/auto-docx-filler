/*
*writeFile
*readFile
*createFolder
*DeleteFolder
*addLine
*DeleteFile
*RemoveLine
*ListFiles
*/

let fs = require('fs')

//util Function to create/write files
exports.writeFile = (name,path,content,edit) => {
    if(edit == false){
        if(fs.readdirSync(path).includes(name)) return
    }
    fs.writeFileSync(`${path}\\${name}`,content)
}

//util function to readfile
exports.readFile = (path,type) => {
    path = path == undefined ? 'utf-8' : path
    return fs.readFileSync(path,type)
}

//util function to create folder
exports.createDir = (folder)=>{
    if(!fs.existsSync(folder))fs.mkdirSync(folder)
}

//util Function to remove directory
exports.removeDir = (path) => {
    if(fs.existsSync(path)){
        fs.rmdirSync(path)
    }
}

//util Function for deleting Files
exports.deleteFile = (file) => {
    fs.unlinkSync(file)
}