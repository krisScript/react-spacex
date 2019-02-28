import React,{Component} from 'react'
import getData from './getData/getData'
const Context = React.createContext()

class Provider extends Component {
     state = {
       data:null,
     }

     componentDidMount = () => {
      getData()
      .then(data => {
        this.setState(prevState => ({
          data
        }))
      })
     }
     
    render() {
      return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
      )
    }
  }


export const Consumer = Context.Consumer
export default Provider