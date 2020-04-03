module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    const save = (req, res) => {
        const hospital = { ...req.body }
        if(req.params.id) hospital.id = req.params.id

        try {
            isNumber(hospital.hospital, 'Campo hospital só aceita números')
            existsOrError(hospital.hospital, 'E-mail não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(hospital.id) {
            app.db('hospitals')
                .update(hospital)
                .where({ id: hospital.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('hospitals')
                .insert(hospital)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }
    const limit = 10
    const get = async (req, res) => {
        const page = req.query.page || 1
        const result = await app.db('hospitals').count('id').first()
        const count = parseInt(result.count)
        
        app.db('hospitals')
            //.select('id', 'cod_hospital', 'name_hospital')
            .limit(limit).offset(page * limit - limit)
            .then(hospitals => res.json({ data: hospitals, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('hospitals')
            //.select('id', 'cod_hospital', 'name_hospital')
            .where({ id: req.params.id })
            .first()
            .then(hospital => res.json(hospital))
            .catch(err => res.status(500).send(err))
    }


    return { save, get, getById }
}