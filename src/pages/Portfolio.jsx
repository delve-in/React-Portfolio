function Portfolio(){
    return (
        <div className="flex" >
            <div className="projects">
                
                <img className="logo" src="../../public/Movie.jpg"></img>
                <div className="card" id="card1">
                <a href="https://movie-hub-1-d42d63ce0a83.herokuapp.com/" target="_blank"><h2 className="title" id="title1">MovieHub</h2></a>
                <a href="https://github.com/delve-in/MovieHub" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                </div>
                </div>
                <div className="projects">
                <img className="logo" src="../../public/Blog.jpg"></img>
                <div className="card" id="card2">
                <a href="https://tech-blog-one-1c4d62235e25.herokuapp.com/" target="_blank"><h2 className="title" id="title2">Tech Blog</h2></a>
                <a href="https://github.com/delve-in/Tech-Blog" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                
                </div>
                </div>
                <div className="projects">
                <img className="logo" src="../../public/Text.jpg"></img>
                <div className="card" id="card3">
                <a href="https://ja-te-c18bdb67d9b0.herokuapp.com/" target="_blank"><h2 className="title" id="title3">Text Editor</h2></a>
                <a href="https://github.com/delve-in/JA-Text-Editor" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                </div>
                </div>
                <div className="projects">
                <img className="logo" src="../../public/Quiz.jpg"></img>
                <div className="card" id="card4">
                <a href="https://delve-in.github.io/Multiple-Choice-Quiz/" target="_blank"><h2 className="title" id="title4">Multiple Choice Quiz</h2></a>
                <a href="https://github.com/delve-in/Multiple-Choice-Quiz" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                </div>
                </div>
                <div className="projects">
                <img className="logo" src="../../public/Pass.jpg"></img>
                <div className="card" id="card5">
                <a href="https://delve-in.github.io/Password-Generator/" target="_blank"><h2 className="title" id="title5">Password Generator</h2></a>
                <a href="https://github.com/delve-in/Password-Generator" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                </div>
                </div>
                <div className="projects">
                <img className="logo" src="../../public/Weather.jpg"></img>
                <div className="card" id="card6">
                <a href="https://delve-in.github.io/Weather-Forecast/" target="_blank"><h2 className="title" id="title6">Weather Forecast</h2></a>
                <a href="https://github.com/delve-in/Weather-Forecast" target="_blank"><img className="gimg" src="../../public/github.png"></img></a>
                </div>
                </div>
            
        </div>
    )
}

export default Portfolio;