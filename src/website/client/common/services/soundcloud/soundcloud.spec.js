
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

        it('Featured tracks correct params', function (done) {let data = null;
            $httpBackend.when('GET', '/tracks').respond({});

            soundcloundAPI.getFeaturedTracks().then(response => {

            });
            $httpBackend.expectGET('/tracks');
            $httpBackend.flush();

            done();
        });
    });

});