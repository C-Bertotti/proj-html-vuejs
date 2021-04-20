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
            path: '../img/slider/',
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
                        inIllustration: [1]
                    },
                    {
                        famiglia: 'eucalipto',
                        colore: 'viola',
                        direzione: 'dx',
                        url: 'eucalipto-viola-dx.png',
                        completeUrl: '',
                        inIllustration: [1]
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
                        inIllustration: [1]
                    },
                    {
                        famiglia: 'farfalla',
                        colore: null,
                        direzione: 'sx',
                        url: 'farfallasx.png',
                        completeUrl: '',
                        inIllustration: [1]
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
                        inIllustration: [1,]
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
                        inIllustration: [1,]
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
                        completeUrl: ''
                    },
                    {
                        illustration: 1,
                        url: 'main_1-2.png',
                        completeUrl: ''
                    },
                    {
                        illustration: 1,
                        url: 'main_2.png',
                        completeUrl: ''
                    },
                    {
                        illustration: 1,
                        url: 'main_3.png',
                        completeUrl: ''
                    },
                ]  
            },
            illustrations: [
                {
                    illustrationNumber: null,
                    elements: []
                }
            ]
        },
    },
    mounted: function() {
        this.slider.commonElements.completePath = (this.slider.path + this.slider.commonElements.folderName);
        console.log(this.slider.commonElements.completePath);

        (this.slider.commonElements.elements).forEach( (item) => {
            item.completeUrl = (this.slider.commonElements.completePath + item.url);
            console.log(item);
        });

        this.slider.mainElements.completePath = (this.slider.path + this.slider.mainElements.folderName);
        console.log(this.slider.mainElements.completePath);

        (this.slider.mainElements.elements).forEach( (item) => {
            item.completeUrl = (this.slider.mainElements.completePath + item.url);
            console.log(item);
        });

    }
});