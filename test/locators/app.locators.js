module.exports = {

    permissions: {
    notificationAllow:
        'id=com.android.permissioncontroller:id/permission_allow_button',

    notificationDeny:
        'id=com.android.permissioncontroller:id/permission_deny_button'
},

    login: {
        email: 'id=ch.payyap.smartpos:id/sign_in_email_edit_text',
        password: 'id=ch.payyap.smartpos:id/sign_in_password_edit_text',
        signIn: 'id=ch.payyap.smartpos:id/sign_in_sign_in_button'
    },


    navigation: {
        menu: '~Open navigation drawer',

        branchSettings:
            'android=new UiSelector().text("Branch Settings")',

        registers:
            'android=new UiSelector().text("Registers")',

        warehouses:
            'android=new UiSelector().text("Warehouses")',

        restaurant:
            'android=new UiSelector().text("Restaurant")',

        tables:
            'android=new UiSelector().text("Tables")',

        cashInOut:
            'android=new UiSelector().text("Cash In/Out")',

        courses:
            'android=new UiSelector().text("Courses")',

        sell:
            'android=new UiSelector().text("Sell")'
    },


    branch: {

        back:
            'android=new UiSelector().text("Back")',

        allBranches:
            'android=new UiSelector().text("All Branches")',

        search:
            'id=ch.payyap.smartpos:id/etSearch'
    },


    register: {
    add: 'id=ch.payyap.smartpos:id/menu_item_new_product',
    newRegister: 'android=new UiSelector().text("New Register")',

    registerName: 'id=ch.payyap.smartpos:id/etNote',

    warehouseField:
        'android=new UiSelector().textContains("Select warehouse")',

    warehouseListItem:
        'id=ch.payyap.smartpos:id/tvName',

    saveWarehouse:
        'android=new UiSelector().text("Save")',

    createRegister: '~Add',

    pageTitle:
        'android=new UiSelector().text("Your cash registers")',

    search:
        'id=ch.payyap.smartpos:id/tInSearch',

    list:
        'id=ch.payyap.smartpos:id/rvItems',

    listItems:
        'id=ch.payyap.smartpos:id/tvName',

    byName: (name) =>
        `android=new UiSelector().text("${name}")`
},


    warehouse: {

        add:
            'id=ch.payyap.smartpos:id/menu_item_new_product',

        name:
            'id=ch.payyap.smartpos:id/etName',

        address:
            'id=ch.payyap.smartpos:id/etAddress',

        email:
            'id=ch.payyap.smartpos:id/etEmail',

        phone:
            'id=ch.payyap.smartpos:id/etPhone',

        save:
            'id=ch.payyap.smartpos:id/buttonSubmit'
    },


    tables: {

        addButton:
            'id=ch.payyap.smartpos:id/menu_item_new_product',

        singleTable:
            'android=new UiSelector().text("Create single table")',

        multipleTable:
            'android=new UiSelector().text("Create multiple table")',

        activeToggle:
            'id=ch.payyap.smartpos:id/switchTableState',

        tableName:
            'id=ch.payyap.smartpos:id/etName',

        start:
            'id=ch.payyap.smartpos:id/etStartTable',

        end:
            'id=ch.payyap.smartpos:id/etEndTable',

        save:
            'id=ch.payyap.smartpos:id/buttonSubmit',

        apply:
            'id=ch.payyap.smartpos:id/btnApply'
    },


    cash: {
    addButton: 'id=ch.payyap.smartpos:id/menu_item_new_product',

    register: 'id=ch.payyap.smartpos:id/text_input_end_icon',

    // Register selection popup
    registerSearch: 'id=ch.payyap.smartpos:id/etSearch',
    registerList: 'id=ch.payyap.smartpos:id/rvItems',
    registerListItem: 'id=ch.payyap.smartpos:id/tvName',

    registerSave: 'id=ch.payyap.smartpos:id/btnApply',

    registerByName: (name) =>
        `android=new UiSelector().text("${name}")`,

    cashIn: 'id=ch.payyap.smartpos:id/rbCashIn',
    cashOut: 'id=ch.payyap.smartpos:id/rbCashOut',

    amount: 'id=ch.payyap.smartpos:id/etAmount',
    note: 'id=ch.payyap.smartpos:id/etNote',

    save: 'id=ch.payyap.smartpos:id/menu_item_save'
},


    courses: {

        courses:
            'android=new UiSelector().text("Courses")',

        addButton:
            'id=ch.payyap.smartpos:id/menu_item_new_product',

        activeToggle:
            'id=ch.payyap.smartpos:id/switchCourseState',

        courseName:
            'id=ch.payyap.smartpos:id/etName',

        colourPicker:
            'id=ch.payyap.smartpos:id/ivColorPreview',

        colourOption:
            'id=ch.payyap.smartpos:id/cvItem',

        applyColour:
            'id=ch.payyap.smartpos:id/btnApply',

        save:
            'id=ch.payyap.smartpos:id/buttonSubmit'
    },


    giftCard: {

        sellMenu:
            'android=new UiSelector().text("Sell")',

        moreButton:
            '//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/selected_products_header"]/android.widget.ImageView[1]',

        giftCard:
            'id=ch.payyap.smartpos:id/more_option_gift_card_view',

        sellGiftCard:
            'id=ch.payyap.smartpos:id/llSellGiftCard',

        cardNumber:
            'id=ch.payyap.smartpos:id/input_edit_text_qr',

        amount:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/etAmount")',

        next:
            'id=ch.payyap.smartpos:id/btnNext',

        cart:
            'id=ch.payyap.smartpos:id/selected_products_footer',

        pay:
            'id=ch.payyap.smartpos:id/selected_products_pay',

        cash:
            'android=new UiSelector().text("Cash")',

        confirm:
            'android=new UiSelector().text("Confirm")',

        noReceipt:
            'android=new UiSelector().text("No Receipt")'
    },


    order: {

        addNew:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/menu_item_new_order")',

        firstTable:
            '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvTables"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]',

        search:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/input_edit_text_qr")',

        product:
            'id=ch.payyap.smartpos:id/product_desc_layout',

        placeOrder:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/btnPlaceOrder")',

        popupClose:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/button_close")',

        pay:
            'android=new UiSelector().resourceId("ch.payyap.smartpos:id/btnAddChanges")',

        cash:
            '(//androidx.recyclerview.widget.RecyclerView[@resource-id="ch.payyap.smartpos:id/rvDefaultMethods"]//android.widget.LinearLayout[@resource-id="ch.payyap.smartpos:id/llRoot"])[1]',

        confirm:
            'android=new UiSelector().text("Confirm")',

        receipt:
            'android=new UiSelector().textContains("Order #")'
    }

};