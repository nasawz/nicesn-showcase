'use strict';

import Base from './base.js';

export default class extends Base {
  init(http){
    super.init(http); //调用父类的init方法
    console.log('web');
  }
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    console.log('indexAction');
    return this.display();
  }
}
