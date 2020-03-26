import React from "react";

class MemeGenerator extends React.Component{
    constructor(){
        super();

        this.state = {
            topText: "",
            bottomText: "",
            randomImageUrl: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this);

        this.genPic = this.genPic.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(r => r.json())
            .then(r => {
                this.setState({
                    allMemeImgs: r.data.memes
                })
            });
    }

    handleChange(e){
        let {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    genPic(e){
        e.preventDefault();

        let num = Math.floor(Math.random() * this.state.allMemeImgs.length);

        let img = this.state.allMemeImgs[num].url;

        this.setState({
            randomImageUrl: img
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.genPic}>
                    <input type="text" name="topText" onChange={this.handleChange} value={this.state.topText}/>
                    <input type="text" name="bottomText" onChange={this.handleChange} value={this.state.bottomText}/>
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImageUrl} alt="Img"/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;