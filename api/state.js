module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    
    const get = (req, res) => {
        app.db('states')
            .then(state => res.json(state))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('states')
            .where({ id: req.params.id })
            .first()
            .then(state => res.json(state))
            .catch(err => res.status(500).send(err))
    }

    
    return { get, getById }
}