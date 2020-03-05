import React, { Component} from 'react';
class Analysis extends Component{

    state ={
        "today": [ { "displayName" :  "" , "value" : "" }, { "displayName" :  "" , "value" : "" } , { "displayName" :  "" , "value" : "" }],
        "thisWeek": [ { "displayName" :  "" , "value" : "" }, { "displayName" :  "" , "value" : "" } , { "displayName" :  "" , "value" : "" }]
    
    }
    componentDidMount()
{
    this.getData();
}


    getData(){
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load' , () => {
            var fb=JSON.parse(xhr.responseText)
            this.setState({today: fb[0].today})
            console.log(this.state.today)
            this.setState({thisWeek: fb[0].thisWeek})
            console.log(this.state.today)
            
        })
        xhr.open('GET' ,'http://localhost:4000/overview')
        xhr.send()
    
    }

    render(){
        return(
            <div>
                <p>
                    user Experience 
                </p>
                <p>
                    today
                </p>
                <p>
                {JSON.stringify(this.state.today)}

                </p>
                <p>
                    this week
                </p>
                <p>
                    {JSON.stringify(this.state.thisWeek)}
                </p>
            </div>

        );
    }
}
export default Analysis;