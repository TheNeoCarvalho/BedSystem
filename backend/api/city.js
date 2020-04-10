module.exports = app => {
    const { existsOrError, isNumber } = app.api.validation

    const limit = 10
    const get = async (req, res) => {
        const page = req.query.page || 1
        const result = await app.db('citys').count('id').first()
        const count = parseInt(result.count)
        
        app.db('citys')
            .select('id', 'cod_city', 'name_city')
            .limit(limit).offset(page * limit - limit)
            .then(citys => res.json({ data: citys, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('citys')
            .select('id', 'cod_city', 'name_city')
            .where({ id: req.params.id })
            .first()
            .then(city => res.json(city))
            .catch(err => res.status(500).send(err))
    }


    return { get, getById }
}