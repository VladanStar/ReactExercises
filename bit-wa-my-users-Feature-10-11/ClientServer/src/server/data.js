const Post = require('./post')

const loremIpsum = require('lorem-ipsum')


const output = () => loremIpsum({
    count: 3,
    units: 'words'
});

const intro = () => loremIpsum({
    count: 2,
    units: 'words'
});

const getFakeData = (count) => {
    const posts = [];
    for (let i = 0; i < count; i++) {
        const post = new Post(i, output(), intro())
        posts.push(post)
    }
    return posts;
}

module.exports = getFakeData;
