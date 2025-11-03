pragma solidity ^0.8.0;

contract SupplyChain {
    struct Material {
        string name;
        uint quantity;
    }

    mapping(uint => Material) public materials;
    uint public materialCount;

    function addMaterial(string memory _name, uint _quantity) public {
        materialCount++;
        materials[materialCount] = Material(_name, _quantity);
    }

    function getMaterial(uint _id) public view returns (string memory, uint) {
        Material memory material = materials[_id];
        return (material.name, material.quantity);
    }
}
