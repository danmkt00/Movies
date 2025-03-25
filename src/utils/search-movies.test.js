import searchMovies from './search-movies.js';

describe('searchMovie', () => {
    test('returns a film when we have correct input', () => {
        const input = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 2,
                dataName: 'joker',
                src: './assets/joker.jpg',
                title: 'Joker'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        const result = [
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        expect(searchMovies(input, 'ir')).toEqual(result);
    });
    test('returns several movies', () => {
        const input = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 2,
                dataName: 'joker',
                src: './assets/joker.jpg',
                title: 'Joker'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        const result = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        expect(searchMovies(input, 'i')).toEqual(result);
    });
    test('returns nothing when no match', () => {
        const input = [
            {
                id: 1,
                dataName: 'spiderman',
                src: './assets/spiderman.jpg',
                title: 'Spiderman'
            },
            {
                id: 2,
                dataName: 'joker',
                src: './assets/joker.jpg',
                title: 'Joker'
            },
            {
                id: 3,
                dataName: 'ironman',
                src: './assets/ironman.jpg',
                title: 'ironman'
            }
        ];
        const result = [];
        expect(searchMovies(input, 'aaa')).toEqual(result);
    });
    describe('default values', () => {
        describe('returns all the films when no second param', () => {
            const input = [
                {
                    id: 1,
                    dataName: 'spiderman',
                    src: './assets/spiderman.jpg',
                    title: 'Spiderman'
                },
                {
                    id: 2,
                    dataName: 'joker',
                    src: './assets/joker.jpg',
                    title: 'Joker'
                },
                {
                    id: 3,
                    dataName: 'ironman',
                    src: './assets/ironman.jpg',
                    title: 'ironman'
                }
            ];
            const result = [
                {
                    id: 1,
                    dataName: 'spiderman',
                    src: './assets/spiderman.jpg',
                    title: 'Spiderman'
                },
                {
                    id: 2,
                    dataName: 'joker',
                    src: './assets/joker.jpg',
                    title: 'Joker'
                },
                {
                    id: 3,
                    dataName: 'ironman',
                    src: './assets/ironman.jpg',
                    title: 'ironman'
                }
            ];
            expect(searchMovies(input)).toEqual(result);
        });
    });
});
