import React,{Component} from 'react';
import './recommItem.css';

class RecommItem extends Component{
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
          this.props.add.bind(this, data.id)
        }>Add</button>
      </div>

    )
  }
}
export default RecommItem
