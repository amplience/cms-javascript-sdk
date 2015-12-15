# README #
##CMS JavaScript SDK

CMS JavaScript SDK library

The source is available for download from
[GitHub](). 
##Inline Content
Takes flattened response from delivery API and inlines it.
### Usage:
#### Node: 
```javascript

var amp = require('cms-javascript-sdk');
amp.inlineContent({{content}});
 
```
#### Browser:
```html
<script type="text/javascript" src="cms-javascript-sdk.min.js"></script>
<script type="text/javascript"> 
   amp.inlineContent({{content}}); 
</script>
```