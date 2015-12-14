/*global window self*/
(function (definition) {
    "use strict";

    if (typeof exports === "object" && typeof module === "object") {
        module.exports = definition();
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        var global = typeof window !== "undefined" ? window : self;

        var previousAmp = global.amp;
        global.amp = definition();
        global.amp.noConflict = function () {
            global.amp = previousAmp;
            return this;
        };
    } else {
        throw new Error("Environment was not anticipated.");
    }

})(function(){
    "use strict";

    return {
        inlineContent:inlineContent
    };

    function inlineContent(content){
        var contentMap = {};
        content.data.content['@graph'].forEach(function(content){
            contentMap[content['@id']] = content;
        });
        var requestedContent = content.data.requestedContent[0]["@id"];
        return  inlineChildContent({"@id": requestedContent}, contentMap)
    }

    function inlineChildContent(parentNode, contentMap){
        Object.keys(parentNode).forEach(function(key){
            var value = parentNode[key];
            if(key === '@id'){
                Object.keys(contentMap[value]).forEach(function(childKey){
                    parentNode[childKey] = contentMap[value][childKey];
                })
            }
        });

        Object.keys(parentNode).forEach(function(key){
            var value = parentNode[key];
            if(value !== null && typeof value === 'object'){
                parentNode[key] = inlineChildContent(parentNode[key], contentMap);
            }else if(Array.isArray(value)){
                value.forEach(function(item, i){
                    parentNode[key][i] = inlineChildContent(parentNode[key][i], contentMap);
                })
            }
        });
        return parentNode;
    }
});