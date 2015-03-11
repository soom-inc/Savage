# Savage
SVG templating engine written in Javascript.

Usage:
```
s = Savage(SVGTemplatingString)  // returns SVG template object
s.getFields()                    // returns a dictionary of field names and values
s.setFields(dictionary)          // can update any number of fields
s.getTypes()                     // returns types of each field
s.render()                       // returns compiled SVG string
```

`SVGTemplatingString` should be SVG (should start and end with `svg` tags).  Fields must be typed and specified with the format below:
```
{{ typeString myTextField }}
```

Example:
```
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="{{ color bg_color }}" height="400" width="400" /><text y="200" x="200">{{ string text }}</text></g></svg>
```

Notes:

- You MUST eliminate all illegal javascript tokens in the SVG string, e.g. newlines, lest you get an `Unexpected token ILLEGAL` error.
- As of right now, type can be any string (we may implement type-checking in the future).