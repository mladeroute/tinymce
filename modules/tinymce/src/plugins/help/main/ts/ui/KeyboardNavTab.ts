import { Dialog } from 'tinymce/core/api/ui/Ui';

// TODO: When we translate this, we should pull the HTML out into a HTML file, the way TBIO does it.
// That requires webpack and rollup changes though, so inlining it for now.
/* eslint-disable max-len */
const description = `<h1>Begin keyboard navigation</h1>

<dl>
  <dt>Focus the Menu bar</dt>
  <dd>Windows or Linux: Alt+F9</dd>
  <dd>macOS: &#x2325;F9</dd>
  <dt>Focus the Toolbar</dt>
  <dd>Windows or Linux: Alt+F10</dd>
  <dd>macOS: &#x2325;F10</dd>
  <dt>Focus the footer</dt>
  <dd>Windows or Linux: Alt+F11</dd>
  <dd>macOS: &#x2325;F11</dd>
  <dt>Focus a contextual toolbar</dt>
  <dd>Windows, Linux or macOS: Ctrl+F9
</dl>

<p>Navigation will start at the first UI item, which will be highlighted, or underlined in the case of the first item in the Footer element path.</p>


<h1>Navigate between UI sections</h1>

<p>To move from one UI section to the next, press <strong>Tab</strong>.</p>

<p>To move from one UI section to the previous, press <strong>Shift+Tab</strong>.</p>

<p>The <strong>Tab</strong> order of these UI sections is:

<ol>
<li>Menu bar</li>
<li>Each toolbar group</li>
<li>Sidebar</li>
<li>Element path in the footer</li>
<li>Word count toggle button in the footer</li>
<li>Branding link in the footer</li>
<li>Editor resize handle in the footer</li>
</ol>

<p>If a UI section is not present, it is skipped.</p>

<p>If the footer has keyboard navigation focus, and there is no visible sidebar, pressing <strong>Shift+Tab</strong> moves focus to the first toolbar group, not the last.

<h1>Navigate within UI sections</h1>

<p>To move from one UI element to the next, press the appropriate <strong>Arrow</strong> key.</p>

<p>The <strong>Left</strong> and <strong>Right</strong> arrow keys</p>

<ul>
<li>move between menus in the menu bar.</li>
<li>open a sub-menu in a menu.</li>
<li>move between buttons in a toolbar group.</li>
<li>move between items in the footer’s element path.</li>
</ul>

<p>The <strong>Down</strong> and <strong>Up</strong> arrow keys

<ul>
<li>move between menu items in a menu.</li>
<li>move between items in a toolbar pop-up menu.</li>
</ul>

<p><strong>Arrow</strong> keys cycle within the focused UI section.</p>

<p>To close an open menu, an open sub-menu, or an open pop-up menu, press the <strong>Esc</strong> key.

<p>If the current focus is at the ‘top’ of a particular UI section, pressing the <strong>Esc</strong> key also exits keyboard navigation entirely.</p>

<h1>Execute a menu item or toolbar button</h1>

<p>When the desired menu item or toolbar button is highlighted, press <strong>Return</strong>, <strong>Enter</strong>, or the <strong>Space bar</strong> to execute the item.

<h1>Navigate non-tabbed dialogs</h1>

<p>In non-tabbed dialogs, the first interactive component takes focus when the dialog opens.</p>

<p>Navigate between interactive dialog components by pressing <strong>Tab</strong> or <strong>Shift+Tab</strong>.</p>

<h1>Navigate tabbed dialogs</h1>

<p>In tabbed dialogs, the first button in the tab menu takes focus when the dialog opens.</p>

<p>Navigate between interactive components of this dialog tab by pressing <strong>Tab</strong> or <strong>Shift+Tab</strong>.</p>

<p>Switch to another dialog tab by giving the tab menu focus and then pressing the appropriate <strong>Arrow</strong> key to cycle through the available tabs.</p>`;
/* eslint-enable max-len */

const tab = (): Dialog.TabSpec & { name: string } => {
  const body: Dialog.BodyComponentSpec = {
    type: 'htmlpanel',
    presets: 'document',
    html: description
  };

  return {
    name: 'keyboardnav',
    title: 'Keyboard Navigation',
    items: [ body ]
  };
};

export {
  tab
};
