const { BinarySearchTree } = require('../_starters/binary-search-tree');

/**
 * @param {BSTNode} rootOne
 * @param {BSTNode} rootTwo
 * @return {boolean}
 */

BinarySearchTree.areIdentical = function areIdentical(rootOne, rootTwo) {
  //base case there is no left and right 
  // if the value the same return
  if(!(rootOne.left && rootTwo.left) && !(rootTwo.right && rootTwo.right)){
    if(rootOne.val === rootTwo.val){return true}
    return false
  }
  
  // check left
  
  if (rootOne.left && rootTwo.left){
   return areIdentical(rootOne.left, rootTwo.left)
  }
  
  if(rootOne.right && rootTwo.right){
    return areIdentical(rootOne.right, rootTwo.right)
  }
  
  return false;
  
};

module.exports = {
  BinarySearchTree
};
