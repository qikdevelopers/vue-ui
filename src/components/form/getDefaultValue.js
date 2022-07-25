import parseBoolean from './parseBoolean';


function ensureMinimum(field, array, min, ask, max, func) {

    array = array || [];


    min = Math.max(min, ask);

    var length = array.length;
    var meetsMinimum = length >= min;
    var meetsMaximum = length <= max;

    if (!meetsMinimum) {
        if (field.key == 'multiNumber') {
            console.log(field.key, min)
        }
        var difference = min - length;
        var extras = Array(difference).fill().map(func);
        return [...array, ...extras];
    }

    return array;

}

//////////////

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
    var ask = parseInt(fieldData.ask || 0);

    //Ensure that the ask is always at least the minimum
    ask = Math.max(ask, minimum);
    //Ensure that if there is a maximum set it's never more than the maximum
    ask = maximum ? Math.min(ask, maximum) : ask;

    var singleValue = (maximum == 1);
    var multiValue = !singleValue;
    var defaultValues = (fieldData.type === 'reference' ? fieldData.defaultReferences : fieldData.defaultValues) || [];
    var firstDefaultValue = defaultValues[0];

    /////////////////////////////////////

    var output;



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

                output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
                    return getDate(new Date());
                })
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : getDate(firstDefaultValue);
            }

            break;
        case 'integer':
            // if (multiValue) {

            //     if (defaultValues.length) {
            //         if (maximum) {
            //             output = defaultValues.slice(0, maximum).map(function(val) {
            //                 return parseInt(val);
            //             });

            //         } else {
            //             output = defaultValues.slice().map(function(val) {
            //                 return parseInt(val);
            //             });
            //         }
            //     }

            //     output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
            //         return 0;
            //     })
            // } else {
            //     output = isUndefined(firstDefaultValue) ? undefined : parseInt(firstDefaultValue);
            // }
            // break;
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

                output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
                    return '';
                })
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : Number(firstDefaultValue);
            }
            break;
        case 'group':

            if (fieldData.asObject) {
                var number = ask;
                if (multiValue) {
                    if (number > 0) {
                        output = Array(number).fill().map(function() {
                            return {}
                        });
                    } else {
                        output = [];
                    }

                } else {
                    output = isUndefined(firstDefaultValue) ? {} : firstDefaultValue;
                }
            }
            break;
        case 'object':
            var number = ask;
            if (multiValue) {
                if (number > 0) {
                    output = Array(number).fill().map(function() {
                        return {}
                    });
                } else {
                    output = [];
                }

            } else {
                output = isUndefined(firstDefaultValue) ? {} : firstDefaultValue;
            }

            break;
        case 'boolean':

            if (multiValue) {
                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(function(val) {
                            return parseBoolean(val);
                        });
                    } else {
                        output = defaultValues.slice().map(function(val) {
                            return parseBoolean(val);
                        });
                    }
                }

                output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? false : parseBoolean(firstDefaultValue);
            }

            break;
        case 'reference':

            if (fieldData.widget === 'form') {
                var number = ask;
                if (multiValue) {
                    if (number > 0) {
                        output = Array(number).fill().map(function() {
                            return {}
                        });
                    } else {
                        output = [];
                    }

                } else {
                    output = isUndefined(firstDefaultValue) ? {} : firstDefaultValue;
                }
            } else {
                if (multiValue) {
                    if (defaultValues.length) {
                        output = defaultValues.slice(0, maximum);
                    } else {
                        output = [];
                    }
                } else {
                    output = isUndefined(firstDefaultValue) ? undefined : firstDefaultValue;
                }
            }
            break;
        case 'string':
            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                }

                output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
                    return '';
                })
            } else {
                output = isUndefined(firstDefaultValue) ? '' : firstDefaultValue;
            }
            break;
        default:

            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                }

                output = ensureMinimum(fieldData, output, minimum, ask, maximum, function() {
                    return;
                })
            } else {
                output = isUndefined(firstDefaultValue) ? '' : firstDefaultValue;
            }
            break;
    }

    return output;

}