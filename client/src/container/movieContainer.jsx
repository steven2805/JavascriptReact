import React from 'react';
import Listing from '../components/movieList'
const sampleData = [
  { id: 1, title: "Detroid", link: 'http://www.imdb.com/title/tt5390504/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1N9M1Z0YH2XT4D51W6NH&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0'},
  { id: 2, title: "Logan Lucky", link:"http://www.imdb.com/title/tt5439796/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1N9M1Z0YH2XT4D51W6NH&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1"},
  { id: 3, title: "A Gentleman", link:"http://www.imdb.com/title/tt5613834/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1N9M1Z0YH2XT4D51W6NH&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t2"},
  { id: 4, title: "Rough Night", link: "http://www.imdb.com/title/tt4799050/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=1N9M1Z0YH2XT4D51W6NH&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t3"}
];


class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        data: sampleData
      }
  }



  render(){
    return(
      <div className="container">
        <div className="list">
        <h1>UK Opening this week</h1>
          <Listing blablabla={this.state.data} />
        </div>
      </div>
    )
  }
}

export default CommentContainer