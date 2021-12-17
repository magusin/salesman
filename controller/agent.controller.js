const Agent = require('../models').Agent;
const Property = require('../models').Property;
const { Op } = require('sequelize');

exports.list_agent = (req, res, next) =>{
  Agent.findAll({
    attributes: ['id','name'],
    include:[
      {
        model: Property,
        attributes: ['id', 'name']
      }
    ],
    order: [
      ['price','DESC'] //Tri ordre de prix decroissant
    ]
  })
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.list_property_agent = (req, res, next) =>{
  Agent.findAll({
    attributes: ['id','name'],
    include:[
      {
        model: Property,
        attributes: ['id', 'name'],
        where:{
          id: req.params.id
        }
      }
    ]
  })
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}


exports.search_agent = (req, res, next) =>{
  Agent.findAll({
    attributes: ['id','name'],
    include:[
      {
        model: Property,
        attributes: ['id', 'name'],
      }
    ],
    where: {
      name:{
        [Op.substring]: req.params.search
      }
    }
    // where:{
    //   [Op.or]:[
    //     {
    //       name:{
    //         [Op.like]: search
    //       }
    //     },
    //     {
    //       price: {
    //         [Op.gt]:50
    //       }
    //     }]
    // }
  })
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.delete_agent = (req,res, next) => {
  Agent.destroy({
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

exports.edit_agent = (req, res, next) => {
  Agent.update(req.body,{
    where:{
      id: req.params.id
    }
  })
  .then( () => {
    res.status(200).json({
      message: 'Agent edited'
    })
  })
  .catch(err => console.log(err))
}

