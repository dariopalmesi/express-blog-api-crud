const posts = require('../db/db.js')
const db = require('../db/db.js')
const fs = require('fs')


const index = (req, res) => {

    // let markup = ''


    // db.forEach(post => {
    //     const {title, slug, content, image, tags} = post;

    //     markup += `
    //     <ul>
    //         <li>
    //             <h2>${title}</h2>
    //             <h3>${slug}</h3>
    //             <h4>${content}</h4>
    //             <img src="/img/${image}"</img> <br>
    //             <span>${tags}</span>
    //         </li>
    //       </ul>  
    //     `

    // }) 
    // res.send(markup)
    res.json({
        data: posts,
        counter: posts.length
    })
}

const show = (req, res) => {

    const post = posts.find(post => post.slug === req.params.slug)
    if (!post) {
        return res.status(404).json({
            erroe: `404! Not found`
        })
    }
    return res.json({
        data: post
    })

}

const store = (req, res) => {


    const post = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(post)

    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)

    return res.status(201).json({
        status: 201,
        data: posts,
        counter: posts.length
    })

}

const update = (req, res) => {
    const slug = req.params.slug
    const post = posts.find(post => post.slug === req.params.slug)
    
    if (!post) {
        return res.status(404).json({
            erroe: `404! Not found`
        })
    }

     const postUpdate = {
         ...post,
         title: req.body.title || post.title,
         slug: req.body.slug || post.slug,
         content: req.body.content || post.content,
         image: req.body.image || post.image,
         tags: req.body.tags || post.tags
     }

     const postIndex = posts.findIndex(post => post.slug === slug) 

     posts[postIndex] = postUpdate

     fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`)

     return res.json({
        status: 200,
        data: postUpdate,
        
    })

}


module.exports = {
    index,
    show,
    store,
    update
}