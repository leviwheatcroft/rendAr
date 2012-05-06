/*
---
script: rendAr.js
version: 0.1 - initial release
description: rendAr utilises the Mootools Slick engine to generate DOM objects from clean, elegant templates.
license: MIT-style
download: http://mootools.net/forge
source: https://github.com/Mr5o1/rendAr
demo: http://leviwheatcroft.com/rendAr

authors:
- Levi Wheatcroft (leviwheatcroft.com)

provides:
- Array.rendAr

requires:
- core/1.3.0:Element
- core/1.3.0:Elements
- core/1.3.0:Array

...
*/


Array.implement({
   rendAr: function() {
      var el = [];
         this.each(function(item) {
            if (typeOf(item) == 'element') el.push(item);
            else if (typeOf(item) == 'string') el.push(new Element(item));
            else if (typeOf(item) == 'elements') item.each(function(i) {el.push(i);});
            else if (typeOf(item) == 'array') el[el.length - 1].adopt(item.rendAr());
            else if (typeOf(item) == 'object') el[el.length - 1].set(item);
         });
      return el[1] ? new Elements(el) : el[0]; 
   }
});
