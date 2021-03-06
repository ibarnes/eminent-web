import { isMobileOnly as mob } from 'react-device-detect';

export const BREAKPOINTS = {
    mob: 767,
    tablet: 1180,
    xl: 1600,
}

const isMobile = window.innerWidth <= BREAKPOINTS.tablet || mob

export const MOB_LOCK_BREAKPOINT = 950;

export const screens = [
    {
        id: 0,
        active: true,
        background: ['#071118', '#04060B'],
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: true,
        textSecondary: '#485f56',
        text: `Your Future Starts Now...`,
        locked: false,
        logoColor: '#9dd8c4',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 1,
        active: false,
        background: ['#071118', '#04060B'],
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: true,
        textSecondary: '#485f56',
        text: `But what does your future look like?`,
        locked: false,
        logoColor: '#415B58',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 2,
        active: false,
        background: ['#071118', '#04060B'],
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: false,
        textSecondary: '#485f56',
        text: `We can help you connect the dots.`,
        locked: false,
        logoColor: '#7DAB9E',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 3,
        active: false,
        text: `We help future focused federal leaders achieve their goals`,
        text_2: `by using computer technology to come up with new and better ways of doing things.`,
        background: ['#091B23', '#08141D'],
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: false,
        textSecondary: '#7DAB9E',
        logoColor: '#7DAB9E',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 4,
        text: `During these unprecedented times, it's important to focus on what you can control.`,
        text_2: `To keep up you need an approach to manage uncertainty and stress`,
        active: false,
        background: ['#091B23', '#08141D'],
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: false,
        textSecondary: '#7DAB9E',
        locked: false,
        logoColor: '#7DAB9E',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 5,
        text: `To be seen as an effective leader and take your career to the next level you need a proven model:`,
        active: false,
        textColor: '#9dd8c4',
        footerTextColor: '#838A8E',
        isFooterShow: false,
        textSecondary: '#7DAB9E',
        background: ['#091B23', '#08141D'],
        logoColor: '#7DAB9E',
        bgScheduleBtn: '#678F7D',
        progressBorder: '#7E7E7E',
        blurBackground: true,
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#678F7D',
        schedulePopupBg: ['#050C11FF', '#0b1117'],
    },
    {
        id: 6,
        active: false,
        text: `Strategy`,
        custom_text1: 'Your Strategic technology team for your future projects.',
        custom_text2: 'We use a predictable delivery module to deliver.',
        custom_text3: 'We design & develop digital products that accelerate your career.',
        custom_text4: 'Assistance with navigating complex and time critical.',
        background: ['#899BA3', '#7A8F97'],
        textColor: '#F7F8F9',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#DDDDDD',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 7,
        active: false,
        text: `Transparency`,
        custom_text1: 'Improve communications, know sharing, status meetings, customer stories uses cases, success strategies, gap analysis.',
        custom_text2: 'Training, communication and preventing lock in.',
        background: ['#899BA3', '#7A8F97'],
        textColor: '#F7F8F9',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#DDDDDD',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 8,
        active: false,
        text: `Flexibility`,
        custom_text1: 'Iterate to great.',
        custom_text2: 'Adapt and overcome any situation.',
        custom_text3: 'Tailor contract and customer experiences to fit your needs. Support hybrid and remote work.',
        background: ['#899BA3', '#7A8F97'],
        textColor: '#F7F8F9',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#DDDDDD',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 9,
        active: false,
        text: `Selfless service`,
        custom_text1: 'Empathy',
        custom_text2: 'Focused on the well-being and growth of you and your people.',
        custom_text3: 'Helping you love your work.',
        custom_text4: 'Taking care of yourself so you can take care of others.',
        background: ['#899BA3', '#7A8F97'],
        textColor: '#F7F8F9',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#DDDDDD',
        menuBtnColor: '#fff',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 10,
        active: false,
        text: `We are here to guide you as you embark on this new journey.`,
        text_2: `Are you ready to accelerate your career and better serve the American People.`,
        background: ['#899BA3', '#7A8F97'],
        textColor: '#FFF',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#DDDDDD',
        menuBtnColor: '#e5e5e5',
        blurBackground: true,
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 11,
        active: false,
        text: `Choose your story:`,
        text_2: `You can grow your career, empower your team, and be seen as the expert in your organization through successful projects.`,
        choose_text1: 'Reduce Paperwork with AI and an Army of RPA BOTS',
        choose_text2: 'Leverage 0365 to Give Your Remote Teams Super Powers',
        choose_text3: 'Reinvent Budgeting and Performance with Blockchain or Helping Transform America through Blockchain',
        choose_text4: 'Using DevSecOps to Prevent Data Leaks',
        background: ['#BCC7CB', '#A4B6BC'],
        textColor: '#FFF',
        footerTextColor: '#E5E9EA',
        isFooterShow: true,
        locked: true,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#5B6E76',
        blurBackground: true,
        menuBtnColor: '#e5e5e5',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 12,
        text: `Tell us what the future looks like for you`,
        text_2: 'Schedule a call',
        active: false,
        background: ['#BCC7CB', '#A4B6BC'],
        textColor: '#FFF',
        footerTextColor: '#E5E9EA',
        isFooterShow: false,
        locked: true,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#5B6E76',
        blurBackground: true,
        menuBtnColor: '#e5e5e5',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    },
    {
        id: 13,
        text: `Thanks for your time, don't waste it`,
        text_2: 'Watch Again',
        active: false,
        background: ['#BCC7CB', '#A4B6BC'],
        textColor: '#FFF',
        footerTextColor: '#838A8E',
        isFooterShow: true,
        locked: true,
        logoColor: '#F7F8F9',
        bgScheduleBtn: '#B3C7C4',
        progressBorder: '#5B6E76',
        menuBtnColor: '#e5e5e5',
        schedulePopupTextColor: '#FFF',
        schedulePopupBg: ['#7E929C', '#B8C5C9'],
    }
]

