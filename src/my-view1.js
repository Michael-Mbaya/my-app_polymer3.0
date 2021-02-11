/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { LitElement, html } from 'lit-element';
import './shared-styles.js';


class MyView1 extends LitElement {

    render() {
        return html `
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.css" integrity="sha512-toUvtf5IUJlYwGfXDzm8QT5X2JXuF9inSJp+oIkfOWZ+QNKKbA9HbXpUpe5nMQ4Mg9SC773pO3vWp2LjMY6vPg==" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <div class = "field">
      <label class = "label">Name</label>
         <div class = "control">
            <input class = "input" type = "text" placeholder = "enter your name...">
         </div>
      </div>

      <label class = "label">Number</label>
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +254
          </a>
        </p>
        <p class="control is-expanded ml-1">
          <input class="input" type="tel" placeholder="Number">
        </p>
      </div>

      <div class="field">
      <label class = "label">Email</label>
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
      </p>
    </div>
    
      
<!--      <div class="field">
      <label class = "label">Password</label>
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
        </p>
      </div>  --!>

      <div class="field">
        <p class="control">
          <button class="button is-success">
            Submit
          </button>
        </p>
      </div>

    `;
    }

}

customElements.define('my-view1', MyView1);
// window.customElements.define('my-view1', MyView1);