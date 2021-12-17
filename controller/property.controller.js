const Property = require('../models').Property;

exports.list_property = (req, res, next) =>{
  // Cherche dans la bdd toutes les entrees du modele Category / asynchrone
  // SELECT * FROM Categories 
  // {} parametre vide 
  Property.findAll({})
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.add_property = (req, res, next) => {
    Property.create(req.body)
  .then( data => {
    res.status(201).json({
      message: 'Property created',
      data: data
    })
  })
  .catch(err => console.log(err))
}

exports.delete_property = (req,res, next) => {
    Property.destroy({
    where:{
      id: req.params.id
    }
  })
  .then((data) => {
    if(data == 0){
      res.status(200).json({message: 'No data to delete'});
    }
    res.status(204).end();
  })
  .catch(err => console.log(err))
}

exports.edit_property = (req, res, next) => {
    Property.update(req.body,{
    where:{
      id: req.params.id
    }
  })
  .then( () => {
    res.status(200).json({
      message: 'Property edited'
    })
  })
  .catch(err => console.log(err))
}

exports.detail_property = (req, res, next) => {
    Property.findByPk(req.params.id)
  .then( data => {
    res.status(200).json({
      message: 'Property detail',
      data: data
    })
  })
  .catch(err => console.log(err))
}