const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id :1,
        title: 'Giddy Up',
        body: 'I done giddied up!',
        created_at: new Date(),
        comments:[{}, {}, {}, {}, {}],
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;