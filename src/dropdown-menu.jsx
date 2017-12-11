import React from 'react';

const noSelectionString = 'Select...';

// TODO: Add proptypes
export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.changeSelectedMenuItem = this.changeSelectedMenuItem.bind(this);
    this.state = {
      isCollapsed: false,
      selectedMenuItem: noSelectionString,
    };
  }

  toggleMenu() {
    this.setState({ toggleMenu: !this.state.isCollapsed });
  }

  changeSelectedMenuItem(newMenuItem) {
    this.setState({ selectedMenuItem: newMenuItem });
  }

  render() {
    // Populate the dropdown menu from props, the noSelection option first
    let menuItems = [noSelectionString];
    this.props.menuItems.forEach(menuItem => menuItems.push(menuItem));

    // Define collapsed menu
    // TODO: Figure out how to make this work for specifiable classNames
    const collapsedMenu = (
      <div className="chart-controls__menu-item--selected">
        <ul className="chart-controls__menu--selected">
          <li className="chart-controls__menu-item--selected">
            {this.state.selectedMenuItem}
          </li>
        </ul>
      </div>
    );

    const expandedMenu = (
      <div className="chart-controls__menu">
        <ul className="chart-controls__menu">
          { this.props.menuItems.forEach((menuItem) => {
            <li className="chart-controls__menu-item" >
              menuItem
            </li>
          })}
        </ul>
      </div>
    );
    return (

    );
  }
}
