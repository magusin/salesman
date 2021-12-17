const express = require('express');
const router = express.Router();

const agent_controller = require('../controller/agent.controller');

router.get('/', agent_controller.list_property);
router.get('/:id', agent_controller.detail_property);
router.get('/category/:id', agent_controller.list_category_property);
router.get('/search/:search', agent_controller.search_property);
router.post('/', agent_controller.add_property);
router.put('/:id', agent_controller.edit_property);
router.delete('/:id', agent_controller.delete_property);


module.exports = router;