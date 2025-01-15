import {createServer} from 'http';
const PORT =8000;

const users = [
    {id: 1, name :'John Doe'},
    {id: 2, name :'mania Doe'},
    {id: 3, name :'Kwesi Doe'},
    {id: 4, name :'ama Doe'},
];

const server = createServer((req,res)=>{
    if (req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end;
    }
})



server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})