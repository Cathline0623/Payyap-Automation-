const Auth = require('../keywords/auth');
const Navigation = require('../keywords/navigation');
const GiftCard = require('../keywords/giftcard');

describe('Sell Gift Card', () => {

    it('Sells a gift card successfully', async function () {

        this.timeout(300000);

        // Login
        await Auth.login();

        // Branch
        await Navigation.selectTestBranch();

        // Sell
        await GiftCard.openSell();

        // Gift Card
        await GiftCard.sellGiftCard();

        // Cart
        await GiftCard.openCart();

        // Payment
        await GiftCard.payByCash();

        console.log("Gift card flow completed.");

    });

});