import { reactive, watchEffect } from 'vue';

export default function(options) {

    options = options || {};
    let minimum = Math.max(parseInt(options.minimum || 0), 0);
    let maximum = Math.max(parseInt(options.maximum || 0), 0);

    ///////////////////////////////////

    const service = {}

    ///////////////////////////////////

    const selection = reactive([]);
    let hash = {};

    ///////////////////////////////////

    watchEffect(function() {
        recreateHash();
    });

    ///////////////////////////////////

    function recreateHash() {
        hash = selection.reduce(function(set, item) {

            var id = item._id || item.id;
            if (!id) {
                return;
            }
            set[id] = item;
            return set;
        }, {});
    }
    ///////////////////////////////////

    service.isSelected = function(item) {
        return hash[item._id || item.id];
    }

    service.select = function(item) {

        //If there is a limit set
        if (maximum) {
            //But we are at or past the limit
            if (selection.length >= maximum) {
                if (maximum === 1) {
                    //Clear the selection
                    selection.length = 0;
                }
            }
        }

        //Check if this item is already selected
        if (service.isSelected(item)) {
            return;
        }

        //Add the item into the selection array
        selection.push(item);
    }

    service.deselect = function(item) {

        //If we can only select one item
        //then just clear the selection
        if (maximum === 1) {
            selection.length = 0;
            return;
        }

        //Find the index of the item
        var index = selection.findIndex(function(entry) {
            return (entry._id && entry._id == item._id) || (entry.id && entry.id == item.id)
        })

        //If there was no index found
        if(index == -1) {
            return;
        }

        //remove it from the array
        selection.splice(index, 1);
    }

    service.toggle = function(item) {
        if (service.isSelected(item)) {
            service.deselect(item);
        } else {
            service.select(item);
        }
    }

    service.selectMultiple = function(array) {
        array.forEach(function(item) {
            service.select(item);
        })
    }

    service.deselectMultiple = function(array) {
        array.forEach(function(item) {
            service.deselect(item);
        })
    }

    service.setSelection = function(array) {
        selection.length = 0;
        setTimeout(function() {
            service.selectMultiple(array);
        })
        
    }

    service.deselectAll = function() {
        selection.length = 0;
    }

    ///////////////////////////////////


    Object.defineProperty(service, 'items', {
        value: selection,
        writable: false,
    });

    ///////////////////////////////////

    Object.defineProperty(service, 'hash', {
        get() {
            return hash;
        }
    });


    ///////////////////////////////////

    return service;
}