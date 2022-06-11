export default function(value) {
    switch (String(value).toLowerCase()) {
        case 'true':
        case 'y':
        case 'yes':
        case '1':
        case 't':
            value = true;
            break;
        case 'false':
        case 'n':
        case 'no':
        case '0':
        case 'f':
        case 'undefined':
        case 'null':
        case '':
        case '-1':
            value = false;
            break;
    }

    return !!value;
}