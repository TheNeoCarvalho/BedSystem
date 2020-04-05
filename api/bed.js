module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation
    
    const setocuppation = (req, res) => {
        // const livre = 0
        // const ocupado = 1 
        // const reservado = 2
        const bed = { ...req.body}
        if(req.params.id) bed.id = req.params.id
        if(req.params.type) bed.type = req.params.type
        // const idbedhistory = app.db('bedhistorys')
        //     .where({id_bed: bed.id })
        //     .then(_ => res.send())

            app.db('bedhistorys')
                .insert({
                    id_bed: bed.id,
                    id_patient: bed.id_patient,
                    occupation: bed.type
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
            }

    const save = (req, res) => {
        const bed = { ...req.body }
        if(req.params.id) bed.id = req.params.id

        try {
           // isNumber(bed.bed, 'Campo bed só aceita números')
            //existsOrError(bed.bed, 'E-mail não informada')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(bed.id) {
            app.db('beds')
                .update(bed)
                .where({ id: bed.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('beds')
                .insert(bed)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('beds')
            .then(bed => res.json(bed))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('beds')
            .where({ id: req.params.id })
            .first()
            .then(bed => res.json(bed))
            .catch(err => res.status(500).send(err))
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('beds')
            .where({ id: req.params.id }).del()
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, remove, setocuppation }
}