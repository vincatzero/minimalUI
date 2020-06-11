//global object with events
const eventsObject = {
    "events": [
        {
            "id": "ev-0",
            "timestamp": 1591891366761,
            "createdByDevGroupId": "devGroupId-1",
            "eventSequenceNumber": 0,
            "type": "CREATE DIRECTORY",
            "directoryId": "dirId-0",
            "directoryPath": "/",
            "parentDirectoryId": null
        },
        {
            "id": "ev-1",
            "timestamp": 1591891375912,
            "createdByDevGroupId": "devGroupId-1",
            "eventSequenceNumber": 1,
            "type": "CREATE FILE",
            "fileId": "fileId-0",
            "filePath": "/test.txt",
            "parentDirectoryId": "dirId-0"
        },
        {
            "id": "ev-2",
            "timestamp": 1591891376954,
            "createdByDevGroupId": "devGroupId-1",
            "eventSequenceNumber": 2,
            "type": "INSERT",
            "fileId": "fileId-0",
            "character": "a",
            "previousNeighborId": null,
            "lineNumber": 1,
            "column": 1,
            "pastedEventId": null
        },
        {
            "id": "ev-3",
            "timestamp": 1591891377190,
            "createdByDevGroupId": "devGroupId-1",
            "eventSequenceNumber": 3,
            "type": "INSERT",
            "fileId": "fileId-0",
            "character": "b",
            "previousNeighborId": "ev-2",
            "lineNumber": 1,
            "column": 2,
            "pastedEventId": null
        },
        {
            "id": "ev-4",
            "timestamp": 1591891377379,
            "createdByDevGroupId": "devGroupId-1",
            "eventSequenceNumber": 4,
            "type": "INSERT",
            "fileId": "fileId-0",
            "character": "c",
            "previousNeighborId": "ev-3",
            "lineNumber": 1,
            "column": 3,
            "pastedEventId": null
        }
    ]
};