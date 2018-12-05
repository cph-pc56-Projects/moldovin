
const initialState = {
    wines: [
        {
            id: '12x1',
            name: 'Lacrima Dulce',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Cricova',
            type: 'Semisweet White Sparkling Wine',
            price: 145,
            description: 'This luxury sparkling white wine is a perfect party wine. The semisweet flavor lends to easy consumption and leaves a very neutral and pleasant aftertaste. This wine is remarkable for its shiny light straw color, full, nicely-balanced taste and rich flowery bouquet with delicate aromas.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/DulceLacrima.png'

        },
        {
            id: '3x12',
            name: 'Cabernet Sauvignon',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Cricova',
            type: 'Rose',
            price: 125,
            description: 'This Cabernet Sauvignon has a delicately balanced palate between dry acidity and sweet freshness; a mix of floral and strawberry taste combined with citrus and elderflower. This is the perfect, easy to drink summer wine that is a guaranteed hit for all tastes.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/bottles/Mimi-Rose.jpg'

        },
        {
            id: '2x12',
            name: 'Sauvignon Blanc',
            grapes: 'Cabernet Sauvignon & Malbec & Shiraz',
            producer: 'Cricova',
            type: 'White Wine',
            price: 149,
            description: 'The Sauvignon Blanc from Castel Mimi has a memorable freshness. Finely balanced and with a bright yellow-green colour, this classic grape is a great addition to any wine menu or dinner service. What is special about Castel Mimi’s Sauvignon Blanc is its particular blackcurrant aftertaste and supreme freshness. We recommend to enjoy this wine with baked dishes or pies, seafood and fruity desserts.',
            alcohol: '9.5',
            storingTemperature: '6° - 8°C',
            displayImage: '/static/assets/bottles/Mimi-Sauvignon-blanc.jpg'

        },
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer;