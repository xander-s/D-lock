//SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;
import "hardhat/console.sol";
contract shop{
    uint public productCount=0;
    struct product{
        uint id;
        string name;
        uint price;
        address owner;
        bool purchased;
    }
    struct buyProduct{
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }
    event productSold(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool purchased
    );
    event productCreated(
        uint id,
        string name,
        uint price,
        address owner,
        bool purchased
    );
    mapping(uint=>product)public products;
    mapping(uint=>buyProduct)public Products;
    function createProduct(string memory _name,uint _price)public{
        require(bytes(_name).length>0);
        require(_price>0);
        productCount++;
        products[productCount]=product(productCount,_name,_price,msg.sender,false);
        emit productCreated(productCount,_name,_price,msg.sender,false);
    }

    function purchaseProduct(uint _id) public payable{
        buyProduct memory _products=Products[_id];
        address payable _seller=payable(_products.owner);
        require(_products.id>0&&_products.id<=productCount);
        require(msg.value>=_products.price);
        require(msg.sender!=_seller);
        require(!_products.purchased);
        _products.owner=payable(msg.sender);
        _products.purchased=true;
        Products[_id]=_products;
        emit productSold(productCount,_products.name,_products.price,payable(msg.sender),true);
    }
    function showProducts()public view{
        
        for(uint i=1;i<=productCount;i++)
        {
            product memory _prods=products[i];
            console.log(_prods.name,_prods.price);
        }
    }
}