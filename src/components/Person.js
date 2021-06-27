import React from 'react'
class Person extends React.Component{
    constructor(props){
        super(props)
        this.state={
            personName:"DEFULT"
        }
    }
    getPerson(){
       setTimeout(()=>{
           this.setState({
               personName:"XIAOMING"
           })
       },0)
    }
    render(){
        return <div>PERSON:{this.state.personName}</div>
    }
    componentDidMount(){
        this.getPerson()
    }
}
export default Person