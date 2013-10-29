//shared data

app.factory('Wines',function(){
    var wines;
    wines = [
        {
            id: 0,
            url: 'cabernet-sauvignon',
            title: 'CABERNET SAUVIGNON',
            tagline: 'RICH & BELVETY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buyUrl: 'http://apple.com/store',
        },
        {
            id: 1,
            url: 'chillable-red',
            title: 'CHILLABLE RED',
            tagline: 'JUICY & SMOOTH',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buyUrl: 'http://apple.com/store',
            process: [
                {
                    title: 'how we make wine',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/77689262'
                },
                {
                    title: 'how we drink it',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/73689262'
                },
                {
                    title: 'why we are the best',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/57689262'
                }
            ]
        },
        {
            id: 2,
            url: 'moscato',
            title: 'MOSCATO',
            tagline: 'LUSH & FRUITY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buyUrl: 'http://apple.com/store',
        },
        {
            id: 3,
            url: 'chardonnay',
            title: 'CHARDONNAY',
            tagline: 'BREEZY & REFRESH',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buyUrl: 'http://apple.com/store',
            recipes: [
                {
                    title: 'chanchito al horno'
                },
                {
                    title: 'capellan monito'
                },
                {
                    title: 'comestibles varios'
                }
            ],
            process: [
                {
                    title: 'how we make wine',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/77689262'
                },
                {
                    title: 'how we drink it',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/73689262'
                },
                {
                    title: 'why we are the best',
                    thumbnail: 'http://lorempixel.com/30/30/food/',
                    videourl: 'http://vimeo.com/57689262'
                }
            ]
        },
        {
            id: 4,
            url: 'cabernet-sauvignon',
            title: 'CABERNET SAUVIGNON DEL PINO',
            tagline: 'RICH & BELVETY',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            buyUrl: 'http://apple.com/store',
        },
    ];
    return wines;


});

app.factory('Recipes',function(){
    var recipes;
    recipes = [
        {
            id: 0,
            url: 'rosemary-filet-mignon',
            title: 'ROSEMARY FILET MIGNON',
            pairing: 'CHARDONNAY',
            ingredients: [
                {ingredient: '16 blini pancakes'},
                {ingredient: '5 tbsp créme fraîche'},
                {ingredient: '1 tbsp creamed horseradish, according to taste'},
                {ingredient: '150g smoked salmon, cut into small pieces'}
            ],
            method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            bigimage: 'images/recipe0.jpg',
            smallimage: 'images/recipe0.jpg'
        },
        {
            id: 1,
            url: 'grilled-chicken-marengo',
            title: 'GRILLED CHICKEN MARENGO',
            pairing: 'CHILLABLE RED',
            ingredients: [
                {ingredient: '16 blini pancakes'},
                {ingredient: '5 tbsp créme fraîche'},
                {ingredient: '1 tbsp creamed horseradish, according to taste'},
                {ingredient: '150g smoked salmon, cut into small pieces'}
            ],
            method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            bigimage: 'images/recipe1.jpg',
            smallimage: 'images/recipe1.jpg'
        },
        {
            id: 2,
            url: 'shrimp-scampi-linguine',
            title: 'SHRIMP SCAMPI LINGUINE',
            pairing: 'MOSCATO',
            ingredients: [
                {ingredient: '16 blini pancakes'},
                {ingredient: '1 tbsp creamed horseradish, according to taste'},
                {ingredient: '150g smoked salmon, cut into small pieces'}
            ],
            method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            bigimage: 'images/recipe2.jpg',
            smallimage: 'images/recipe2.jpg'
        },
        {
            id: 3,
            url: 'smoked-salmon-canapes',
            title: 'SMOKED SALMON CANAPES',
            pairing: 'CHARDONNAY',
            ingredients: [
                {ingredient: '16 blini pancakes'},
                {ingredient: '1 tbsp creamed horseradish, according to taste'},
                {ingredient: '150g smoked salmon, cut into small pieces'}
            ],
            method: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
            bigimage: 'images/recipe3.jpg',
            smallimage: 'images/recipe3.jpg'
        }

    ];
    return recipes;

});
