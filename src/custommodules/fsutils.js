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

exports.readFile = (path,type) => {
    path = path == undefined ? 'utf-8' : path
    return fs.readFileSync(path,type)
}