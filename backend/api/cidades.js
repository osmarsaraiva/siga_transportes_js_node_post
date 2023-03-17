module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation


    const save = async (req, res) => {
        const user = { ...req.body}
        if(req.params.id) cidades.id = req.params.id
       
        try{
            existsOrError(cidades.cidade, 'Nome não informado')
            existsOrError(cidades.estado, 'Nome não informado')


            const userFromDB = await app.db('cidades')
                .where({ cidade: cidades.cidade }).first()
            if(!cidades.id){
                notExistsOrError(userFromDB, 'Cidade já cadastrada')
            }
        } catch(msg){
            return res.status(400).send(msg)
        }

if(cidades.id){//teste
    app.db('cidades')
        .update(cidades)
        .where({ id: cidades.id })
        .then(_ => res.status(204).send())//tudo certo
        .catch(err => res.status(500).send(err))//erro lado servidor
}else{
    app.db('cidades')
        .insert(cidades)
        .then(__ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    }
    
}

//lista de cidades
const get = (req, res) =>{
    app.db('cidades')
        .select('id', 'cidade', 'estado')
        .then(cidades=> res.json(cidade))
        .catch(err => res.status(500).send(err))

}

const getById = (req, res) =>{
    app.db('cidades')
        .select('id', 'cidade', 'estado')
        .where({ id: req.params.id })
        .first()
        .then(cidades => res.json(cidades))
        .catch(err => res.status(500).send(err))

}


    return { save, get, getById}
}