import '../../../polymer/polymer.js';
import '../../neon-animated-pages.js';
import '../../neon-animations.js';
import './list-view.js';
import './full-view.js';
import { Polymer } from '../../../polymer/lib/legacy/polymer-fn.js';

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer({
  _template: `
    <style>
      :host {
        display: block;
      }
      neon-animated-pages {
        height: 100%;
      }
    </style>
    <neon-animated-pages id="pages" selected="0">
      <list-view data="[[fileData]]" on-item-click="_onItemClick"></list-view>
      <full-view on-close="_onClose"></full-view>
    </neon-animated-pages>
`,

  is: 'list-demo',

  properties: {

    fileData: {
      type: Array,
      value: function() {
        return [
          {fileName: 'IMG_4130.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4131.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4132.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4133.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4134.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4135.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4136.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4137.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4138.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4139.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4140.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4141.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4142.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4143.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4144.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4145.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4146.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4147.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4148.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4149.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4150.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4151.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4152.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4153.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4154.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4155.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4156.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4157.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4158.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4159.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4160.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4161.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4162.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4163.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4164.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4165.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4166.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4167.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4168.jpg', modifiedDate: 'May 12 2015'},
          {fileName: 'IMG_4169.jpg', modifiedDate: 'May 12 2015'}
        ]
      }
    }
  },

  _onItemClick: function() {
    this.$.pages.selected = 1;
  },

  _onClose: function() {
    this.$.pages.selected = 0;
  }
});
