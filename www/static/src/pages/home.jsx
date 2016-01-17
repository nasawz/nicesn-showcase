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

let filters = ['All','Demo3',
'Demo4',
'Demo5']
let currFilter = 'All'
let filter_data = {
  filters:filters,
  currFilter:currFilter
}

const Home = React.createClass({
  componentDidMount: function() {
  },
  render() {
    return (
      <div>
        <Navigation logo={logoObj} mode='dark' menus={menus} langs={langs} search={true}>Navigation</Navigation>
        <div className="main-container">
          <Projects filter_data={filter_data} mode="dark"/>
        </div>
      </div>

      )
  }
})

export default Home
