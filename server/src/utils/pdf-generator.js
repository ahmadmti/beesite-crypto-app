const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const Promise = require('bluebird');
const pdf = Promise.promisifyAll(require('html-pdf'));

async function createPDF(templateName, data = null) {
    console.log(data)
    var templateHtml = fs.readFileSync(path.join(process.cwd(), `/src/views/pdf_content.html`), 'utf8');

    var template = handlebars.compile(templateHtml);
    var html = template(data);

    var milis = new Date();
    var string = milis.toDateString().trim();
    milis = milis.getTime();

    var fileName = `'contract'-${milis}.pdf`;

    var pdfPath = path.join('public/pdf', `${fileName}`);


    let options = {
        "height": "10.25in",
        "width": "8.5in",
        "header": {
            "height": "20mm"
        },
        "footer": {
            "height": "20mm",
        },
        filename: pdfPath
    }
    let pdfGenerated = await pdf.createAsync(html, options);

    return fileName;

};





module.exports = { createPDF }