const BasePage = require('./BasePage');

class SplitPeoplePage extends BasePage {

    get navigationDrawer() {
        return $('//android.widget.ImageButton[@content-desc="Open navigation drawer"]');
    }

    get retailSalesMenu() {
        return $('//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/lst_menu_items"]/android.view.ViewGroup[4]');
    }

    get newOrderMenu() {
        return $('ch.payyap.smartpos:id/menu_item_new_order');
    }

    tableName(tableName) {
        return $(
            `//android.widget.TextView[@resource-id="ch.payyap.smartpos:id/tvName" and @text="${tableName}"]`
        );
    }

    get placeOrderButton() {
        return $('ch.payyap.smartpos:id/btnPlaceOrder');
    }

    get closeButton() {
        return $('ch.payyap.smartpos:id/button_close');
    }

    get salesOrderNumber() {
        return $('//android.widget.TextView[starts-with(@text,"SO-")]');
    }
}

module.exports = SplitPeoplePage;