var express = require('express');
var router = express.Router();
const {getAllUserPins, getAllPins, getSinglePin, editPin, addPin, deletePin} = require ('../db/queries/pinsq')

router.get('/:name', getAllUserPins)
// router.get('/', getAllPins)

router.get('/:id', getSinglePin)
router.patch('/:id', editPin)
router.post('/', addPin)
router.delete('/:id', deletePin)

module.exports = router;