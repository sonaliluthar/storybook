import PropTypes from 'prop-types';
import React, { Component } from 'react';
import pick from 'lodash.pick';
import styled from 'react-emotion';

import { Header } from '@storybook/components';
import Stories from './stories_tree';
import TextFilter from './text_filter';
import lock from "../../../../../../../../DR/dr-react-storybook/src/auth/lock";

const Wrapper = styled('div')(
  ({ isMobileDevice }) =>
    isMobileDevice
      ? {
          padding: '10px',
        }
      : {
          padding: '10px 0 10px 10px',
        }
);

const storyProps = [
  'selectedKind',
  'selectedHierarchy',
  'selectedStory',
  'onSelectStory',
  'storyFilter',
  'sidebarAnimations',
];

function hierarchyContainsStories(storiesHierarchy) {
  return storiesHierarchy && storiesHierarchy.map.size > 0;
}

// This component gets a ref so it needs to be a class
// eslint-disable-next-line react/prefer-stateless-function
class StoriesPanel extends Component {

  handleLogout = () => {
    lock.logout({
      returnTo: "https://google.com"
    });
  }
  render() {
    const {
      isMobileDevice,
      name,
      onStoryFilter,
      openShortcutsHelp,
      shortcutOptions,
      storiesHierarchies,
      storyFilter,
      url,
    } = this.props;

    return (
      <div />
      // <Wrapper isMobileDevice={isMobileDevice}>
      //   <Header
      //     name="Sonali Luthar"
      //     url={url}
      //     openShortcutsHelp={shortcutOptions.enableShortcuts ? openShortcutsHelp : null}
      //     enableShortcutsHelp={shortcutOptions.enableShortcuts}
      //   />
      //   <TextFilter
      //     text={storyFilter}
      //     onClear={() => onStoryFilter('')}
      //     onChange={text => onStoryFilter(text)}
      //   />
      //   {storiesHierarchies.map(
      //     hierarchy =>
      //       hierarchyContainsStories(hierarchy) && (
      //         <Stories
      //           key={hierarchy.name}
      //           {...pick(this.props, storyProps)}
      //           storiesHierarchy={hierarchy}
      //         />
      //       )
      //   )}
      //   <button>Logout</button>
      // </Wrapper>
    );
  }
}

StoriesPanel.defaultProps = {
  storiesHierarchies: [],
  storyFilter: null,
  onStoryFilter: () => {},
  openShortcutsHelp: null,
  isMobileDevice: false,
  name: '',
  url: '',
  shortcutOptions: {
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    enableShortcuts: true,
  },
};

StoriesPanel.propTypes = {
  storiesHierarchies: PropTypes.arrayOf(
    PropTypes.shape({
      namespaces: PropTypes.arrayOf(PropTypes.string),
      name: PropTypes.string,
      map: PropTypes.object,
    })
  ),
  storyFilter: PropTypes.string,
  onStoryFilter: PropTypes.func,

  openShortcutsHelp: PropTypes.func,
  isMobileDevice: PropTypes.bool,
  name: PropTypes.string,
  url: PropTypes.string,
  shortcutOptions: PropTypes.shape({
    goFullScreen: PropTypes.bool,
    showStoriesPanel: PropTypes.bool,
    showAddonPanel: PropTypes.bool,
    showSearchBox: PropTypes.bool,
    addonPanelInRight: PropTypes.bool,
    enableShortcuts: PropTypes.bool,
  }),
};

export default StoriesPanel;
