import React from 'react'; 
import ReactDOM from 'react-dom';
import Feedback from "../Feedback/Feedback";
import Thankyou from "../thankyou/Thankyou";
import Analysis from "../analysis/Analysis";
import "../app/App.css"

// Message Component 
function Display(props) 
{ 
	if (props.isScreen==="thankyou") 
		return (
    <Thankyou></Thankyou>
    ); 
	else if(props.isScreen==="feedback")
		return <Feedback></Feedback>
	
	else if(props.isScreen==="analysis")
			return <Analysis></Analysis>
} 

// Login Component 
function Feedbacksubmit(props) 
{ 
return( 
  
		<button onClick = {props.clickFunc}> 
			submit feedback 
		</button> 
	); 
} 

// Logout Component 
function Submitted(props) 
{ 
	return( 
		<button onClick = {props.clickFunc}> 
			Show Overview 
		</button> 
	); 
} 
function AnalysisPage(props)
{
	return(
		<button >
			close
		</button>
	)
}

// Parent Homepage Component 
class App extends React.Component{ 

	constructor(props) 
	{ 
		super(props); 

		//this.state = {isScreen : true}; 
		//this.state = {isScreen : "feedback"}
		this.state = {isScreen : "analysis"}

		this.ifSubmitClicked = this.ifSubmitClicked.bind(this); 
		this.ifOverviewClicked = this.ifOverviewClicked.bind(this); 
	} 

	ifSubmitClicked() 
	{ 
		//this.setState({isScreen : false}); 
		this.setState({isScreen:"thankyou"})
	} 

	ifOverviewClicked() 
	{ 
		//this.setState({isScreen : true}); 
		this.setState({isScreen:"analysis"})
	} 

	render(){ 

		return( 

			<div> 

				<Display isScreen = {this.state.isScreen}/> 
				
				{ 
					/*(this.state.isScreen=="feedback")?( 
						<Feedbacksubmit clickFunc = {this.ifSubmitClicked} /> 
						
						) : ( 
						<Submitted clickFunc = {this.ifOverviewClicked} /> 
						
						) */
					(this.state.isScreen==="feedback")?( 
						<Feedbacksubmit clickFunc = {this.ifSubmitClicked} /> 
						) : ( (this.state.isScreen==="thankyou")?(
						<Submitted clickFunc = {this.ifOverviewClicked} /> 
						):(
							<AnalysisPage/>
						)
						)
						
					


				} 

			</div> 
				
			); 
	} 
} 

ReactDOM.render( 
	<App />, 
	document.getElementById('root') 
); 

export default App;
