import React from 'react';


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: props.exp ? props.exp.description : "",
            amount: props.exp ? props.exp.amount : "",
            error: "",
            button: props.exp ? "Edit" : "Add"
    
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    }
    onAmountChange = (e)=>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d*(\.*\d{0,2})$/)){
            this.setState(()=>({amount}));
        }
        
    }
    onSubmit = (e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: "Please provide info"}));
        }else{
            this.setState(()=>({error: ""}));
            
            this.props.onSubmit({
                description: this.state.description,
                amount: this.state.amount
            });
        }
    }
    render(){
        return (
        <div>
            <p>Add Expense Form</p>
            <p>{this.state.error}</p>
            <form onSubmit={this.onSubmit}>
                <input value={this.state.description} type="text" placeholder="description" autoFocus
                onChange={this.onDescriptionChange}
                />
                <input type="float" placeholder="amount" value={this.state.amount}
                onChange = {this.onAmountChange}
                />
    <button type="submit">{this.state.button}</button>
            </form>
        </div>);
    }
}




