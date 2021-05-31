const file = require('./Twice.json');
const fs = require('fs');
var path = require('path');
const express = require('express');

const router = app => {
    app.get('/twice', (request, response) => {
        response.sendFile(__dirname + '/HTML/index.html', 'utf8');
        app.use(express.static(path.join(__dirname, '/HTML')));
    });

    app.get('/search', (request, response) => {
        try
        {
            var resp = {data:[file.data]};
            response.status(200).send(resp);
        }
        catch
        {
            response.status(404).send("error");
        }
    });
    app.post('/search', (request, response) => {
            try
            {
                var item = {id:parseInt(request.body.id), name:request.body.name, image:request.body.image};
                if(file.data.findIndex(i => i.id == item.id) != -1)
                {
                    response.send("id already exists");
                    return;
                }
                file.data.push(item);    
                pushToJson();
                response.status(200).send('Member added');
            }
            catch
            {
                response.send("error");
            }
        });
}

module.exports = router;

function pushToJson ()
{
    fs.writeFile('./routes/Twice2.json', JSON.stringify(file), function(err) {
        if (err) {
        console.log(err);
        }
    });
}