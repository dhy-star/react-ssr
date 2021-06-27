import React,{Fragment} from 'react'
import logo from './logo.svg';
//import logo from './bg.jpeg'
import './reactindex.css'
import axios from 'axios'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    person:state
  }
}
// const mapDispatchToProps = (
//   dispatch,
//   ownProps
// ) => {
//   return {
//    getProps:()=>{
//      dispatch
//    }
//   };
// }

class ReactIndex extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: ""
    }
  }
  getPerson() {
    axios.get('/server/getperson').then(res => {
      this.setState({
        name: res.data.name,
        age: res.data.age
      })
    }).catch(err => {
      console.log('err', err)
    })
  }
 

  render() {
    const firstScreen = ()=>{
     return this.props.person.map((item,index)=><li    className="App-link" key={index}>
       <section >{`${item.name} -- ${item.value.person} --${item.value.age}`}</section>
     </li>)
    }
    return <Fragment>
       <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>
          React SSR
        </p>
        <a
          className="App-link"
          rel="noopener noreferrer"
        >
            PersonList
        </a>
        <ul>
        {
          firstScreen()
        }
        </ul>
       
      </header>
    </div>
    </Fragment>
   
  }
}
export default connect(mapStateToProps)(ReactIndex)