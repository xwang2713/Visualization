(function(e,t){typeof define=="function"&&define.amd?define(["./SVGWidget","./Text","css!font-awesome","css!./FAChar"],t):e.common_FAChar=t(e.common_SVGWidget,e.common_Text)})(this,function(e,t){function n(){e.call(this),this._text=(new t).fontFamily("FontAwesome")}return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" common_FAChar",n.prototype.publish("char","","string","Font Awesome Item",null,{tags:["Private"]}),n.prototype.publish("fontSize",null,"number","Font Size",null,{tags:["Private"]}),n.prototype.publishProxy("text_colorFill","_text","colorFill"),n.prototype.enter=function(t,n){e.prototype.enter.apply(this,arguments),this._text.target(t)},n.prototype.update=function(t,n){e.prototype.update.apply(this,arguments),this._text.text(this.char()).scale((this.fontSize()||14)/14).render()},n.prototype.exit=function(t,n){this._text.target(null),e.prototype.exit.apply(this,arguments)},n});