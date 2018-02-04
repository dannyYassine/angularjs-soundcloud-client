
import restangular from 'restangular';
import './../index';
import angular from 'angular';
import SoundCloundAPI from './soundcloud.api.service';

describe('SoundCloud API Service', function () {

    let soundcloudConfigAPI_MOCK = {
        clientID: function () {
            return '123';
        }
    };

    it('method getFeaturedTracks should be defined', function () {
        let soundcloudAPI = SoundCloundAPI({}, soundcloudConfigAPI_MOCK);
        expect(soundcloudAPI.getFeaturedTracks).toBeDefined();
    });

    it('method getUser should be defined', function () {
        let soundcloudAPI = SoundCloundAPI({}, soundcloudConfigAPI_MOCK);
        expect(soundcloudAPI.getUser).toBeDefined();
    });

    it('method getUserTracks should be defined', function () {
        let soundcloudAPI = SoundCloundAPI({}, soundcloudConfigAPI_MOCK);
        expect(soundcloudAPI.getUserTracks).toBeDefined();
    });

    it('method searchTracks should be defined', function () {
        let soundcloudAPI = SoundCloundAPI({}, soundcloudConfigAPI_MOCK);
        expect(soundcloudAPI.searchTracks).toBeDefined();
    });

    describe('Restangular testing methods', function () {
        let Restangular, $httpBackend, soundcloundAPI;


        beforeEach(function () {
            angular.mock.module('sdn.api.services');
            angular.mock.inject(function ($injector, $controller, _$httpBackend_, $rootScope, _Restangular_) {
                $httpBackend = _$httpBackend_;
                Restangular = _Restangular_;
                soundcloundAPI = $injector.get('soundcloundAPI');
            });
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('Featured tracks correct params', function () {
            let data = null;
            soundcloundAPI.getFeaturedTracks().then(response => {
                data = response;
            });
            $httpBackend.when('GET', 'https://api.soundcloud.com/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=30&q=chrono+trigger').respond(200, []);
            $httpBackend.expectGET('https://api.soundcloud.com/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=30&q=chrono+trigger');
            $httpBackend.flush();

            expect(data).not.toBe(null);
        });

        it('Get user with id', function () {
            let data = null;
            soundcloundAPI.getUser('1').then(response => {
                data = response;
            });
            $httpBackend.when('GET', 'https://api.soundcloud.com/users/1?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U').respond(200, []);
            $httpBackend.expectGET('https://api.soundcloud.com/users/1?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U');
            $httpBackend.flush();

            expect(data).not.toBe(null);
        });

        it('Get user tracks', function () {
            let data = null;
            soundcloundAPI.getUserTracks('1').then(response => {
                data = response;
            });
            $httpBackend.when('GET', 'https://api.soundcloud.com/users/1/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=8').respond(200, []);
            $httpBackend.expectGET('https://api.soundcloud.com/users/1/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=8');
            $httpBackend.flush();

            expect(data).not.toBe(null);
        });

        it('Get search tracks', function () {
            let data = null;
            soundcloundAPI.searchTracks('chrono trigger').then(response => {
                data = response;
            });
            $httpBackend.when('GET', 'https://api.soundcloud.com/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=30&q=chrono+trigger').respond([]);
            $httpBackend.expectGET('https://api.soundcloud.com/tracks?client_id=ShH74NlijJdrezMwJlhCWxRr4TlUqG3U&limit=30&q=chrono+trigger');
            $httpBackend.flush();

            expect(data).not.toBe(null);
        });
    });

});