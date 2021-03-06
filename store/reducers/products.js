import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'
const initialState = {
    wines: [
        {
            id: '12x1',
            name: 'Lacrima Dulce',
            grapes: 'Muscat Grapes',
            producer: 'Cricova',
            type: 'Semisweet White Sparkling Wine',
            price: 145,
            description: 'This luxury sparkling white wine is a perfect party wine. The semisweet flavor lends to easy consumption and leaves a very neutral and pleasant aftertaste. This wine is remarkable for its shiny light straw color, full, nicely-balanced taste and rich flowery bouquet with delicate aromas.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/DulceLacrima.png',
            wineImages: [
                {
                    label: 'Lacrima Dulce',
                    imgPath:
                        '/static/assets/bottles/LacrimaDuulce.png',
                },
                {
                    label: 'Ch',
                    imgPath:
                        '/static/assets/bottles/2-whites-1-red.jpg',
                },
                {
                    label: 'Bali, Indonesia',
                    imgPath:
                        '/static/assets/bottles/mimi-chardonnay-2.jpg',
                },
                {
                    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
                    imgPath:
                        '/static/assets/bottles/Mimi-Chardonnay.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rose.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rosu-De-Bulboaca.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
                }
            ]

        },
        {
            id: '3x12',
            name: 'Cabernet Sauvignon',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Castel Mimi',
            type: 'Rose',
            price: 125,
            description: 'This Cabernet Sauvignon has a delicately balanced palate between dry acidity and sweet freshness; a mix of floral and strawberry taste combined with citrus and elderflower. This is the perfect, easy to drink summer wine that is a guaranteed hit for all tastes.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/bottles/Mimi-Rose.jpg',
            wineImages: [
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rose.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rosu-De-Bulboaca.jpg',
                },
                {
                    label: 'Lacrima Dulce',
                    imgPath:
                        '/static/assets/bottles/LacrimaDuulce.png',
                },
                {
                    label: 'Ch',
                    imgPath:
                        '/static/assets/bottles/2-whites-1-red.jpg',
                },
                {
                    label: 'Bali, Indonesia',
                    imgPath:
                        '/static/assets/bottles/mimi-chardonnay-2.jpg',
                },
                {
                    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
                    imgPath:
                        '/static/assets/bottles/Mimi-Chardonnay.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
                }
            ]

        },
        {
            id: '2x12',
            name: 'Sauvignon Blanc',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Castel Mimi',
            type: 'White Wine',
            price: 149,
            description: 'The Sauvignon Blanc from Castel Mimi has a memorable freshness. Finely balanced and with a bright yellow-green colour, this classic grape is a great addition to any wine menu or dinner service. What is special about Castel Mimi’s Sauvignon Blanc is its particular blackcurrant aftertaste and supreme freshness. We recommend to enjoy this wine with baked dishes or pies, seafood and fruity desserts.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
            wineImages: [
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
                },
                {
                    label: 'Lacrima Dulce',
                    imgPath:
                        '/static/assets/bottles/LacrimaDuulce.png',
                },
                {
                    label: 'Ch',
                    imgPath:
                        '/static/assets/bottles/2-whites-1-red.jpg',
                },
                {
                    label: 'Bali, Indonesia',
                    imgPath:
                        '/static/assets/bottles/mimi-chardonnay-2.jpg',
                },
                {
                    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
                    imgPath:
                        '/static/assets/bottles/Mimi-Chardonnay.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rose.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Rosu-De-Bulboaca.jpg',
                },
                {
                    label: 'Goč, Serbia',
                    imgPath:
                        '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg',
                }
            ]

        },
    ],
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS:
            const fullObject = {
                wines: action.wines
            }
            return updateObject(state, fullObject)
        case actionTypes.FETCH_PRODUCTS_FAILED:
            return updateObject(state, action.error)
        default:
            return state
    }
}

export default reducer;