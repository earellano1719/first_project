const { db } = require('../index.js')



const getAllUserPins = (req, res, next) => {
    let userId = req.params.name
    db.any('SELECT * FROM users JOIN pins ON (users.id=user_id) WHERE username=$1 ORDER BY pins.id DESC', [userId])
    .then((pins) => {
        res.status(200).json({
            status: 'success',
            pins: pins,
            message: 'all users with pins'
        })
    })
    .catch((err) => {
        next(err)
    })
}

const getAllPins = (req, res, next) => {
    db.any('SELECT * FROM pins')
    .then(pins => {
        res.status(200).json({
            status: 'success',
            pins: pins,
            message: 'all pins'
        })
    })
    .catch((err) => {
        next(err)
    })
}

const getSinglePin = (req, res, next) => {
    let pinId = parseInt(req.params.id)
    db.one('SELECT * FROM pins WHERE id=$1', [pinId])
    .then(pin => {
        res.status(200).json({
            status: 'success',
            pin: pin,
            message: 'single pin'
        })
    })
    .catch(err => {
        next(err)
    })
}

const editPin = (req, res, next) => {
    db.none('UPDATE pins SET user_id = ${user_id}, board_id = ${board_id}, url = ${url}, caption = ${caption} WHERE id = ${id}', {
        id: parseInt(req.params.id),
        user_id: req.body.user_id,
        title: req.body.title
    })
    .then(() => {
        res.status(200)
        .json({
            status: "success",
            message: "updated pin"
        })
    })
    .catch((err) => {
        return next(err)
    })
}

const addPin = (req, res, next) => {
    db.none('INSERT INTO pins (user_id, board_id, url, caption) VALUES (${user_id}, ${board_id}, ${url}, ${caption})', req.body)
    .then(() => {
        res.status(200).json({
            status: 'success',
            message: 'added a pin'
        })
    })
    .catch(err => {
        next(err)
    })
}

const deletePin = (req, res, next) => {
    let pinId = parseInt(req.params.id)
    db.none('DELETE FROM pins WHERE id=$1', pinId)
    .then(() => {
        res.status(200).json({
            status: success,
            message: 'you have deleted a pin'
        })
    })
    .catch((err) => {
        next(err)
    })
}

module.exports = { getAllUserPins, getAllPins, getSinglePin, editPin, addPin, deletePin }