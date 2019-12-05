(function(){
  'use strict';
  angular.module('webapp',[])
  .controller('ShoppingListController',ShoppingListController)
  .controller('ShoppingListShow',ShoppingListShow)
  .service('ShoppingListService',ShoppingListService);
  ShoppingListController.$inject=['ShoppingListService'];
  function ShoppingListController(ShoppingListService){
    var list = this;
    list.itemName = "";
    list.itemQuantity = "";
    list.additem = function(){
    ShoppingListService.addItem(list.itemName,list.itemQuantity);
    };
  }
  ShoppingListShow.$inject=['ShoppingListService'];
  function ShoppingListShow(ShoppingListService){
    var showlist = this;
    showlist.items = ShoppingListService.getItems();
  }
  function ShoppingListService(){
    var service = this;
    var items=[];
    service.addItem = function(itemname,itemquantity){
    var item = {
      name:itemname,
      quantity:itemquantity
    };
    items.push(item);
    };
    service.getItems = function(){
      return items;
    };
  }

})();
