rendAr
======

A neat way to generate complex HTML objects from clean elegant syntax.

![Screenshot](http://url_to_project_screenshot)

How To Use
----------

MooTools awesome Slick engine can create elements from declarations like 'tag.class#id'. rendAr simply feeds an array structure (template) through the Slick engine. 

Just remember that:
- Any arrays contained in your template, will be adopted by (inserted into) the preceding element.
- Any objects contained in your template, will be passed to 'set' on the preceding element.

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
