const User = require('./User');
const Post = require('./Post');

// this connects User.id to Post.user_id
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };