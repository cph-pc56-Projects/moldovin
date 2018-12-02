
const initialState = {
    wines: [
        {
            id: '12x1',
            name: 'Lacrima Dulce',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Cricova',
            type: 'Semisweet White Sparkling Wine',
            price: 125,
            description: 'This luxury sparkling white wine is a perfect party wine. The semisweet flavor lends to easy consumption and leaves a very neutral and pleasant aftertaste. This wine is remarkable for its shiny light straw color, full, nicely-balanced taste and rich flowery bouquet with delicate aromas.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/DulceLacrima.png'

        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer;