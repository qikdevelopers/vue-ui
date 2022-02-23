import parseBoolean from './parseBoolean';

export default function getDefaultValue(fieldData, currentValue) {

    if (currentValue) {
        return currentValue;
    }

    function isUndefined(entry) {
        return entry === undefined || typeof entry === 'undefined' || entry === null;
    }

    /////////////////////////////////////

    var maximum = parseInt(fieldData.maximum);
    var singleValue = (maximum == 1);
    var multiValue = !singleValue;
    var defaultValues = (fieldData.type === 'reference' ? fieldData.defaultReferences : fieldData.defaultValues) || [];
    var firstDefaultValue = defaultValues[0];

    /////////////////////////////////////

    var output;

    switch (fieldData.type) {
        case 'date':
            if (multiValue) {
                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(Date);
                    } else {
                        output = defaultValues.slice().map(Date);
                    }

                }
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : new Date(firstDefaultValue);
            }
            break;
        case 'integer':
            if (multiValue) {
                if (defaultValues.length) {
                    if (maximum) {
                        output = defaultValues.slice(0, maximum).map(parseInt);
                    } else {
                        output = defaultValues.slice().map(parseInt);
                    }

                }
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
                        output = defaultValues.slice(0, maximum).map(Number);
                    } else {
                        output = defaultValues.slice().map(Number);
                    }

                }
            } else {
                output = isUndefined(firstDefaultValue) ? undefined : parseInt(firstDefaultValue);
            }
            break;
        case 'string':

            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
                }
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
            } else {
                output = parseBoolean(firstDefaultValue);
            }
            break;
        case 'reference':
            if (multiValue) {
                if (defaultValues.length) {
                    output = defaultValues.slice(0, maximum);
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
            } else {
                output = isUndefined(firstDefaultValue) ? '' : firstDefaultValue;
            }
            break;
    }

    return output;

}