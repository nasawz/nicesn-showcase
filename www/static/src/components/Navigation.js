import React, { PropTypes } from 'react'

import Logo from "./Logo.js";
import Menu from "./Menu.js";
import Module from "./Module.js";
import ModuleGroup from "./ModuleGroup.js";
import Nav from "./Nav.js";
import NavBar from "./NavBar.js";
import NavContainer from "./NavContainer.js";
import WidgetLangs from "./WidgetLangs.js";
import WidgetSearch from "./WidgetSearch.js";

const Navigation = React.createClass({
  renderSearch() {
    if (this.props.search) {
      return <WidgetSearch />
    }
  },
  renderLangs() {
    if (this.props.langs) {
      return <WidgetLangs langs={this.props.langs} />
    }
  },
  render() {
    return (
      <NavContainer>
        <Nav mode={this.props.mode}>
          <NavBar>
            <Module direction="left">
              <Logo
      logoName={this.props.logo.name}
      logo_light_path={this.props.logo.light_path}
      logo_dark_path={this.props.logo.dark_path}/>
            </Module>
            <ModuleGroup direction="right">
              <Module direction="left">
                <Menu menus={this.props.menus}/>
              </Module>
              { this.renderSearch() }
              { this.renderLangs() }
            </ModuleGroup>
          </NavBar>
        </Nav>
      </NavContainer>
      )
  }
})

export default Navigation
