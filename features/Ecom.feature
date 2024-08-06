Feature: Ecommerce validation

Scenario: placing order
    Given a login to ecom application with "Miketest240611@yopmail.com" and "Admin@1234"
    When  Add "ZARA COAT 3" item to cart 
    Then verfit "ZARA COAT 3" is displayed in the cart
    When Enter Valid detais and place order
    Then Verfiy order is present in th OrderHistory Page