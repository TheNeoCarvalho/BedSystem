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
        .then(_ => res.status(200).send({'200': 'successfully changed'}))
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
    // .join('countrys', 'hospitals.id_country', 'countrys.id')
    // .join('states', 'hospitals.id_state', 'states.id')
    // .join('citys', 'hospitals.id_city', 'citys.id')
    // .select('hospitals.id', 'hospitals.name_hospital as hospital', 'countrys.name_country as country',
    // 'states.name_state as state', 'citys.name_city as city', 'hospitals.latitude', 'hospitals.longitude'
    const get = (req, res) => {
        app.db('beds')
        .leftJoin('bedhistorys', 'bedhistorys.id_bed', 'beds.id')
        .join('hospitals', 'hospitals.id', 'beds.id_hospital')
        .select('beds.id', 'hospitals.name_hospital as hospital','beds.floor',
        'beds.livingroom', 'beds.allah', 'beds.bed', 'beds.isolation', 'bedhistorys.occupation',  
        ).orderBy('bedhistorys.id', 'desc')
        .then(bed => res.json(bed))
        .catch(err => res.status(500).send(err))
    }
    
    const getById = (req, res) => {
        const bed = { ...req.body}
        // app.db({a: 'articles', u: 'users'})
        // .select('a.id', 'a.name', 'a.description', 'a.imageUrl', { author: 'u.name' })
        // .limit(limit).offset(page * limit - limit)
        // .whereRaw('?? = ??', ['u.id', 'a.userId'])
        // .whereIn('categoryId', ids)
        // .orderBy('a.id', 'desc')
        // .then(articles => res.json(articles))
        // .catch(err => res.status(500).send(err))
        app.db('beds')
            // .select({ h: 'h.name_hospital'})
            .select('beds.id', 'hospitals.name_hospital as hospital','beds.floor',
            'beds.livingroom', 'beds.allah', 'beds.bed', 'beds.isolation', 'bedhistorys.occupation',  
            )

        .join('bedhistorys', 'bedhistorys.id_bed', 'beds.id')
        .join('hospitals', 'hospitals.id', 'beds.id_hospital')
        .where({ 'beds.id': req.params.id })
        // .orderBy('bedhistorys.id', 'desc')
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