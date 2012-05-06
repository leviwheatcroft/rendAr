rendAr
======

A neat way to generate complex HTML objects from clean elegant syntax.

MooTools awesome Slick engine can create elements from declarations like 'tag.class#id'. rendAr simply feeds an array structure (template) through the Slick engine. It's an easy way to generate complex DOM structures complete with styles and events. 

Why use rendAr? 
 - It's trully tiny. **The minified version weighs in at just 358b** - thats right, less than 1kb. 
 - The array structure is intuitive, takes a moment to master, and is easily readable.
 - Super simple to handle, just declare your array, and rendAr it.

![Screenshot](http://github.com/Mr5o1/rendAr/raw/master/screenshot.png)

How To Use
----------

Templates are definied in an array structure, the arrays can contain:
 - element declarations (a string in Slick engine markup format)
 - arrays (will be adopted by previous element)
 - objects (apply styles and events to previous element)
 
rendAr is implemented as a function in the Array class. So simply declare your array, and call rendAr().

The format for the Slick engine markup is:

	element.class#id[attribute1=value][attribute2=value]...

as in:

	a.myClass#myId[href=mootools.net][text=Get Mootools]

The element itself, is the only mandatory portion of the markup, the rest is optional.

A simple example:

	var template = [
		'ul.listClass#listId', [
			'li[text=Hello]',
			'li[text=World]'
		]
	];
	var element = template.rendAr();
	$$('body').adopt(element);
	
On the fly:

	$$('body').adopt(([
		'ul.listClass#listId', [
			'li[text=Hello]',
			'li[text=World]'
		]
	]).rendAr());
	
Setting styles & events:

	var template = [
		'ul.listClass#listId', [
			'li[text=Hello]',
			'li[text=World]'
		],
		'div.button[text=Click Me]', {
				styles: {
					backgroundColor: '#323288'
				},
				events: {
					click: function() { console.log('Hello World'); }
				}
		},
	];
	$$('body').adopt(template.rendAr());

Dynamic Templates:

Easy.. just pass a function which return's the template you require:

	var template = function(foobar) { return [
		'ul.listClass#listId', 
			[
			'li[text=Hello]',
			'li[text=' + foobar + ']'
			]
		];
	};
	$$('body').adopt(template('World').rendAr());
	
Nested Templates:

No problem.. remember your just dealing with an array structure - juggle it how you like:

	//if your 'inner' template looks like this:
	var template = [
		'li[text=Hello]',
		'li[text=World']'
	];

	//then this is the wrong way (but will work anyway):
	$$('body').adopt(([
		'ul.listClass#listId', 
			[ template.rendAr() ]
	]).rendAr());

	//and this is the right way:
	$$('body').adopt(([
		'ul.listClass#listId', 
			template
	]).rendAr());
	
See '.\Demo\index.htm' for more.

Known Bugs
----------
