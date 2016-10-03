/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(9);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, BEMwasIncludedBefore, RegExp, bemto_settings_default_tag, bemto_settings_element, bemto_settings_modifier, bemto_settings_prefix, clone, get_bemto_tag_content_type) {if (BEMwasIncludedBefore != true) {
	pug_html = pug_html + ((null == (pug_interp = __webpack_require__(11).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(12).call(this, locals)) ? "" : pug_interp));
	var default_bemto_settings = {
	  'prefix': '',
	  'element': '__',
	  'modifier': '_',
	  'default_tag': 'div',
	  'nosrc_substitute': true,
	  'flat_elements': true
	}

	var bemto_output_settings = ['element', 'modifier'];

	var bemto_settings = (set_bemto_settings) ? set_bemto_settings : default_bemto_settings;

	var get_bemto_settings = function() {
	  var settings = clone(bemto_settings);
	  if (bemto_settings_prefix      !== undefined) { settings['prefix']      = bemto_settings_prefix;      }
	  if (bemto_settings_element     !== undefined) { settings['element']     = bemto_settings_element;     }
	  if (bemto_settings_modifier    !== undefined) { settings['modifier']    = bemto_settings_modifier;    }
	  if (bemto_settings_default_tag !== undefined) { settings['default_tag'] = bemto_settings_default_tag; }

	  for (var i = 0; i < bemto_output_settings.length; i++) {
	    var setting = bemto_output_settings[i];
	    if (settings['output_' + setting] === undefined) {
	      settings['output_' + setting] = settings[setting];
	    }
	  };

	  return settings;
	}

	var set_bemto_setting = function(name, value) {
	  bemto_settings[name] = value;

	  //- Resetting the old variable-type setting
	  if (name == 'prefix' && bemto_settings_prefix !== undefined) { bemto_settings_prefix = undefined; }
	  if (name == 'element' && bemto_settings_element !== undefined) { bemto_settings_element = undefined; }
	  if (name == 'modifier' && bemto_settings_modifier !== undefined) { bemto_settings_modifier = undefined; }
	  if (name == 'default_tag' && bemto_settings_default_tag !== undefined) { bemto_settings_default_tag = undefined; }
	}

	var set_bemto_settings = function(settings) {
	  for (var name in settings) {
	    if (settings.hasOwnProperty(name)) {
	      set_bemto_setting(name, settings[name]);
	    }
	  }
	}

	pug_mixins["bem_scope"] = pug_interp = function(settings){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	var old_bemto_settings = clone(bemto_settings)
	set_bemto_settings(settings)
	block && block();
	set_bemto_settings(old_bemto_settings)
	};
	pug_mixins["bemto_custom_inline_tag"] = pug_interp = function(customTag, self_closing){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	self_closing = self_closing || false
	pug_html = pug_html + ((null == (pug_interp = '<') ? "" : pug_interp) + (pug.escape(null == (pug_interp = customTag) ? "" : pug_interp)));
	if (attributes) {
	for (var attribute in attributes)
	{
	if (attributes.hasOwnProperty(attribute) && attributes[attribute] !== false && attributes[attribute] !== undefined) {
	pug_html = pug_html + ((pug.escape(null == (pug_interp = ' ') ? "" : pug_interp)) + (pug.escape(null == (pug_interp = attribute) ? "" : pug_interp)) + (null == (pug_interp = '="') ? "" : pug_interp) + (pug.escape(null == (pug_interp = attributes[attribute] === true ? attribute : attributes[attribute]) ? "" : pug_interp)) + (null == (pug_interp = '"') ? "" : pug_interp));
	}
	}
	}
	if (self_closing) {
	pug_html = pug_html + (null == (pug_interp = '/>') ? "" : pug_interp);
	}
	else {
	pug_html = pug_html + (null == (pug_interp = '>') ? "" : pug_interp);
	block && block();
	pug_html = pug_html + ((null == (pug_interp = '</') ? "" : pug_interp) + (pug.escape(null == (pug_interp = customTag) ? "" : pug_interp)) + (null == (pug_interp = '>') ? "" : pug_interp));
	}
	};




































	pug_mixins["bemto_tag"] = pug_interp = function(tag, tagMetadata){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	var settings = get_bemto_settings()
	tagMetadata = tagMetadata || {}
	var newTag = tag || settings['default_tag']
	var contextIndex = bemto_chain_contexts.length
	if (!tag) {
	if (bemto_chain_contexts[contextIndex-1] === 'inline') {
	newTag = 'span'
	}
	else
	if (bemto_chain_contexts[contextIndex-1] === 'list') {
	newTag = 'li'
	}
	else
	if (bemto_chain_contexts[contextIndex-1] === 'optionlist') {
	newTag = 'option'
	}
	}
	if (!tag || tag == 'span' || tag == 'div') {
	if (attributes.href) {
	newTag = 'a'
	}
	if (attributes.for) {
	newTag = 'label'
	}
	if (attributes.type) {
	newTag = block ? 'button' : 'input'
	}
	else
	if (attributes.src) {
	newTag = 'img'
	}
	}
	if (bemto_chain_contexts[contextIndex-1] === 'list' && newTag !== 'li') {
	pug_html = pug_html + "\u003Cli\u003E";
	}
	else
	if (bemto_chain_contexts[contextIndex-1] !== 'list' && bemto_chain_contexts[contextIndex-1] !== 'pseudo-list' && newTag === 'li') {
	pug_html = pug_html + "\u003Cul\u003E";
	bemto_chain_contexts[bemto_chain_contexts.length] = 'pseudo-list'
	}
	else
	if (bemto_chain_contexts[contextIndex-1] === 'pseudo-list' && newTag !== 'li') {
	pug_html = pug_html + "\u003C\u002Ful\u003E";
	bemto_chain_contexts = bemto_chain_contexts.splice(0,bemto_chain_contexts.length-1)
	}
	var content_type = tagMetadata.content_type || get_bemto_tag_content_type(newTag)
	bemto_chain_contexts[bemto_chain_contexts.length] = content_type
	if (newTag == 'img') {
	if (attributes.alt && !attributes.title) {
	attributes.title = ''
	}
	if (attributes.title && !attributes.alt) {
	attributes.alt = attributes.title
	}
	if (!attributes.alt) {
	attributes.alt = ''
	}
	if (attributes.alt === '') {
	attributes.role = 'presentation'
	}
	if (!attributes.src) {
	if (settings.nosrc_substitute === true) {
	attributes.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
	}
	else
	if (settings.nosrc_substitute) {
	attributes.src = settings.nosrc_substitute
	}
	}
	}
	if (newTag == 'input') {
	if (!attributes.type) {
	attributes.type = "text"
	}
	}
	if (newTag == 'main') {
	if (!attributes.role) {
	attributes.role = 'main'
	}
	}
	if (newTag == 'html') {
	pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
	}






	if (bemto_chain_contexts[contextIndex-1] === 'list' && newTag != 'li') {
	pug_html = pug_html + "\u003C\u002Fli\u003E";
	}
	};
	var bemto_chain = []
	var bemto_chain_contexts = ['block']
	pug_mixins["block"] = pug_interp = function(options){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	var settings = get_bemto_settings()
	if (options && options.prefix !== undefined) {
	settings.prefix = options.prefix
	}
	var tag = options && options.tag || ( typeof options == 'string' ? options : '')
	var isElement = options && options.isElement
	var tagMetadata = options && options.metadata
	var block_sets_context = false
	if (attributes.class) {
	var bemto_classes = attributes.class
	if (bemto_classes instanceof Array) {
	bemto_classes = bemto_classes.join(' ')
	}
	bemto_classes = bemto_classes.split(' ')
	var bemto_objects = []
	var is_first_object = true
	var new_context = []
	// iterate bemto_classes
	;(function(){
	  var $$obj = bemto_classes;
	  if ('number' == typeof $$obj.length) {
	      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
	        var klass = $$obj[i];
	var bemto_object = {}
	var prev_object = bemto_objects[bemto_objects.length - 1]
	var sets_context = false
	if (klass.match(/^[A-Z-]+[A-Z0-9-]?$/)) {
	tag = klass.toLowerCase()
	continue
	}
	if (is_first_object && isElement) {
	bemto_object['context'] = bemto_chain[bemto_chain.length - 1]
	}
	var modifier_class = klass.match(new RegExp('^(?!' + settings['element'] + '[A-Za-z0-9])' + settings['modifier'] + '(.+)$'))
	if (modifier_class && prev_object && prev_object.name) {
	if (!prev_object['modifiers']) {
	prev_object['modifiers'] = []
	}
	prev_object.modifiers.push(modifier_class[1])
	continue
	}
	var element_class = klass.match(new RegExp('^(?!' + settings['modifier'] + '[A-Za-z0-9])' + settings['element'] + '(.+)$'))
	if (element_class) {
	bemto_object['context'] = bemto_chain[bemto_chain.length - 1]
	klass = element_class[1]
	}
	var name_with_context = klass.match(new RegExp('^(.*[A-Za-z0-9])(?!' + settings['modifier'] + '$)' + settings['element'] + '$'))
	if (name_with_context) {
	klass = name_with_context[1]
	bemto_object['is_context'] = true
	sets_context = true
	block_sets_context = true
	isElement = false
	}
	var name_with_modifier = klass.match(new RegExp('^(.*?[A-Za-z0-9])(?!' + settings['element'] + '[A-Za-z0-9])' + settings['modifier'] + '(.+)$'))
	if (name_with_modifier) {
	klass = name_with_modifier[1]
	if (!bemto_object['modifiers']) {
	bemto_object['modifiers'] = []
	}
	bemto_object.modifiers.push(name_with_modifier[2])
	}
	if (sets_context && klass.match('^[a-zA-Z0-9]+.*')) {
	new_context.push(bemto_object.context ? (bemto_object.context + settings['element'] + klass) : klass)
	}
	var nocontext_class = klass.match(new RegExp('^(?!' + settings['element'] + '[A-Za-z0-9])-_(.+)$'))
	if (nocontext_class) {
	bemto_object['nocontext'] = nocontext_class[1]
	}
	else {
	bemto_object['name'] = klass
	}
	is_first_object = false
	if (bemto_object.context && bemto_object.context.length > 1) {
	// iterate bemto_object.context
	;(function(){
	  var $$obj = bemto_object.context;
	  if ('number' == typeof $$obj.length) {
	      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
	        var subcontext = $$obj[i];
	var sub_object = clone(bemto_object)
	sub_object['context'] = [subcontext]
	bemto_objects.push(sub_object)
	      }
	  } else {
	    var $$l = 0;
	    for (var i in $$obj) {
	      $$l++;
	      var subcontext = $$obj[i];
	var sub_object = clone(bemto_object)
	sub_object['context'] = [subcontext]
	bemto_objects.push(sub_object)
	    }
	  }
	}).call(this);

	}
	else {
	bemto_objects.push(bemto_object)
	}
	      }
	  } else {
	    var $$l = 0;
	    for (var i in $$obj) {
	      $$l++;
	      var klass = $$obj[i];
	var bemto_object = {}
	var prev_object = bemto_objects[bemto_objects.length - 1]
	var sets_context = false
	if (klass.match(/^[A-Z-]+[A-Z0-9-]?$/)) {
	tag = klass.toLowerCase()
	continue
	}
	if (is_first_object && isElement) {
	bemto_object['context'] = bemto_chain[bemto_chain.length - 1]
	}
	var modifier_class = klass.match(new RegExp('^(?!' + settings['element'] + '[A-Za-z0-9])' + settings['modifier'] + '(.+)$'))
	if (modifier_class && prev_object && prev_object.name) {
	if (!prev_object['modifiers']) {
	prev_object['modifiers'] = []
	}
	prev_object.modifiers.push(modifier_class[1])
	continue
	}
	var element_class = klass.match(new RegExp('^(?!' + settings['modifier'] + '[A-Za-z0-9])' + settings['element'] + '(.+)$'))
	if (element_class) {
	bemto_object['context'] = bemto_chain[bemto_chain.length - 1]
	klass = element_class[1]
	}
	var name_with_context = klass.match(new RegExp('^(.*[A-Za-z0-9])(?!' + settings['modifier'] + '$)' + settings['element'] + '$'))
	if (name_with_context) {
	klass = name_with_context[1]
	bemto_object['is_context'] = true
	sets_context = true
	block_sets_context = true
	isElement = false
	}
	var name_with_modifier = klass.match(new RegExp('^(.*?[A-Za-z0-9])(?!' + settings['element'] + '[A-Za-z0-9])' + settings['modifier'] + '(.+)$'))
	if (name_with_modifier) {
	klass = name_with_modifier[1]
	if (!bemto_object['modifiers']) {
	bemto_object['modifiers'] = []
	}
	bemto_object.modifiers.push(name_with_modifier[2])
	}
	if (sets_context && klass.match('^[a-zA-Z0-9]+.*')) {
	new_context.push(bemto_object.context ? (bemto_object.context + settings['element'] + klass) : klass)
	}
	var nocontext_class = klass.match(new RegExp('^(?!' + settings['element'] + '[A-Za-z0-9])-_(.+)$'))
	if (nocontext_class) {
	bemto_object['nocontext'] = nocontext_class[1]
	}
	else {
	bemto_object['name'] = klass
	}
	is_first_object = false
	if (bemto_object.context && bemto_object.context.length > 1) {
	// iterate bemto_object.context
	;(function(){
	  var $$obj = bemto_object.context;
	  if ('number' == typeof $$obj.length) {
	      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
	        var subcontext = $$obj[i];
	var sub_object = clone(bemto_object)
	sub_object['context'] = [subcontext]
	bemto_objects.push(sub_object)
	      }
	  } else {
	    var $$l = 0;
	    for (var i in $$obj) {
	      $$l++;
	      var subcontext = $$obj[i];
	var sub_object = clone(bemto_object)
	sub_object['context'] = [subcontext]
	bemto_objects.push(sub_object)
	    }
	  }
	}).call(this);

	}
	else {
	bemto_objects.push(bemto_object)
	}
	    }
	  }
	}).call(this);

	if (!isElement && !new_context.length && bemto_objects[0] && bemto_objects[0].name && bemto_objects[0].name.match('^[a-zA-Z0-9]+.*')) {
	bemto_objects[0]['is_context'] = true
	new_context.push(bemto_objects[0].context ? (bemto_objects[0].context + settings['element'] + bemto_objects[0].name) : bemto_objects[0].name)
	block_sets_context = true
	}
	if (new_context.length) {
	if (settings.flat_elements) {
	// iterate new_context
	;(function(){
	  var $$obj = new_context;
	  if ('number' == typeof $$obj.length) {
	      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
	        var subcontext = $$obj[i];
	var context_with_element = subcontext.match(new RegExp('^(.*?[A-Za-z0-9])(?!' + settings['modifier'] + '[A-Za-z0-9])' + settings['element'] + '.+$'))
	if (context_with_element) {
	new_context[i] = context_with_element[1]
	}
	      }
	  } else {
	    var $$l = 0;
	    for (var i in $$obj) {
	      $$l++;
	      var subcontext = $$obj[i];
	var context_with_element = subcontext.match(new RegExp('^(.*?[A-Za-z0-9])(?!' + settings['modifier'] + '[A-Za-z0-9])' + settings['element'] + '.+$'))
	if (context_with_element) {
	new_context[i] = context_with_element[1]
	}
	    }
	  }
	}).call(this);

	}
	bemto_chain[bemto_chain.length] = new_context
	}
	if (bemto_objects.length) {
	var new_classes = []
	// iterate bemto_objects
	;(function(){
	  var $$obj = bemto_objects;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
	        var bemto_object = $$obj[pug_index4];
	if (bemto_object.name) {
	var prefix = settings.prefix
	if (bemto_object.context) {
	prefix += bemto_object.context + settings.output_element
	}
	new_classes.push(prefix + bemto_object.name)
	if (bemto_object.modifiers) {
	// iterate bemto_object.modifiers
	;(function(){
	  var $$obj = bemto_object.modifiers;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
	        var modifier = $$obj[pug_index5];
	new_classes.push(prefix + bemto_object.name + settings.output_modifier + modifier)
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index5 in $$obj) {
	      $$l++;
	      var modifier = $$obj[pug_index5];
	new_classes.push(prefix + bemto_object.name + settings.output_modifier + modifier)
	    }
	  }
	}).call(this);

	}
	}
	if (bemto_object.nocontext) {
	new_classes.push(bemto_object.nocontext)
	}
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index4 in $$obj) {
	      $$l++;
	      var bemto_object = $$obj[pug_index4];
	if (bemto_object.name) {
	var prefix = settings.prefix
	if (bemto_object.context) {
	prefix += bemto_object.context + settings.output_element
	}
	new_classes.push(prefix + bemto_object.name)
	if (bemto_object.modifiers) {
	// iterate bemto_object.modifiers
	;(function(){
	  var $$obj = bemto_object.modifiers;
	  if ('number' == typeof $$obj.length) {
	      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
	        var modifier = $$obj[pug_index6];
	new_classes.push(prefix + bemto_object.name + settings.output_modifier + modifier)
	      }
	  } else {
	    var $$l = 0;
	    for (var pug_index6 in $$obj) {
	      $$l++;
	      var modifier = $$obj[pug_index6];
	new_classes.push(prefix + bemto_object.name + settings.output_modifier + modifier)
	    }
	  }
	}).call(this);

	}
	}
	if (bemto_object.nocontext) {
	new_classes.push(bemto_object.nocontext)
	}
	    }
	  }
	}).call(this);

	attributes.class = new_classes.join(' ')
	}
	else {
	attributes.class = undefined
	}
	}
	if (block) {
	pug_mixins["bemto_tag"].call({
	block: function(){
	block && block();
	},
	attributes: attributes
	}, tag, tagMetadata);
	}
	else {
	pug_mixins["bemto_tag"].call({
	attributes: attributes
	}, tag, tagMetadata);
	}
	if (!isElement && block_sets_context) {
	bemto_chain = bemto_chain.splice(0,bemto_chain.length-1)
	}
	bemto_chain_contexts = bemto_chain_contexts.splice(0,bemto_chain_contexts.length-1)
	};
	pug_mixins["element"] = pug_interp = function(options){
	var block = (this && this.block), attributes = (this && this.attributes) || {};
	if (options && typeof options == 'string') {
	options = { 'tag': options }
	}
	else {
	options = options || {}
	}
	options['isElement'] = true
	pug_mixins["b"].call({
	block: function(){
	block && block();
	},
	attributes: attributes
	}, options);
	};
	set_bemto_settings({ modifier: '_', output_modifier: '--'})
	BEMwasIncludedBefore = true
	}
	pug_mixins["bem_scope"].call({
	block: function(){
	pug_mixins["block"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 1";
	},
	attributes: {"class": "A button","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 2";
	},
	attributes: {"class": "A button _active","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 3";
	},
	attributes: {"class": "A button","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	},
	attributes: {"class": "UL menu"}
	});
	pug_html = pug_html + "\u003C!-- Reusing the Block \"menu\" with a modifier--\u003E";
	pug_mixins["block"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 1";
	},
	attributes: {"class": "A button","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 2";
	},
	attributes: {"class": "A button _active","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	pug_mixins["element"].call({
	block: function(){
	pug_mixins["element"].call({
	block: function(){
	pug_html = pug_html + "Button 3";
	},
	attributes: {"class": "A button","href": "#","title": ""}
	});
	},
	attributes: {"class": "LI item"}
	});
	},
	attributes: {"class": "UL menu _right"}
	});
	}
	});}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"BEMwasIncludedBefore" in locals_for_with?locals_for_with.BEMwasIncludedBefore:typeof BEMwasIncludedBefore!=="undefined"?BEMwasIncludedBefore:undefined,"RegExp" in locals_for_with?locals_for_with.RegExp:typeof RegExp!=="undefined"?RegExp:undefined,"bemto_settings_default_tag" in locals_for_with?locals_for_with.bemto_settings_default_tag:typeof bemto_settings_default_tag!=="undefined"?bemto_settings_default_tag:undefined,"bemto_settings_element" in locals_for_with?locals_for_with.bemto_settings_element:typeof bemto_settings_element!=="undefined"?bemto_settings_element:undefined,"bemto_settings_modifier" in locals_for_with?locals_for_with.bemto_settings_modifier:typeof bemto_settings_modifier!=="undefined"?bemto_settings_modifier:undefined,"bemto_settings_prefix" in locals_for_with?locals_for_with.bemto_settings_prefix:typeof bemto_settings_prefix!=="undefined"?bemto_settings_prefix:undefined,"clone" in locals_for_with?locals_for_with.clone:typeof clone!=="undefined"?clone:undefined,"get_bemto_tag_content_type" in locals_for_with?locals_for_with.get_bemto_tag_content_type:typeof get_bemto_tag_content_type!=="undefined"?get_bemto_tag_content_type:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(10).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(9);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, Date, Error, Object) {// Cloning via http://stackoverflow.com/a/728694/885556
	function clone(obj) {
	    var copy;

	    // Handle the 3 simple types, and null or undefined
	    if (null == obj || "object" != typeof obj) return obj;

	    // Handle Date
	    if (obj instanceof Date) {
	        copy = new Date();
	        copy.setTime(obj.getTime());
	        return copy;
	    }

	    // Handle Array
	    if (obj instanceof Array) {
	        copy = [];
	        for (var i = 0, len = obj.length; i < len; i++) {
	            copy[i] = clone(obj[i]);
	        }
	        return copy;
	    }

	    // Handle Object
	    if (obj instanceof Object) {
	        copy = {};
	        for (var attr in obj) {
	            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
	        }
	        return copy;
	    }

	    throw new Error("Unable to copy obj! Its type isn't supported.");
	}}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"Error" in locals_for_with?locals_for_with.Error:typeof Error!=="undefined"?Error:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(9);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var get_bemto_tag_type = function(tagName) {
	  var result = 'block'
	  if (bemto_tag_metadata[tagName]) {
	    result = bemto_tag_metadata[tagName].type || result;
	  }
	  return result;
	}

	var get_bemto_tag_content_type = function(tagName) {
	  var result = 'block'
	  if (bemto_tag_metadata[tagName]) {
	    result = bemto_tag_metadata[tagName].content_type || bemto_tag_metadata[tagName].type || result;
	  }
	  return result;
	}

	var bemto_tag_metadata = {
	  'hr': {
	    'type': 'self_closing'
	  },
	  'br': {
	    'type': 'self_closing'
	  },
	  'wbr': {
	    'type': 'self_closing'
	  },
	  'source': {
	    'type': 'self_closing'
	  },
	  'img': {
	    'type': 'self_closing'
	  },
	  'input': {
	    'type': 'self_closing'
	  },
	  'a': {
	    'type': 'inline'
	  },
	  'abbr': {
	    'type': 'inline'
	  },
	  'acronym': {
	    'type': 'inline'
	  },
	  'b': {
	    'type': 'inline'
	  },
	  'code': {
	    'type': 'inline'
	  },
	  'em': {
	    'type': 'inline'
	  },
	  'font': {
	    'type': 'inline'
	  },
	  'i': {
	    'type': 'inline'
	  },
	  'ins': {
	    'type': 'inline'
	  },
	  'kbd': {
	    'type': 'inline'
	  },
	  'map': {
	    'type': 'inline'
	  },
	  'pre': {
	    'type': 'inline'
	  },
	  'samp': {
	    'type': 'inline'
	  },
	  'small': {
	    'type': 'inline'
	  },
	  'span': {
	    'type': 'inline'
	  },
	  'strong': {
	    'type': 'inline'
	  },
	  'sub': {
	    'type': 'inline'
	  },
	  'sup': {
	    'type': 'inline'
	  },
	  'textarea': {
	    'type': 'inline'
	  },
	  'time': {
	    'type': 'inline'
	  },
	  'label': {
	    'content_type': 'inline'
	  },
	  'p': {
	    'content_type': 'inline'
	  },
	  'h1': {
	    'content_type': 'inline'
	  },
	  'h2': {
	    'content_type': 'inline'
	  },
	  'h3': {
	    'content_type': 'inline'
	  },
	  'h4': {
	    'content_type': 'inline'
	  },
	  'h5': {
	    'content_type': 'inline'
	  },
	  'h6': {
	    'content_type': 'inline'
	  },
	  'ul': {
	    'content_type': 'list'
	  },
	  'ol': {
	    'content_type': 'list'
	  },
	  'select': {
	    'content_type': 'optionlist'
	  },
	  'datalist': {
	    'content_type': 'optionlist'
	  }
	};return pug_html;};
	module.exports = template;

/***/ }
/******/ ]);