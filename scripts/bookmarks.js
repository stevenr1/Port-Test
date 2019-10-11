'use strict';

const Bookmarks = (function() {

    function generateError(message){
        return `
        <section class="error-content">
            <button id="cancel-error">X</button>
            <p>${message}</p>
        </section>
        `;
    }

    function renderError() {
        if(STORE.error) {
            const el = generateError(STORE.error);
            $('.error-container').html(el);
        } else {
            $('.error-container').empty();
        
    }
}

function generateBookmarkHTML(bookmark) {
    return `
        <li class="js-bookmark-create" "bookmark-id"=${bookmark.id}>
            <form class="js-bookmark-form">
            <label for="bookmark-form">${bookmark.title}</label>
            <h2>Rating: ${bookmark.title}</h2>
            <button type="button" class="expanded-view-button">Details</button>
        <button type="button" class="delete-button">Delete</button>
    </form>
    </li>`;
}
function generateExpandedAccordion(bookmark) {
    
    return `
        <div class="js-bookmark-accordion" data-bookmark-id=${bookmark.id}>
            <form class = "js-bookmark-form" >
            <label="js-bookmark-form">${bookmark.title}</label>
            <h2>Rating: ${bookmark.rating}</h2>
            <a href="${bookmark.url}" target="_blank">Visit Site</a>
            <h2>${bookmark.desc}</h2>
            <div class="expanded-description">${bookmark.desc}</div>
        </form>
    </div>
    `;

}

function render() {
    renderError();
    let Bookmarks = [...STORE.Bookmarks];
    const BookmarkList = generateBookmarkHTML(BookmarkSTORE) 
    $('.bookmarks-container').empty();

    for (let i = 0; i < item.length; i++) {
        if (items[i].visible === false) {
            continue;
        }
        if (item[i].expanded === false) {
            $('.bookmarks-container').append(generateBookmarkElement(items[i]));
        } else {
            $('.bookmarks-container').append(generateCreateBookmark(items[i]));
        }
    }
};

function handleCreateBookmark() {
    $('.js-bookmark-form').on('submit', event => {

        event.preventDefault();

        let title = $('.js-title-submit').val();
        let url = $('.js-url-submit').val();
        let rating = $('.js-rating-submit').val();
        let description = $('.js-description-submit').val();
        api.createBookmark(title, url, description, rating)
        .then(res => {
            STORE.addBookmark(res);
            render();
        })
        .catch((err) => {
            STORE.setError(err.message);
            renderError(); 
        });
    });
};

function getIdFromElement(bookmark) {
    return $(bookmark).closest
    .closest('.js-bookmark-submit')
    .attr('id');
}

function handleDeleteBookmark() {
    $('.bookmarks-container').on('click', '.delete-button', event => {
        const bookmarkID = getIDFromElemnet(event.currentTarget);
        api.deleteBookmark(id)
        .then(res => {
            console.log(res);
            STORE.findAndDelete(id)
            render();
        })
        .catch((err) => {
            STORE.setError(err.message);
            renderError();
        });
    });
};

function handleExpandBookmark() {
    $('.bookmarks-container').on('click', '.expanded-view-button', event => {
        const id = getIdFromElement(event.currentTarget);
        const bookmark = STORE.bookmark.find(bookmark => bookmark.id === id);
        Object.assign(bookmark, {expanded: !item.expanded});
        render();
    });
}

function handleBookmarkCreate() {
    $('.js-bookmark-create').on('click', '.js-bookmark-create', event => {

        event.preventDefault();
        const formElement = document.querySelector('.js-book-create');
        const formObject = FormData(formElement);
        formObject.url = SubmitURL(formObject.url);
        api.createBookmark(formObject)
            .then(BookmarkList => {
                return STORE.add(BookmarkList);
            })
    })
}

function handleFilter() {
    $('.js-rating-filter').on('submit', event => {
        event.preventDefault();
        console.log('filter');
        const rating = $('select').val();
        STORE.filterRating(rating);
        render();
    });

};

function handleBindEvents() {
    handleCreateBookmark();
    handleBookmarkCreate();
    handleExpandedAccordion();
    handleUpdateBookmark();
    handleDeleteBookmark();
    handleExpandBookmark();
    handleFilter();
}

return {
    handleBindEvents,
    render,
};

});


