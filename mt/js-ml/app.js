const express = require('express');
const fileUpload = require('express-fileupload');
const { spawn } = require('child_process');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle file upload and processing
app.post('/images', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const imageFile = req.files.file;
    const filePath = __dirname + 'images' + imageFile.name;

    imageFile.mv(filePath, (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        const pythonProcess = spawn('python', [path.join(__dirname, 'mnist', 'classify.py'), '--image', filePath]);
        
        pythonProcess.stdout.on('data', (data) => {
            const result = data.toString();
            res.send(`The number is: ${result}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
            res.status(500).send('Something went wrong');
        });
    });
});

const port = 5500;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
