let docx = require('docxtemplater')
let PizZip = require('pizzip')
let fs = require('./fsutils')

//error handlers
function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
    }
    throw error;
}



//Main util Function
exports.docCreation = (docObj) => {
    let content = fs.readFile(docObj.format,'binary')
    let zip = new PizZip(content)
    let doc;
    try {
        doc = new Docxtemplater(zip);
    } catch(error) {
        // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
        errorHandler(error);
    }
    doc.setData(docObject.data)
    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
    }
    catch (error) {
        // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
        errorHandler(error);
    }
    let buf = doc.getZip().generate({type:'nodebuffer'})
    fs.writeFile(docObj.title,docObj.path,buf)
    return `File Created! ${docObj.title} At ${docObj.path}`
}

/*
docObj structure
{
    title
    data
    path
    format
}
*/ 