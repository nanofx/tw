import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'React Twitter Embed',  
  url: '#',
  showStoriesPanel: false,
  showAddonPanel: false,
  addonPanelInRight: false,
  selectedAddonPanel: "Backgrounds",
  header: false, // Toggles display of header with component name and description
  inline: false, // Displays info inline vs click button to view
  source: false,
});

configure(() => require('../src/stories'), module);

