const db = require('../db/db.js')


const index =  (req, res) => {
    
    let markup = ''


    db.forEach(post => {
        const {title, slug, content, image, tags} = post;

        markup += `
        <ul>
            <li>
                <h2>${title}</h2>
                <h3>${slug}</h3>
                <h4>${content}</h4>
                <img src="/img/${image}"</img> <br>
                <span>${tags}</span>
            </li>
          </ul>  
        `
        
    }) 
    res.send(markup)
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

module.exports = {
    index,
    show
}