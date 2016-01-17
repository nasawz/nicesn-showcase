import classNames from 'classnames';
import React, { PropTypes } from 'react'

import Col from "./Col.js";

const Project = React.createClass({
  render() {
    return (
      <Col sm={6} md={3} className={classNames(this.props.className, "masonry-item project")}>
        <div className="image-tile inner-title hover-reveal text-center">
          <a href="javascript:;">
            <img alt="Pic" src={this.props.item.url} />
            <div className="title">
              <h5 className="uppercase mb0">{this.props.item.title}</h5>
              <span>{this.props.item.filters}</span>
            </div>
          </a>
        </div>
      </Col>
      )
  }
})

export default Project

//
// <div class="Col-md-3 col-sm-6 masonry-item project" data-filter="People">
//     <div class="image-tile inner-title hover-reveal text-center">
//         <a href="#">
//             <img alt="Pic" src="img/project-single-3.jpg" />
//             <div class="title">
//                 <h5 class="uppercase mb0">Pondering Blonde</h5>
//                 <span>People / Life</span>
//             </div>
//         </a>
//     </div>
// </div>
