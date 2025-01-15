import { Router } from 'express';
const router = Router();

let posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
];


//get app posts
router.get('/', (req, res) => {
    res.json(posts);
});

//get a single post by id

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404).json({ message: 'Post not found' });
    } else {
        res.status(200).json(post);
    }

    //  res.json(posts.filter((post)=> post.id === parseInt(id)));
});


//new post 
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(201).json(posts);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,

    };

    if (!newPost.title) {
        return res.status(400).json( {msg:'No valid title'});
    }

    res.json(posts);
    posts.push(newPost);
})

//update

router.put('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if(!post){
        res.status(404).json({message:'Post not found'});
    }
   post.body = req.body.title;
   res.status(200).json(posts)
})


export default router;