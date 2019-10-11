'use strict';

$(() => {
Bookmarks.bindEventListeners();
API.getBookmarksList()
    .then(allBookmarks => {
    allBookmarks.forEach(bookmark => STORE.add(bookmark));
    Bookmarks.render();
    });
});