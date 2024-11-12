exports.init = function(app) {
    app.get('/', (req, res) => {
        res.sendFile('main.html');
    });
};
