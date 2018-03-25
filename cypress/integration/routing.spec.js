import {TrackCardPageObject} from "../pages/trackCard.po";
import {HomePageObject} from '../pages/home.po';
import {NavHeaderPageObject} from "../pages/navHeader.po";
import {SearchPageObject} from "../pages/search.po";

describe('All routes', function () {

    let navHeader, search, trackCardPageObject;

    beforeEach(() => {
        navHeader = new NavHeaderPageObject();
        search = new SearchPageObject();
        trackCardPageObject = new TrackCardPageObject();

        cy.visit('/');
    });

    it('should navigate to home page', function () {
        cy.get('.home')
            .should('be.visible');
    });

    it('should re-direct to home page if route not found', function () {
        cy.visit('/yo');

        new HomePageObject()
            .testShouldBeVisible()
    });

    it('should navigate to user detail from home page', function () {
        let trackCardPageObject = new TrackCardPageObject();
        trackCardPageObject.clickUserDetailLink();

        cy.get('.user-detail')
            .should('be.visible');
    });

    it('should navigate to user detail from search page', function () {
        navHeader.clickSearch();

        search.type('final fantasy');

        trackCardPageObject.clickUserDetailLink();

        cy.get('.user-detail')
            .should('be.visible');
    });

    it('should navigate to search page', function () {
        navHeader.clickSearch();

        cy.get('.search')
            .should('be.visible');
    });

});