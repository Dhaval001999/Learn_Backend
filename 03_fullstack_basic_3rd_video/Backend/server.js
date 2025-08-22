import express from 'express'; // java script na andar 2 rit che files ne import karvana // 1:- basic che "type":commonjs karine ane 2:- che "type": module karine jene module js kehvayy // atyare javascript na code bahu badhi file ni andar che. to koik vaar apade ane synchronous thi lavanu hoy ane koik vaar asynchronous thi lavanu hoy che // atyre atalu samji lo k "commonjs" use karvu hoy to "require" vadu statement levu pade ane aa synchronously work kare // ane aa "module" use karvu hoy to "import" vadu statement levu pade ane aa asynchronously work kare

const app = express();

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

// get a list of 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes =[
        {
            id: 1,
            title: 'A joke',
            content: 'This a Joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This a Another joke'
        }, 
        {
            id: 3,
            title: 'A Third joke',
            content: 'This A Third joke'
        },
        {
            id: 4,
            title: 'A Fourth joke',
            content: 'This A Fourth joke'
        },
        {
            id: 5,
            title: 'A Fifth joke',
            content: 'This A Fifth joke'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000; // jyare "app" production ma jaay tyare ane ".env" karine PORT apvu pade

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});