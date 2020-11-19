/* eslint-disable no-undef */
'use strict';

//imports
import shoppingList from './functions.js';

function main() {
  shoppingList.render();
  shoppingList.handleShoppingList();
}

// when the page loads, call `handleShoppingList`
$(main);