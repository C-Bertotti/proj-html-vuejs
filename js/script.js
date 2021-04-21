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
                '1',
                '2',
                '3',
                '4',
                '5',
                '6'
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

    },
    methods: {
        
        

        
        
    }
    
});