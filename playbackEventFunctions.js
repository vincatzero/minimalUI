
function insertEvent(nextEvent){
    if(nextEvent.character.length == 1){
        allEditors[nextEvent.fileId].getSession().insert({row: nextEvent.lineNumber -1,column: nextEvent.column -1}, nextEvent.character);
    }    
    else if (nextEvent.character == "NEWLINE"){
        allEditors[nextEvent.fileId].getSession().insert({row: nextEvent.lineNumber -1,column: nextEvent.column -1}, '\n');
    }                       
}


function deleteEvent(nextEvent){
    if (nextEvent.character == "NEWLINE"){
        allEditors[nextEvent.fileId].getSession().remove(new Range(nextEvent.lineNumber-1, nextEvent.column-1,nextEvent.lineNumber, 0));
    }
    else if (nextEvent.character.length == 1){
        allEditors[nextEvent.fileId].getSession().remove(new Range(nextEvent.lineNumber-1, nextEvent.column-1,nextEvent.lineNumber-1, nextEvent.column));
    }
}

function createFileEvent(nextEvent){
    //console.log(`adding to file to the ${numFilesCreated} existing files`);
    if (numFilesCreated == 0)
    {
        let filePath = nextEvent.filePath;
        setEditorMode(editor, filePath);
        allEditors[nextEvent.fileId] = editor;

        document.getElementById("FirstTabLabel").innerHTML = filePath;
    }
    else
    {
        //Create a new tab
        const newListItem = document.createElement('li');
        newListItem.classList.add("nav-item");
        newListItem.id = nextEvent.fileId;
        
        const newLinkTag = document.createElement('a');
        newLinkTag.classList.add("nav-link");
        //newLinkTag.classList.add("active");
        newLinkTag.id = `${nextEvent.fileId}-text`

        newLinkTag.href = `#${nextEvent.fileId}-content`;
        newLinkTag.setAttribute("role", "tab");
        newLinkTag.setAttribute("data-toggle", "tab");

        newLinkTag.innerText = nextEvent.filePath;

        newListItem.appendChild(newLinkTag);
        tabsList.appendChild(newListItem);

        //create new divs to go in the new tab
        const contentPanel = document.createElement('div');
        const codeDiv = document.createElement('div');

        contentPanel.id = `${nextEvent.fileId}-content`;
        contentPanel.classList.add("tab-pane");
        codeDiv.id = `${nextEvent.fileId}-code`
        codeDiv.classList.add('playbackWindow');

        contentPanel.appendChild(codeDiv);
        tabContent.appendChild(contentPanel);

        //point an editor to the new div
        CreateAceEditor(codeDiv, nextEvent.filePath, nextEvent.fileId);
    }
    numFilesCreated++;
    //console.log(`there are now ${numFilesCreated} files`);
}

function deleteFileEvent(nextEvent){
    //console.log(`deleting one of ${numFilesCreated} files`);
    if (numFilesCreated != 1)
    {
        //delete the editor that is no longer being used
        delete allEditors[nextEvent.fileId];

        //Delete the div in tabContent
        let tabPane = document.getElementById(`${nextEvent.fileId}-content`);
        tabPane.parentNode.removeChild(tabPane);

        //delete the tab from tabList
        let fileTab = document.getElementById(nextEvent.fileId);
        fileTab.parentNode.removeChild(fileTab);
    }
    numFilesCreated--;
    //console.log(`there are ${numFilesCreated} files left`);
}