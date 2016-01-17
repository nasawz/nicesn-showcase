import React, { PropTypes } from 'react'

import Button from "../components/Button.js";
import Filters from "../components/Filters.js";
import Loader from "../components/Loader.js";
import Navigation from "../components/Navigation.js";
import Projects from "../components/Projects.js";

let logo_dark_path = require("copy?src!../res/logo-dark.png")
let logo_light_path = require("copy?src!../res/logo-light.png")

let logoObj = {
  name: "nicesn",
  dark_path: logo_dark_path,
  light_path: logo_light_path
}

let menus = [
  {
    title: 'Home',
    label: '',
    icon: '',
    route: '/',
    subs: {
      type: 'mega',
      datas: [
        [{
          title: 'Concepts'
        },
          {
            title: 'Adventure',
            route: '/',
            icon: '',
            label: ''
          }], [
          {
            title: 'Concepts'
          },
          {
            title: 'Adventure',
            route: '/',
            icon: '',
            label: 'New!'
          }
        ]
      ]
    }
  }, {
    title: 'Profile',
    label: '',
    icon: '',
    route: '/',
    subs: {
      type: 'normal',
      datas: [
        {
          title: 'Contained',
          route: '/',
          icon: '',
          label: '',
          subs: [
            {
              title: 'Adventure',
              route: '/',
              icon: '',
              label: ''
            },
            {
              title: 'Adventure',
              route: '/',
              icon: '',
              label: ''
            }
          ]
        }, {
          title: 'Contained',
          route: '/',
          icon: '',
          label: ''
        }
      ]
    }
  }
]
let langs = [{
  title: '中文',
  curr: true
}, {
  title: 'English',
  curr: false
}
]

let filters = ['全部','美女',
'风光',
'生态']
let currFilter = '全部'
let filter_data = {
  filters:filters,
  currFilter:currFilter
}

let projects = [
  {
    title:'改色车女郎',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/890/89/35577676_1500.jpg'
  },
  {
    title:'改色车女郎',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/890/89/35577681_1500.jpg'
  },
  {
    title:'改色车女郎',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/890/89/35577682_1500.jpg'
  },
  {
    title:'改色车女郎',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/890/89/35577685_1500.jpg'
  },
  {
    title:'小小私房',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/888/18/35483553_1500.jpg'
  },
  {
    title:'小小私房',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/888/18/35483554_1500.jpg'
  },
  {
    title:'小小私房',
    filters:'美女',
    url:'http://img3.fengniao.com/forum/attachpics/888/18/35483555_1500.jpg'
  },
  {
    title:'冰雪坝上',
    filters:'风光',
    url:'http://img3.fengniao.com/forum/attachpics/890/82/35576357_1500.jpg'
  },
  {
    title:'冰雪坝上',
    filters:'风光',
    url:'http://img3.fengniao.com/forum/attachpics/890/82/35576359_1500.jpg'
  },
  {
    title:'冰雪坝上',
    filters:'风光',
    url:'http://img3.fengniao.com/forum/attachpics/890/82/35576360_1500.jpg'
  },
  {
    title:'平泉湖',
    filters:'风光',
    url:'http://img3.fengniao.com/forum/attachpics/890/33/35566457_1500.jpg'
  },
  {
    title:'昆明翠湖的荷花',
    filters:'生态',
    url:'http://img3.fengniao.com/forum/attachpics/890/101/35580160_1500.jpg'
  },
  {
    title:'昆明翠湖的荷花',
    filters:'生态',
    url:'http://img3.fengniao.com/forum/attachpics/890/101/35580162_1500.jpg'
  },
  {
    title:'昆明翠湖的荷花',
    filters:'生态',
    url:'http://img3.fengniao.com/forum/attachpics/890/101/35580167_1500.jpg'
  },
]

const Home = React.createClass({
  componentDidMount: function() {
  },
  render() {
    return (
      <div>
        <Navigation logo={logoObj} mode='dark' menus={menus} langs={langs} search={true}>Navigation</Navigation>
        <div className="main-container">
          <Projects projects={projects} filter_data={filter_data} mode="dark"/>
        </div>
      </div>

      )
  }
})

export default Home
