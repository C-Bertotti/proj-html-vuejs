var app = new Vue ({
    el: '#root',
    data: { 
        pages: [
            'home',
            'pages',
            'portfolio',
            'blog',
            'shop',
            'elements'
        ],
        slider: {
            path: 'img/slider/', 
            commonElements: {
                folderName: 'common/',
                completePath: '',
                elements: [
                    {
                        famiglia: 'eucalipto',
                        colore: 'verde',
                        direzione: 'dx',
                        url: 'eucalipto-verde-dx.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'eucalipto',
                        colore: 'verde',
                        direzione: 'sx',
                        url: 'eucalipto-verde-sx.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number: 1, 
                                position: 'l-b'
                            }
                        ]
                    },
                    {
                        famiglia: 'eucalipto',
                        colore: 'viola',
                        direzione: 'dx',
                        url: 'eucalipto-viola-dx.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number:1, 
                                position: 'r-t'
                            }
                        ]
                    },
                    {
                        famiglia: 'eucalipto',
                        colore: 'viola',
                        direzione: 'sx',
                        url: 'eucalipto-viola-sx.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'farfalla',
                        colore: null,
                        direzione: 'dx',
                        url: 'farfalladx.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number:1, 
                                position: 'l-t'
                            }
                        ]
                    },
                    {
                        famiglia: 'farfalla',
                        colore: null,
                        direzione: 'sx',
                        url: 'farfallasx.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number:1, 
                                position: 'r-c'
                            }
                        ]
                    },
                    {
                        famiglia: 'felce',
                        colore: null,
                        direzione: null,
                        url: 'felce.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'foglie',
                        colore: null,
                        direzione: null,
                        url: 'foglie.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number:1, 
                                position: 'r-b'
                            }
                        ]
                    },
                    {
                        famiglia: 'nuvola',
                        colore: 'rosa',
                        direzione: null,
                        url: 'nuvola-rosa.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'nuvola',
                        colore: 'verde',
                        direzione: null,
                        url: 'nuvola-verde.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'ondulina',
                        colore: null,
                        direzione: null,
                        url: 'ondulina.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'quercia',
                        colore: null,
                        direzione: 'dx',
                        url: 'quercia-dx.png',
                        completeUrl: '',
                        inIllustration: []
                    },
                    {
                        famiglia: 'quercia',
                        colore: null,
                        direzione: 'sx',
                        url: 'quercia-sx.png',
                        completeUrl: '',
                        inIllustration: [
                            {
                                number:1, 
                                position: 'l-c'
                            }
                        ]
                    }
                ]  
            },
            mainElements: {
                folderName: 'main/',
                completePath: '',
                elements: [
                    {
                        illustration: 1,
                        url: 'main_1.png',
                        completeUrl: '',
                        position: 'left',

                    },
                    {
                        illustration: 1,
                        url: 'main_1-2.png',
                        completeUrl: '',
                        position: 'right'
                    },
                    {
                        illustration: 2,
                        url: 'main_2.png',
                        completeUrl: '',
                        position: null
                    },
                    {
                        illustration: 3,
                        url: 'main_3.png',
                        completeUrl: '',
                        position: null
                    }
                ]  
            },
            illustrationIndex: 1,
            illustration: {
                illustrationNumber: null,
                elements: []
            },
            illustrations: [
            ],
            elementClass: ''
        },
        portfolio: {
            path: 'img/portfolio/port-img-',
            works: [
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '1'
                },
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '2'
                },
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '3'
                },
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '4'
                },
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '5'
                },
                {
                    desc: 'Illustrations of novels',
                    sec: 'Illustration',
                    imgNum: '6'
                }
            ]
        },
        process: {
            styleFull: 'fas',
            styleEmpty: 'far',

            family: 'fa-',
            steps: [
                {
                    title: 'First theres an idea',
                    desc: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'lightbulb',
                    full: true,
                    color: 'primaryColorDark'
                },
                {
                    title: 'Then we talk about',
                    desc: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'comment',
                    full: false,
                    color: 'supportColor-1'
                },
                {
                    title: 'And we think about',
                    desc: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'cloud',
                    full: true,
                    color: 'supportColor-2'
                },
                {
                    title: 'So we draw along',
                    desc: 'Lorem ipsum dolor sit, conetu adipisc sed be et ore aliqua pleasure itself.',
                    icon: 'pencil-alt',
                    full: true,
                    color: 'supportColor-3'
                }
            ]
        },
        blog: {
            pathImg: 'img/blog/blog-',
            articles: [
                {
                    title: 'This way, loves: a detailed guide through new design',
                    author: 'Emily Fields',
                    imgNum: '1.jpg',
                    completePath: '',
                    date: {
                        day: '07',
                        month: 'may',
                        year: '19'
                    }
                },
                {
                    title: 'This way, loves: a detailed guide through new design',
                    author: 'Emily Fields',
                    imgNum: '2.jpg',
                    completePath: '',
                    date: {
                        day: '07',
                        month: 'may',
                        year: '19'
                    }
                },
                {
                    title: 'Introduce Richard Laperri??re of those amazing features',
                    author: 'Emily Fields',
                    imgNum: '3.jpg',
                    completePath: '',
                    date: {
                        day: '07',
                        month: 'may',
                        year: '19'
                    }
                }  
            ]
        },
        footer: {
            mail: 'maree.qode@gmail.com',
            phone: '+44645 321 789',
            address: {
                street: 'Avenue d???Auderghem 10',
                city: '1040 Brussels, Belgium'
            },
            social: [
                {
                    socialName: 'twitter',
                    socialLink: 'https://twitter.com/?lang=it',
                    socialIcon: 'fab fa-twitter' // associare con v-bind alla classe del tag i
                },
                {
                    socialName: 'pinterest',
                    socialLink: 'https://www.pinterest.it/',
                    socialIcon: 'fab fa-pinterest-p' // associare con v-bind alla classe del tag i
                },
                {
                    socialName: 'facebook',
                    socialLink: 'https://www.facebook.com/',
                    socialIcon: 'fab fa-facebook-f' // associare con v-bind alla classe del tag i
                },
                {
                    socialName: 'linkedin',
                    socialLink: 'https://it.linkedin.com/',
                    socialIcon: 'fab fa-linkedin-in' // associare con v-bind alla classe del tag i
                }
            ]
        } 
    },
    mounted: function() {
        //riempire dati vuoti dei percorsi in commonElements
        this.slider.commonElements.completePath = (this.slider.path + this.slider.commonElements.folderName);
        console.log(this.slider.commonElements.completePath);

        (this.slider.commonElements.elements).forEach( (item) => {
            item.completeUrl = (this.slider.commonElements.completePath + item.url);
            console.log(item);
        });

        //riempire dati vuoti dei percorsi in mainElements
        this.slider.mainElements.completePath = (this.slider.path + this.slider.mainElements.folderName);
        console.log(this.slider.mainElements.completePath);

        (this.slider.mainElements.elements).forEach( (item) => {
            item.completeUrl = (this.slider.mainElements.completePath + item.url);
            console.log(item);
        });
        console.log('fine');
        
        //inserire nell'array illustrazione i vari elementi comuni che la compongono
        (this.slider.commonElements.elements).forEach( (item) => {
            if( (item.inIllustration).length > 0) {
                (item.inIllustration).forEach( (subitem) => {

                    if ( subitem.number == this.slider.illustrationIndex ) {
                        console.log(item);
                        this.slider.elementClass = subitem.position;
                        item.class = this.slider.elementClass;
                        (this.slider.illustration.elements).push(item);
                    }
                });
            }
        });

        //inserire nell'array illustrazione i vari elementi main che la compongono
        (this.slider.mainElements.elements).forEach( (item) => {
            if ( item.illustration == this.slider.illustrationIndex ) {
                (this.slider.illustration.elements).push(item);
            }            
        });
        
        this.slider.illustration.illustrationNumber = this.slider.illustrationIndex;

        //riempire dati vuoti dei percorsiImg in blog - article
        (this.blog.articles).forEach( (article) => {
            article.completePath = (this.blog.pathImg + article.imgNum);
            console.log(article);
        });
    },
    methods: {
        
        

        
        
    }
    
});