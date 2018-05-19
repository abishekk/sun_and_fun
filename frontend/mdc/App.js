import React from 'react';
import TopAppBar from './TopAppBar';
import './app.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

export default class App extends React.Component {
  state = {
    isFixed: false,
    isShort: false,
    isRtl: false,
    isProminent: false,
    isAlwaysCollapsed: false,
    noActionItems: false,
    shouldReinit: false,
    title: 'Abi\'s CA'
  };

  componentDidUpdate(prevProps, prevState) {
    const shouldReinit =
      prevState.isShort !== this.state.isShort ||
      prevState.isFixed !== this.state.isFixed ||
      prevState.noActionItems !== this.state.noActionItems;

    // This is a hack: this to teardown and remount the top app bar to
    // show the different variants. No one should need to do this except
    // in a demo page.
    if (shouldReinit) {
      this.setState({shouldReinit: true});
      setTimeout(() => {
        this.setState({shouldReinit: false});
      });
    }
  }

  get actionItems() {
    const {isShort, noActionItems} = this.state;
    if (noActionItems) {
      return null;
    }

    const actionItems = [
      <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' alt='Bookmark this page'>bookmark</a>,
    ];

    const LoginLink = props => <Link to="/login" {...props} />

    // Top App Bar Spec allows for only 1 action item with the short variant
    if (!isShort) {
      [].push.apply(actionItems, [
        // <Button variant="raised" color="secondary" component={LoginLink}>Hello World</Button>,
        <a href='/login' className='login-style-button' aria-label='Download' alt='Login'>Login</a>,
        <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' alt='Print this page'>print</a>,
      ]);
    }
    return actionItems;
  }

  render() {
    const {isFixed, isShort, isRtl, isProminent, isAlwaysCollapsed, shouldReinit, title} = this.state;

    return (
      <section
        dir={isRtl ? 'rtl' : 'ltr'}
        className='mdc-typography'>
        {
          shouldReinit ? null :
          <TopAppBar
            navIcon={this.renderNavIcon()}
            short={isShort}
            prominent={isProminent}
            fixed={isFixed}
            alwaysCollapsed={isAlwaysCollapsed}
            title={title}
            actionItems={this.actionItems}
          />
        }
        <div className='demo-text-container'>
          {this.renderDemoParagraphs()}
        </div>

        {this.renderControls()}
      </section>
    );
  }

  renderDemoParagraphs() {
    const createDemoParagraph = (key) => (<p className='demo-paragraph' key={key}>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
      vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. Aenean ultricies mi vitae est.
    </p>);
    const size = 20;
    const tags = Array.from(Array(size).keys());
    return tags.map((tag, key) => createDemoParagraph(key));
  }

  renderControls() {
    const {isShort, isProminent, isAlwaysCollapsed} = this.state;

    const checkboxes = [{
      title: 'Fixed',
      attr: 'isFixed',
    }, {
      title: 'Short',
      attr: 'isShort',
      disabled: isProminent || isAlwaysCollapsed,
    }, {
      title: 'Always Collapsed',
      attr: 'isAlwaysCollapsed',
      disabled: !isShort,
    }, {
      title: 'RTL',
      attr: 'isRtl',
    }, {
      title: 'Prominent',
      attr: 'isProminent',
      disabled: isShort,
    }, {
      title: 'No Action Items',
      attr: 'noActionItems',
    }];

    return (
      <div className='demo-controls-box'>
        <h3 className='mdc-typography--title'>
          Controls
        </h3>

        {checkboxes.map((checkbox, key) => this.renderControlCheckbox(checkbox, key))}
      </div>
    );
  }

  renderControlCheckbox({title, attr, disabled = false}, key) {
    const labelId = `${title}-${key}`;
    const shadowed = `mdc-elevation-transition mdc-elevation--z${key}`;
    return (
      <div key={key}
        className={`demo-control-checkbox ${disabled ? 'demo-control-checkbox--disabled' : ''}`}>
        <label htmlFor={labelId}
          className={`demo-control-checkbox__label${key}`}>
          {title}
        </label>
        <input type='checkbox'
          disabled={disabled}
          id={labelId}
          datakey={title}
          onClick={(evt) => {
            var nextTitle = this.state.title;
            const buttonTitle = title;
            
            if (evt.target.checked) {
              nextTitle = buttonTitle;
            } else {
              if (nextTitle == buttonTitle) {
                nextTitle = 'Default title';
              }
            }
            this.setState({[attr]: evt.target.checked, title: nextTitle});
          }} />
      </div>
    );
  }

  renderNavIcon() {
    return (
      <a
        className='material-icons mdc-top-app-bar__navigation-icon'
        href='#'
        onClick={() => {console.log('hey')}}>
        menu
      </a>
    );
  }

}
