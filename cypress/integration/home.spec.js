import { HomePageObject } from '../pages/home.po.js'
import { PlayerPage } from '../pages/player.po.js'

describe('Home Page', function () {
    let homePage, playerPage;

    beforeEach(() => {
        homePage = new HomePageObject();
        homePage.routeTracks();
        homePage.go();
        homePage.waitTracks();
    });

    it('should download list of songs', function () {
        homePage.testShouldHaveSongs();
    });

    it('should play a song from list', function () {
        homePage.playSong();

        playerPage = new PlayerPage();

        playerPage.shouldBePlaying();
        playerPage.shouldBeVisible();
    });

    it('should pause a song from player', function () {
        homePage.playSong();

        playerPage = new PlayerPage();
        playerPage.pauseSong();

        playerPage.shouldBePaused();
    });

    it('should hide player by stopping song', function () {
        homePage.playSong();

        playerPage = new PlayerPage();
        playerPage.stopSong();

        playerPage.shouldBeHidden();
    });

    it('should have href attribute for user detail', function () {
        homePage.testShouldHaveUserHrefInTrack();
    });

});