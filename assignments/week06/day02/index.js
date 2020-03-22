var express = require('express');
var hbs = require('hbs');
var app = express();

app.use(express.static('public'));
app.set('view-engine', 'hbs')
hbs.registerHelper('is', function (value, string, options) {
    if (value == string)
        return options.fn(this);
    else {
        return options.inverse(this);
    }
})

var user = {
    Name: "Gaurav Verma",
    Email: "gauravve1@gmail.com",
    Social:[
                {
                link: "https://www.facebook.com/carelessgaurav",
                icon: "https://i.ibb.co/tpQFD0c/facebook-3-64.png"
                },
                {
                link: "https://twitter.com/Ddegnified",
                icon: "https://i.ibb.co/K7cR47b/twitter-3-64-1.png"    
                },
                {
                link: "https://www.linkedin.com/in/gaurav-verma-b7047418",
                icon: "https://i.ibb.co/9tdScQk/linkedin-3-64.png"
                } 
            ],
    About: "Hello, This is Gaurav, Residing in Lucknow. A tech enthusiast, aged 26.",
    Movies:[
    {
        movie:"The Pursuit of Happyness",
        imdb: "https://www.imdb.com/title/tt0454921/",
        trailer:"https://www.imdb.com/title/tt0454921/videoplayer/vi1413719065?ref_=tt_ov_vi"
    },
    {
        movie:"A Few Good Men",
        imdb: "https://www.imdb.com/title/tt0104257/",
        trailer:"https://www.imdb.com/title/tt0104257/videoplayer/vi2142503193?ref_=tt_ov_vi"
    },
    {
        movie:"Good Will Hunting",
        imdb: "https://www.imdb.com/title/tt0119217/",
        trailer:"https://www.imdb.com/title/tt0119217/videoplayer/vi1575984665?ref_=tt_ov_vi"
    },
    {
        movie:"The Shawshank Redemption",
        imdb: "https://www.imdb.com/title/tt0111161/",
        trailer:"https://www.imdb.com/title/tt0111161/videoplayer/vi3877612057?ref_=tt_ov_vi"
    },
    {
        movie:"Inception",
        imdb: "https://www.imdb.com/title/tt1375666/",
        trailer:"https://www.imdb.com/title/tt1375666/videoplayer/vi4219471385?ref_=tt_ov_vi"
    }
]
}

app.get('/', (req, res) => {
    res.render('landing.hbs', {
        title: 'Home',

    })
})
    app.get('/about', (req, res) => {
        res.render('about.hbs', {
            title: 'About',
            profileArray: user

        })
    })
        app.get('/social', (req, res) => {
            res.render('social.hbs', {
                title: 'Social',
								profileArray: user

            })

        })

        app.listen(3000);