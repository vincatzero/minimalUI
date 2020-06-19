//Sets the Ace editor to the correct mode to set correct syntax highlighting
function setEditorMode(thisEditor, filePath){

    let modelist = ace.require("ace/ext/modelist");
    let mode = modelist.getModeForPath(filePath).mode;
    thisEditor.session.setMode(mode);
}

function CreateAceEditor(codeDiv, filePath, fileId)
{
    const tempEditor = ace.edit(codeDiv);
    tempEditor.setReadOnly(true);
    tempEditor.setTheme("ace/theme/monokai");
    tempEditor.setFontSize(16);
    tempEditor.setShowPrintMargin(false);

    setEditorMode(tempEditor, filePath);
    
    allEditors[fileId] = tempEditor;

    return allEditors[fileId];
}

/*
* Create a highlight (ace calls these 'markers')
*/
function addHighlight(startRow, startColumn, endRow, endColumn) {
    //create a marker in the right range
    const marker = editor.getSession().addMarker(new Range(startRow, startColumn, endRow, endColumn), 'highlight', 'text', true);
    
    //add the id of the new marker so it can be cleared later
    allHighlights.push(marker);
}

/*
* Function to clear all the highlights.
*/
function clearHighlights() {
    //go through the collection of marker ids
    for(let i = 0;i < allHighlights.length;i++) {
        //remove the marker
        editor.getSession().removeMarker(allHighlights[i]);
    }
    //empty the collection of marker ids
    allHighlights = [];
}