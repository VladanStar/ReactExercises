import {
    Post
} from './post.js';

const init = () => {
    const URL = "http://127.0.0.1:3000/";

    fetch(URL).then((response) => {
            return response.json();
        })
        .then((postData) => {
            return postData.map((post) => {
                const {
                    id,
                    title,
                    intro
                } = post;
                console.log();

                return new Post(id, title, intro);
            })

        }).then((posts) => {
            postList(posts)
        })




    const createPost = (post) => {

        return `
        <div class="row">
        <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
            <span class="card-title">${post.title}</span>
            <p>${post.intro}.</p>
            </div>

        </div>
        </div>
    </div>
        `
    }

    const postList = (posts) => {
        const row = document.querySelector('.row');
        let content = '';
        posts.forEach((post) => {
            content += createPost(post)

        })
        row.innerHTML = content;

    }
}

export {
    init
}