export const schedulePopup = {
    options: [
        'Yes, for this project',
        'Yes, but not for this project',
        'No'
    ]
}

export const loaderScene = {
    asset: '../../assets/models/loader.fbx',
    hide: ['desk'],
    name: 'loader',
    
    campos: [28.863985066413242, 24.361609081184458, 71.78023469918882],
    target: [0,0,0],
    
    pointSize: 1.1,
    
    animation_duration: 3.5,
    
    parralax_y: true,

    gradient_offset: 1.5,

    
    
    colors: [            
        {
            colors: ['#ffffff', '#b9e9e9'],
            opacity: 1,
        },
        {
            opacity: 1,
            colors: ['#58676e']
        },
    ],

    

}

export const scenes = [
    {
        asset: isMobile ? '/assets/models/plague_mobile.fbx' : '/assets/models/plague.fbx',
        name: 'plague',

        particlesMaxSize: 35,
        particlesMinSize: 15,
        pointSize: 4.5,

        animation_duration: 1.2,

        parralax_y: true,

        perlin: true,
        
        gradient_offset: .6,

        secondary: ['secondary'],

            colors: [            
            {
                colors: ['#4f8f7c', '#ffffff'],
                opacity: .6,
            },
        ],


        extra_colors: [            
            {
                colors: ['#ffffff', '#ffffff'],
                opacity: 1,
            },
            {
                opacity: 1,
                colors: ['#58676e']
            },
        ],


        perlin_data: {
            rest: {
                timeAlpha: .0005,
                noiseRangeLow: 1,
                noiseRangeHigh: 4.5,
            },
            turbo: {
                timeAlpha: .002,
                noiseRangeLow: 1.5,
                noiseRangeHigh: 6.5,

            }
        }
    },
    {
        asset: '../../assets/models/transparency.fbx',
        name: 'transparency',

        pointSize: 7.5,

        animation_duration: 3,

        parralax_y: true,

        secondary: [],

        target: isMobile ?  
            [10.092826082155318, -3.6896404940743883, 19.182022908504738]
            :
            [86.6641622291196, 0.04645736737633993, -32.81238242446641],

        campos: isMobile ?
            [65.43976637476523, 388.45251926000935, 147.3365560084027]
            :
            [194.042946689535, 108.1545398054083, 250.94984772687513],
        
        tablet_target: [-59.59702154550529, -4.951250420613689, 24.438509367374362],
        tablet_campos: [47.78176291491011, 103.15683201741828, 308.2007395187159],

        gradient_offset: .6,

        addTransparency: true,
        
        colors: [           
            {
                colors: ['#ffffff', '#ffffff'],
                opacity: 1,
            },
            // {
            //     opacity: .6,
            //     colors: ['#ffffff']
            // },
        ] 
    },
    {
        asset: '../../assets/models/hands.fbx',
        hide: [],
        name: 'hands',
        
        pointSize: 1,
        
        animation_duration: 7,
        
        campos: isMobile ?

            [10.99925293972559, 3.3535135951720014, 78.47635100024775]
            :
            [37.79833657213544, 1.3750575489506531, 52.370702708543746],
        target: isMobile ?
            [-0.6760762361510282, 0.03159402398030095, -1.7213501102364468]
            :
            [18.380205797528756, -1.1953804911456667, -7.25673374887869],
        
        tablet_target: [-15.884296008394596, 0.5182578383351341, 3.8278913014881506],
        tablet_campos: [3.5338347662120064, 3.0886958784314418, 63.45532775891031],
            
        parralax_y: true,

        gradient_offset: 1.5,
        
        secondary: ['secondary'],

        no_randomise: true,
        
        colors: [           
            {
                colors: ['#ffffff'],
                opacity: 1,
            },
            {
                opacity: 1,
                colors: ['#58676e']
            },
        ] 
    },
    {
        asset: '../../assets/models/chess.fbx',
        hide: ['desk'],
        name: 'chess',
        
        pointSize: 2.3,
        
        animation_duration: 3.5,
        
        parralax_y: true,

        gradient_offset: 1.5,

        campos: isMobile ?
                [-89.73480098961055, 38.81684352701318, -30.206723923011168]
                :
                [-81.67509899930585, 41.26576587384788, -42.16556189213324],
        target: isMobile ?
            [-11.725189448098417, 4.6225119322588135, 15.365844250731252]
            :
            [-3.6654874577937173, 7.07143427909352, 3.407006281609179],

        secondary: ['secondary'],
        
        
        colors: [
            {
                colors: ['#ffffff', '#b9e9e9'],
                opacity: 1,
            },
            {
                opacity: 1,
                colors: ['#58676e']
            },
        ]
    },
    {
        asset: '../../assets/models/flex.fbx',
        hide: ['desk'],
        name: 'flex',
        
        pointSize: 1.8,
        
        animation_duration: 5,
        
        no_randomise: true,

        parralax_y: true,

        gradient_offset: 1.5,

        target: isMobile ?
            [7.5034629727557745, 16.38672982962438, 5.044918967608561]
            :
            [12.957061010336064, 14.965958399583872, -3.0187535262102014],
        campos: isMobile ?
            [-52.368595273396274, 35.289481589968815, -38.77811939093519]
            :
            [-35.809104631519496, 30.36236785058314, -38.712892163234294],
        
        secondary: ['pCube1', 'pCube2', 'pCube3'],

        colors: [
            {
                colors: ['#ffffff', '#b9e9e9'],
                opacity: 1,
            },
            {
                opacity: 1,
                colors: ['#58676e']
            },
        ]
    },
  
]