import React , {Component} from 'react';
import emoji1 from "../images/images1.jpg";
import emoji2 from "../images/images2.jpg";
import emoji3 from "../images/images3.jpg";

class Feedback extends Component{
    state={
            "feedback":
            [
                { "displayName" : "" , "value": "" , "image": "" },
                { "displayName" : "" , "value": "" , "image": "" },
                { "displayName" : "" , "value": "" , "image": "" }
            ]
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load' , () => {
            var fb=JSON.parse(xhr.responseText)
            this.setState({feedback: fb})
            //console.log(this.state.feedback)
            
        })
        xhr.open('GET' ,'http://localhost:4000/feedback')
        xhr.send()
    }

    click(e){
        fetch('http://localhost:4000/feedbacksave', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            feedbackVal: e.target.value,
            })
        })
    }

    render(){

        
        return(
            <div>
                
                <img src={emoji1} alt={"excellent"}></img>
                <button onClick={this.click} value="good">{this.state.feedback[0].displayName}</button>
                <br></br>
                <img src={emoji2} alt={"average"}></img>
                <button onClick={this.click} value="normal">{this.state.feedback[1].displayName}</button>
                <br></br>
                <img src={emoji3} alt={"bad"}></img>
                <button onClick={this.click} value="bad">{this.state.feedback[2].displayName}</button>
                <br></br>  
            </div>
        );
    }
}
export default Feedback;