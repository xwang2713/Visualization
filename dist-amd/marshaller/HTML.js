!function(t,i){"function"==typeof define&&define.amd?define(["d3","../layout/Grid","./HipieDDLMixin"],i):t.marshaller_HTML=i(t.d3,t.layout_Grid,t.marshaller_HipieDDLMixin)}(this,function(t,i,e){function r(){i.call(this),e.call(this),this.surfacePadding(0)}return r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.mixin(e),r.prototype._class+=" marshaller_HTML",r.prototype.populateContent=function(){var t=0,i=0,e=this.cellDensity();for(var r in this._ddlDashboards){var o=Math.floor(Math.sqrt(this._ddlDashboards[r].visualizations.length));this._ddlDashboards[r].visualizations.forEach(function(r){if(r.newWidgetSurface){for(;null!==this.getCell(t*e,i*e);)i++,i%o===0&&(t++,i=0);this.setContent(t,i,r.newWidgetSurface)}},this)}var n={};this.content().forEach(function(t){var i=t.widget();i&&"layout_Surface"===i.classID()&&(i=i.widget()),i&&(n[i.id()]=t)});for(r in this._ddlDashboards)this._ddlDashboards[r].visualizations.forEach(function(t,i){if(!t.properties.flyout){var e=t.events.getUpdatesVisualizations(),r=e.map(function(t){return n[t.id].id()});n[t.id].indicateTheseIds(r)}})},r.prototype.enter=function(t,e){i.prototype.enter.apply(this,arguments)},r.prototype.render=function(t){return this._marshallerRender(i.prototype,t),this},r.prototype.commsError=function(t,i){alert("Comms Error:\n"+t+"\n"+i)},r});