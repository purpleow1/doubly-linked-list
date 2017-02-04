const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
    	if (this.length) {
    		this._tail.next = node;
    		node.prev = this._tail;
    		this._tail = node;
    	}
    	else {
    		this._head = node;
    		this._tail = node;
    	}
    	this.length++;
    	return this;
    }

    head() {
    	if (this.length) return this._head.data;
    	else return null;
    }

    tail() {
    	if (this.length) return this._tail.data;
    	else return null;
    }

    findNode(index) {
    	var currentNode = this._head;
    	while (index) {
    		index--;
    		currentNode = currentNode.next;
    	}
    	return currentNode;
    }

    at(index) {
    	var currentNode = this.findNode(index);
    	return currentNode.data;
    }

    insertAt(index, data) {
    	if (this.length == 0) {
    		this.append(data);
    	}
    	else {
    		var node = new Node(data);
    	    var currentNode = this.findNode(index);
    	    currentNode.prev.next = node;
    	    node.prev = currentNode.prev;
    	    currentNode.prev = node;
    	    node.next = currentNode;
    	}
    	return this;
    }

    isEmpty() {
    	if (this.length) return false;
    	else return true;
    }

    clear() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    	return this;
    }

    deleteAt(index) {
    	if (this.length) {
    		if (this.length == 1) {
    			this.clear();
    		}
    		else if (index == 0) {
    			this._head = this._head.next;
    			this._head.prev = null;
    		}
    		else if (index == this.length - 1) {
    			this._tail = this._tail.prev;
    			this._tail.next = null;
    		}
    		else {
    			var currentNode = this.findNode(index);
    			currentNode.prev.next = currentNode.next;
    			currentNode.next.prev = currentNode.prev;
    		}
    	}   	
    	return this;
    }

    reverseLinks(currentNode) {
    	var timeLink;
    	timeLink = currentNode.prev;
    	currentNode.prev = currentNode.next;
    	currentNode.next = timeLink;
    }

    reverse() {
    	if (this.length > 1) {
    		this._head = this._tail;
	    	var currentNode = this._head;
    	    for (var i = 0; i < this.length - 1; i++) {
    	    	this.reverseLinks(currentNode);
    	    	currentNode = currentNode.next;
    	    }
    	    this.reverseLinks(currentNode);
    	    this._tail = currentNode;
    	}
    	return this;
    }

    indexOf(data) {
    	var currentNode = this._head;
    	var index = -1;
    	var i = 0;
    	while (i < this.length) {
    		if (currentNode.data == data) {
    			index = i;
    			break;
    		}
    		i++;
    		currentNode = currentNode.next;
    	}
    	return index;
    }
}

module.exports = LinkedList;
