/**
 * Created by dannyyassine on 2017-12-04.
 */

const SoundcloundAPI = (function (restangular) {

    const defaultParams = {
        client_id: 'ShH74NlijJdrezMwJlhCWxRr4TlUqG3U'
    };

    const getFeaturedTracks = () => {
        const params = defaultParams;
        params.q = "secret%20of%20mana";
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    const searchTracks = (searchText) => {
        const params = defaultParams;
        params.q = searchText;
        let tracks = restangular.all('/tracks');
        return tracks.getList(params);
    };

    return {
        getFeaturedTracks,
        searchTracks
    }

});

module.exports = SoundcloundAPI;