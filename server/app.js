// *** Importing 
const express = require('express');
const app = express();
const { createPDF } = require('./src/utils/pdf-generator');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json({
    extended: true,
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static('public'))

// *** App Config
const PORT = process.env.PORT || 2000;
const { mail } = require('../client/src/utils/utils');


// *** API Routes  
app.post('/api/send-mail', async function(req, res) {
    try {
        let fileFirst = await createPDF('first', req.body);
        // console.log(fileFirst)
        mail({
            from: `agent@beesite.geeklone.com`,
            to: req.body.email,
            sender: 'Beesite',
            subject: 'Contract',
            attachments: [{
                filename: 'Contract.pdf',
                path: `http://localhost:2000/public/pdf/${fileFirst}`,
                contentType: 'application/pdf'
            }],
        });
        console.log(res)
    } catch (error) {
        console.log(error)
    }

})


// *** Listen
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));