var express = require('express');
var router = express.Router();
const {getAllPinsWithUsers, getAllPins, getSinglePin, editPin, addPin, deletePin} = require ('../db/queries/pinsq')

router.get('/', getAllPinsWithUsers)
router.get('/', getAllPins)

router.get('/:id', getSinglePin)
router.patch('/:id', editPin)
router.post('/', addPin)
router.delete('/:id', deletePin)

module.exports = router;