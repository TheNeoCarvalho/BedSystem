module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const save = (req, res) => {
        const country = { ...req.body }
        if(req.params.id) country.id = req.params.id

        try {
            isNumber(country.country, 'Campo country só aceita números')
            existsOrError(country.country, 'E-mail não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(country.id) {
            app.db('countrys')
                .update(country)
                .where({ id: country.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('countrys')
                .insert(country)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('countrys')
            .then(country => res.json(country))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('countrys')
            .where({ id: req.params.id })
            .first()
            .then(country => res.json(country))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('countrys')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove }
}