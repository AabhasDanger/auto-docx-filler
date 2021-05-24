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

//util Function to addLine to a file
exports.addLine = (file,pos,content) => {
    let filecontent = fs.readFileSync(file,'utf-8')
    let lines = filecontent.split('\r\n')
    let newLines = []
    pos = pos == undefined ? lines.length+1 : pos
    if(pos>lines.length){
        newLines = lines
        newLines[pos-1] = content
        fs.writeFileSync(file,newLines.join('\r\n'))
        return
    }
    newLines = lines
    newLines.splice(pos-1,0,content)
    fs.writeFileSync(file,newLines.join('\r\n'))
}

//util Function to remove a particular line of a file
exports.rmLine = (file,lineno) => {
    let lines = fs.readFileSync(file,'utf-8').split('\r\n')
    lines.splice(lineno,1)
    fs.writeFileSync(file,lines.join('\r\n'))
}

//util Function to list files in a dir
exports.listFiles = (dir) => {
    return fs.readdirSync(dir)
}