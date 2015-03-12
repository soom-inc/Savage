var Savage = function (SVGTemplate) {
    this.template = SVGTemplate
    this.fields = null
    this.types = null

    this.getFields = function() {
	return this.fields
    }

    this.setFields = function(newFields) {
	for (var param in newFields) {
	    // TODO: type-based validation
	    if (param in this.fields) {
		this.fields[param] = newFields[param]
	    } else {
		throw "KeyError: Field " + param + " does not exist."
	    }
	}
    }

    this.getTypes = function() {
	return this.types
    }

  this.render = function() {
  	output = this.template
  	for (var param in this.fields) {
  	    re = new RegExp("{{\\s*" + this.types[param] + "\\s+" + param + "\\s*}}")
  	    output = output.replace(re, this.fields[param])
  	}
	  return output
    }

    // private helper function to parse string for fields, types
    construct = function(template) {
	    this.fields = {}
	    this.types = {}
	    re = /\{\{(.*?)\}\}/g
	    // must loop over each match
	    while (parameter = re.exec(template)) {
	    tokens = parameter[1].match(/(\S+)/g)
	    type = tokens[0]
	    name = tokens[1]
	    this.fields[name] = ""
	    this.types[name] = type
	    }
	    return([this.fields, this.types])
    }

    construct_arr = construct(this.template)
    this.fields = construct_arr[0]
    this.types = construct_arr[1]
    
    return this
}

module.exports = Savage;
