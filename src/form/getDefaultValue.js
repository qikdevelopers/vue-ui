import parseBoolean from './parseBoolean';

export default function getDefaultValue(fieldData, currentValue) {

    if (currentValue) {
        return currentValue;
    }

    function isUndefined(entry) {
        return entry === undefined || typeof entry === 'undefined' || entry === null;
    }

    /////////////////////////////////////

    var minimum = parseInt(fieldData.minimum);
    var maximum = parseInt(fieldData.maximum);
    var singleValue = (maximum == 1);
    var multiValue = !singleValue;
    var defaultValues = (fieldData.type === 'reference' ? fieldData.defaultReferences : fieldData.defaultValues) || [];
    var firstDefaultValue = defaultValues[0];

    /////////////////////////////////////

    var output;

    function ensureMinimum(array, min, max, func) {

        array = array || [];

        var length = array.length;
        var meetsMinimum = length >= min;
        var meetsMaximum = length <= max;

        if (!meetsMinimum) {
            var difference = min - length;
            var extras = Array(difference).fill().map(func);
            return [...array, ...extras];
        }

        return array;

    }

    switch (fieldData.type) {
        case 'date':

            function getDate(v) {

                switch (String(v).toLowerCase()) {
                    case 'now':
                        return new Date();
                        break;
                }

                return new Date(v);
            }

            if (multiValue) {
                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(function(v) {
                            return getDate(v)
                        });
                    } else {
                        output = defaultValues.slice().map(function(v) {
                            return getDate(v)
                        });
                    }
                }

                output = ensureMinimum(output, minimum, maximum, function() {
                    return getDate(new Date());
                })
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : getDate(firstDefaultValue);
            }

            break;
        case 'integer':
            if (multiValue) {

                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(function(val) {
                            return parseInt(val);
                        });

                    } else {
                        output = defaultValues.slice().map(function(val) {
                            return parseInt(val);
                        });
                    }
                }

                output = ensureMinimum(output, minimum, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : parseInt(firstDefaultValue);
            }
            break;
        case 'decimal':
        case 'number':
        case 'float':
            if (multiValue) {
                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(function(val) {
                            return Number(val);
                        });
                    } else {
                        output = defaultValues.slice().map(function(val) {
                            return Number(val);
                        });
                    }
                }

                output = ensureMinimum(output, minimum, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : parseInt(firstDefaultValue);
            }
            break;
        case 'string':

            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                }

                output = ensureMinimum(output, minimum, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? '' : firstDefaultValue;
            }
            break;
        case 'group':
            if (fieldData.asObject) {
                var number = fieldData.maximum || fieldData.ask;

                if (multiValue) {
                    output = Array(number).fill().map(function() {
                        return {}
                    });
                } else {
                    output = isUndefined(firstDefaultValue) ? {} : firstDefaultValue;
                }
            }
            break;
        case 'boolean':
            if (multiValue) {
                output = Array(maximum).fill(false);
            }

            output = ensureMinimum(output, minimum, maximum, function() {
                return false;
            })

            break;
        case 'reference':
            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                } else {
                    output = [];
                }
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : firstDefaultValue;
            }
            break;
        default:
            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                }

                output = ensureMinimum(output, minimum, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? '' : firstDefaultValue;
            }
            break;
    }

    return output;

}