var express = require('express');
var router = express.Router();
const {getAllBoardsWithPins, getAllBoards, getSingleBoard, editBoard, addBoard, deleteBoard} = require ('../db/queries/boardsq')

router.get('/', getAllBoards)
router.get('/:id', getSingleBoard)
router.patch('/:id', editBoard)
router.post('/', addBoard)
router.delete('/:id', deleteBoard)

module.exports = router;