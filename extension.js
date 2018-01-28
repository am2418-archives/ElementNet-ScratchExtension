var htmlCode = "";
(function(ext) {
    // When Scratch closes, do this
    ext._shutdown = function() {
        // Nothing here at the moment...
    };
 
    // Tell Scratch if the extension is ready to do stuff
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'}; // Status 1 = Red, Error // Status 1 = Yellow, Not Ready // Status 2 = Green, Ready
    };
 
    // Blocks to add to Scratch
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', '!DOCTYPE html', 'doctype'],
            [' ', 'text %s', 'txt','hi'],
            [' ', 'compile HTML %s', 'comp', '']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.doctype = function() {
    htmlCode = htmlCode + "<!DOCTYPE html>";
    }
        ext.txt = function(text) {
    htmlCode = htmlCode + text;
    }
        ext.comp = function(code) {
    location.assign("javascript:innerHTML='"+code+"';");
    }
    // Name of Scratch Extension goes here
    ScratchExtensions.register('ElementNet', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
