export const defaultState = {
    step: 1,
    stepMin: 1,
    StepMax: 4,

    username: '',
    password: '',
    passwordCopy: '',

    mobileShowSettings: false,

    usernameMessage: 'between 5 and 15 symbols',
    passwordMessage: '6 symbols or more',
    passwordCopyMessage: '6 symbols or more',
    passwordInputType: 'password',
    passwordCopyInputType: 'password',

    avatarConfig: {
        sex: 'man',
        faceColor: '#F9C9B6',
        hatStyle: 'beanie',
        hatColor: '#E0DDFF',
        shirtStyle: 'hoody',
        shirtColor: '#FC909F',
        glassesStyle: 'round',
        mouthStyle: 'laugh',
        earSize: 'small',
        hairStyle: 'normal',
        hairColor: '#000',
        eyeStyle: 'oval',
        noseStyle: 'short',
        bgColor: '#FFF',
    },

    avatarConfigOptions: {
        sex: {
            optionView: 'Sex',
            choices: ['man', 'woman'],
            choicesView: ['man', 'woman'],
            isColor: false
        },
        faceColor: {
            optionView: 'Face Color',
            choices: ['#FFEDEF', '#F9C9B6', '#AC6651', '#77311D'],
            choicesView: ['Seashell', 'Apricot', 'Coast', 'Topaz'],
            isColor: true
        },
        hatStyle: {
            optionView: 'Hat Style',
            choices: ['none', 'beanie', 'turban'],
            choicesView: ['No hat', 'Beanie', 'Turban'],
            isColor: false
        },
        hatColor: {
            optionView: 'Hat Color',
            choices: ['#000', '#FFF', '#E0DDFF', '#D2EFF3', '#FFEDEF', '#FFEBA4', '#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#F9C9B6', '#AC6651', '#77311D'],
            choicesView: ['Black', 'White', 'Calm', 'Azure', 'Seashell', 'Mellow', 'Lavender', 'Sky', 'Salmon', 'Canary', 'Apricot', 'Coast', 'Topaz'],
            isColor: true
        },
        shirtStyle: {
            optionView: 'Shirt Style',
            choices: ['short', 'polo', 'hoody'],
            choicesView: ['T-shirt', 'Polo', 'Hoody'],
            isColor: false
        },
        shirtColor: {
            optionView: 'Shirt Color',
            choices: ['#000', '#FFF', '#E0DDFF', '#D2EFF3', '#FFEDEF', '#FFEBA4', '#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#F9C9B6', '#AC6651', '#77311D'],
            choicesView: ['Black', 'White', 'Calm', 'Azure', 'Seashell', 'Mellow', 'Lavender', 'Sky', 'Salmon', 'Canary', 'Apricot', 'Coast', 'Topaz'],
            isColor: true
        },
        glassesStyle: {
            optionView: 'Glasses Style',
            choices: ['none', 'round', 'square'],
            choicesView: ['No glasses', 'Round glasses', 'Square glasses'],
            isColor: false
        },
        mouthStyle: {
            optionView: 'Mouth Style',
            choices: ['laugh', 'smile', 'peace'],
            choicesView: ['Laugh', 'Smile', 'Peace'],
            isColor: false
        },
        earSize: {
            optionView: 'Ear Size',
            choices: ['small', 'big'],
            choicesView: ['Small Ears', 'Big Ears'],
            isColor: false
        },
        hairStyle: {
            optionView: 'Hair Style',
            choices: ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort'],
            choicesView: ['Normal hair', 'Thick hair', 'Mohawk hair', 'Woman long hair', 'Woman short'],
            isColor: false
        },
        hairColor: {
            optionView: 'Hair Color',
            choices: ['#000', '#FFF', '#E0DDFF', '#D2EFF3', '#FFEDEF', '#FFEBA4', '#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#F9C9B6', '#AC6651', '#77311D'],
            choicesView: ['Black', 'White', 'Calm', 'Azure', 'Seashell', 'Mellow', 'Lavender', 'Sky', 'Salmon', 'Canary', 'Apricot', 'Coast', 'Topaz'],
            isColor: true
        },
        eyeStyle: {
            optionView: 'Eye Style',
            choices: ['oval', 'smile', 'circle'],
            choicesView: ['Oval', 'Smile', 'Circle'],
            isColor: false
        },
        noseStyle: {
            optionView: 'Nose Style',
            choices: ['short', 'round', 'long'],
            choicesView: ['Short nose', 'Round nose', 'Long nose'],
            isColor: false
        },
        bgColor: {
            optionView: 'Background Color',
            choices: ['#000', '#FFF', '#E0DDFF', '#D2EFF3', '#FFEDEF', '#FFEBA4', '#9287FF', '#6BD9E9', '#FC909F', '#F4D150', '#F9C9B6', '#AC6651', '#77311D'],
            choicesView: ['Black', 'White', 'Calm', 'Azure', 'Seashell', 'Mellow', 'Lavender', 'Sky', 'Salmon', 'Canary', 'Apricot', 'Coast', 'Topaz'],
            isColor: true
        }
    },
}