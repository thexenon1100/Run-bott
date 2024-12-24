const Youtube = require('youtube-search-api');


Youtube.GetListByKeyword("song", false, 6).then(data => {
    console.log(data)
})