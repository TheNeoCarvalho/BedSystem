const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.get('/', function (req, res) {
        res.send('Backend da Api Johnny Vaz, solicite o acesso por email');
    });
    
    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))

    app.route('/country')
        //.all(app.config.passport.authenticate())
        .get(app.api.country.get)

    app.route('/state')
        //.all(app.config.passport.authenticate())
        .get(app.api.state.get)

        
    app.route('/city')
        .get(app.api.city.get)
    
    app.route('/city/:id')
        .get(app.api.city.getById)  // TODO: alterar para cod_city
    
    app.route('/hospital')
        .get(app.api.hospital.get)

        app.route('/bed')
        .get(app.api.bed.get)
        .put(app.api.bed.save)
        
    app.route('/bed/:id')
        .get(app.api.bed.getById)

    app.route('/bed/alteroccupation')
        .get(app.api.bed.setocuppation)

    
        // app.route('/stats')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.stat.get)

    // app.route('/certificados/')  //
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.certificados.getAll)
    //     .put(app.api.certificados.save)
    
    // app.route('/certificados/pessoa/:id')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.certificados.getByPessoa)
}