const express = require('express');
const router = express.Router();

const property_controller = require('../controller/property.controller');

router.get('/', property_controller.list_property);
router.get('/:id', property_controller.detail_property);
router.post('/', property_controller.add_property);
router.put('/:id', property_controller.edit_property);
router.delete('/:id', property_controller.delete_property);