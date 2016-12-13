/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	
	const request = new Request('/api/nav.json');
	
	/**
	 * AJAX request for response
	 * @param  {Object} request request object to API
	 */
	fetch(request)
	  .then((response) => response.json())
	  .then((data) => render(data));
	
	/**
	 * Render item list in DOM element #list
	 * @param  {Object} data json data
	 */
	function render(data) {
	  const $list = document.querySelector('#list');
	  if (data.items) {
	    const $items = data.items.map((dataItem, i) => createItem(dataItem, i));
	    $items.forEach(($item) => {
	      if ($item) {
	        $list.appendChild($item)
	      }
	    });
	  }
	  return;
	}
	
	/**
	 * Create LI DOM element based in data information
	 * @param  {Object} data item data
	 * @param  {Number} i    iterator
	 * @return {Node}      DOM li element
	 */
	function createItem(data, i) {
	  const $item = document.createElement('li');
	  if (!(data.items && data.items.length > 0)) {
	    return getPrimaryItem($item, data);
	  }
	  return getSecondaryItem($item, data, i);
	}
	
	/**
	 * Render item without subitems
	 * @param  {Node} $item DOM li item without attributes
	 * @param  {Object} data  item data
	 * @return {Node}       DOM LI with attributes for primary navigation
	 */
	function getPrimaryItem($item, data) {
	  $item.setAttribute('class', 'Nav-item is-primary');
	  $item.appendChild(createLink(data));
	  return $item;
	}
	
	/**
	 * Render secondary item
	 * @param  {Node} $item DOM li item without attributes
	 * @param  {Object} data  item data
	 * @param  {Number} i     iterator
	 * @return {Node}       DOM LI with label, cehckbox and list
	 */
	function getSecondaryItem($item, data, i) {
	  const $label = createLabel(data, i);
	  const $subList = createSubList(data.items);
	  const $checkbox = createCheckbox(i);
	  $item.setAttribute('class', 'Nav-item is-secondary');
	  $item.appendChild($checkbox);
	  $item.appendChild($label);
	  $item.appendChild($subList);
	  return $item;
	}
	
	/**
	 * Checkbox for secondary item
	 * @param  {Number} i iterator
	 * @return {Node}   INPUT type=checkbox item
	 */
	function createCheckbox(i) {
	  const stringCheckbox = '<input id="item-' + i + '" type="checkbox" name="navigation" aria-hidden="true" hidden="">';
	  return createFromString(stringCheckbox);
	}
	
	/**
	 * function for convert string to DOM element
	 * @param  {String} elementString DOM element as string
	 * @return {Node}
	 */
	function createFromString(elementString) {
	  const $div = document.createElement('div');
	  $div.innerHTML = elementString;
	  return $div.firstChild;
	}
	
	/**
	 * create anchor DOM element
	 * @param  {Object} data item data
	 * @return {Node}      DOM A element
	 */
	function createLink(data) {
	  const $link = document.createElement('a');
	  $link.setAttribute('href', data.url);
	  $link.setAttribute('alt', data.label);
	  $link.textContent = data.label;
	  return $link;
	}
	
	/**
	 * create label DOM element
	 * @param  {Object} data [description]
	 * @param  {[type]} i    [description]
	 * @return {[type]}      [description]
	 */
	function createLabel(data, i) {
	  const stringChevron = '<span class="Chevron"></span>';
	  const $label = document.createElement('label');
	  $label.setAttribute('for', 'item-' + i);
	  const $link = document.createElement('a');
	  $link.innerHTML = data.label + ' ' + stringChevron;
	  $label.appendChild($link);
	  return $label;
	}
	
	/**
	 * create UL sublist
	 * @param  {Array} items sublist items
	 * @return {Node}       DOM UL element with item list
	 */
	function createSubList(items) {
	  const $subList = document.createElement('ul')
	  $subList.setAttribute('class', 'Nav-subList');
	  const $subItems = items.map((item) => createSubItem(item));
	  $subItems.forEach(($subItem) => {
	    $subList.appendChild($subItem);
	  });
	  return $subList;
	}
	
	/**
	 * create LI subitem
	 * @param  {Object} data
	 * @return {Node}      DOM LI subitem
	 */
	function createSubItem(data) {
	  const $item = document.createElement('li');
	  $item.setAttribute('class', 'Nav-subItem');
	  $item.appendChild(createLink(data));
	  return $item;
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map