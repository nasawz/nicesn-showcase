import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import React from 'react';

const Logo = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType,
    //
    logoName: React.PropTypes.string,
    logo_light_path: React.PropTypes.string,
    logo_dark_path: React.PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      componentClass: 'a',
      logoName: 'Nicesn',
      logo_light_path: 'img/logo-light.png',
      logo_dark_path: 'img/logo-dark.png',
    };
  },
  render() {
    let ComponentClass = this.props.componentClass;
    let LogoName = this.props.logoName;
    return (
      <ComponentClass {...this.props} href="javascript:;">
        <img className="logo logo-light" alt={LogoName} src={this.props.logo_light_path} />
        <img className="logo logo-dark" alt={LogoName} src={this.props.logo_dark_path} />
      </ComponentClass>
      )
  }
})

export default Logo
