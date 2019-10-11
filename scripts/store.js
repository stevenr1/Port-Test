'use strict';

const STORE = (function() {
    function add(bookmark) {
        object.expanded = false;
        object.visible = true;
        return bookmark;
    };

    function findById(id) {
        return this.bookmarks.find(bookmark => bookmark.id === id);
    };

    function findAndDelete(id) {
        this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
    };

    function findAndUpdate(id, newData) {
        const bookmark = this.findByID(id);
        if (bookmark !== undefined) {
            Object.assign(bookmark, newData);
        }
    };

    function toggleExpandedFilter() {
        this.expanded = !this.expanded;
    };

    function setFilterByRating() {
        this.items.forEach(item => {
            if(item.rating >= minRating) {
                item.visible = true;
            } else { 
                item.visible = false;
        }});
    };

    return {
        bookmarks: [],
        error: null,
        addBookmark,
        findById,
        findAndDelete,
        findAndUpdate,
        toggleExpandedFilter,
        setFilterByRating,

    };

});