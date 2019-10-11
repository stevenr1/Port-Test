'use strict';

const api = (function() {

    const BASE_URL = 'http://thinkful-list-api.herokuapp.com/stevenr/bookmarks';

function listApiFetch(...args) {
    let error;
    return fetch(...args)
    .then(res => {
        if(!res.ok) {
            error = { code: res.status };
        }

        return res.json();
    })
    .then(data => {
        if(error) {
            error.message = data.message;
            return Promise.reject(error);
        }
        return data;
    });
}

function getBookmarksList() {
    listApiFetch(`${BASE_URL}`);
}


function createBookmark(formObject) {
    const postData = {
        title: formObject.title,
        url: formObject.url,
        desc: formObject.desc,
        rating: null
    };
    if (formObj.rating !== '-1') {
        Object.assign(postData, {rating: formObject.rating});
    }
    return listApiFetch(`${BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
}

function findBookmarksFromList(id) {
    return fetchSpecial(`${BASE_URL}/${id}`);
}

function updateBookmark(id, updateData) {
    return listApiFetch(`${BASE_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData)
    });
}

function deleteBookmark(id) {
    return listApiFetch(`{BASE_URL}/${id}`, {
        method: 'DELETE',
    });
}

return {
    getBookmarksList,
    createBookmark,
    findBookmarksFromList,
    updateBookmark,
    deleteBookmark
};

}());