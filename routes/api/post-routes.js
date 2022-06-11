const router = require('express').Router();
const { Post, User } = require('../../models/');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'body', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'body', 'title', 'created_at'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
        })
})

// expose changes to the router so we can test the routes
// this is an express.js command
module.exports = router;