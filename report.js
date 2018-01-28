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
            [' ', '!DOCTYPE html %s', 'doctype',''],
            [' ', 'text %s', 'txt','hi'],
            [' ', 'compile HTML %s', 'comp', ''],
            ['r', 'html %s', 'html',''],
            ['r', 'body %s', 'body',''],
            ['r', 'head %s', 'head',''],
            ['r', 'p %s', 'p',''],
            ['r', 'title %s', 'title','']
        ],
menus: {
txt: ['hi','bye','how are you?'],
superMath: ['radian sine', 'radian cosine', 'radian tangent', 'asin', 'atan', 'acos', 'power'],
geo: ['latitude','longitude']
}
    };
 
    // What blocks do go here
    ext.doctype = function(i) {
return "<!DOCTYPE html>"+i;
    }
        ext.txt = function(text) {
    htmlCode = htmlCode + text;
    }
        ext.comp = function(code) {
    location.assign("javascript:innerHTML='"+code+"';");
    }
            ext.html = function(i) {
return "<html>"+i+"</html>";    
    }
            ext.body = function(i) {
return "<body>"+i+"</body>";       
    }
            ext.head = function(i) {
return "<head>"+i+"</head>";     
    }
            ext.p = function(i) {
return "<p>"+i+"</p>";       
    }
            ext.title = function(i) {
return "<title>"+i+"</title>";       
    }
    // Name of Scratch Extension goes here
    ScratchExtensions.register('ElementNet', descriptor, ext); 
     // The name is 'Hello, World!''
})({});
