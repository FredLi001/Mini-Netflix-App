import React,{Component} from 'react';
import './listItem.css';

class ListItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {data} = this.props;
    return (
      <div className="sliderItem" id="show-image">
        <h3>{data.title}</h3>
        <img src={data.img} alt="img"/>
        <button onClick={
          this.props.remove.bind(this, data.id)
        }>Remove</button>
      </div>

    )
  }
}
export default ListItem
