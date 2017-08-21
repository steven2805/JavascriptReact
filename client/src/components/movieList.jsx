import React from 'react';



class Listing extends React.Component {
  constructor() {
    super(); 
  }

  render(){
    return(
      <div>
        {
          this.props.blablabla.map((item, index)=>(
            <div className="item" key={index}>
            <a href={item.link} target="_blank">
            {item.title}
            </a>
            </div>

          ))
        }
        
      </div>
    )
  }
}

export default Listing