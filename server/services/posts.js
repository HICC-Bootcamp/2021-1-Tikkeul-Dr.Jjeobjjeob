import {config} from '../config.js';
import * as userRepository from '../db/auth.js';
import * as postRepository from '../db/posts.js';

export async function write(req, res){
    const {title, text} = req.body;
    var image = null;
    if (req.file){
        image = req.file.filename;
    }
    const createdAt = new Date();
    const username = req.username;

    postRepository.createPost({
        title,
        text,
        image,
        createdAt,
        username
    });
    res.redirect('/');
}