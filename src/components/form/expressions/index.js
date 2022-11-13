import { parse as exprParse } from "expression-eval";
import { eval as exprEval } from "expression-eval";
import _get from 'lodash/get';
import _includes from 'lodash/includes';
import { isProxy, toRaw } from 'vue';
////////////////////////////


const service = {}



function arrayFilter(array, key, matchValue, operator) {

    if(!array) {
        return [];
    }

    if(!Array.isArray(array)) {
        console.error('array.filter value was not provided as array', {input:array});
        return [];
    }

   // array = isProxy(array) ? toRaw(array) : array;

  return array.filter(function (object) {
    // Get the matchValue from the object
    const extractedValue = _get(object, key);
    let isCorrect;

    // Check how to operate
    switch (operator) {
      case '>':
        isCorrect = extractedValue > matchValue;
        break;
      case '<':
        isCorrect = extractedValue < matchValue;
        break;
      case '>=':
        isCorrect = extractedValue >= matchValue;
        break;
      case '<=':
        isCorrect = extractedValue <= matchValue;
        break;
      case 'in':
        isCorrect = _includes(extractedValue, matchValue);
        break;
      default:
        // operator is strict equals
        if (matchValue === undefined) {
          isCorrect = extractedValue;
        } else {
          isCorrect = extractedValue == matchValue;
        }
        break;
    }
    return isCorrect;
  });
}

function arraySum(array) {
    return array.reduce(function (a, b) {
      return a + b;
    }, 0);
} 

function arrayExtract(array, key, flat, unique, options) {

    if(!array) {
        return [];
    }
  options = options || {};
  options.flat = flat;
  options.unique = unique;

  if(!Array.isArray(array)) {
        console.error('array.filter value was not provided as array', {input:array});
        return [];
    }

   // array = isProxy(array) ? toRaw(array) : array;

  let results = array.reduce(function (memo, input) {
      const extractedValue = _get(input, key);

      const isNull = !extractedValue && extractedValue !== false && extractedValue !== 0;
      if (options.excludeNull && isNull) {
        return memo;
      }

      memo.push(extractedValue);
      return memo;
    }, []);

  if (options.unique) {
    results = [...new Set(results)]
  }

  if (options.flat) {
    results = results.flat();
  }

  return results;

};
////////////////////////////

service.evaluateExpression = function(expression, context) {
    //Its a direct function so just run it
    if (typeof expression == 'function') {
        return expression(context);
    }

    //////////////////////////////

    const contextDefaults = {
    	Math:Math,
    	String:String,
    	Array:Array,
    	Date:Date,
    	Boolean:Boolean,
    	parseInt:parseInt,
    	parseFloat:parseFloat,
        array:{
            filter:arrayFilter,
            extract:arrayExtract,
            sum:arraySum,
        },
    	create(Class, ...rest) {
    		return new Class(...rest);
    	},
    }

    //////////////////////////////

    context = Object.assign({}, contextDefaults, context);

    //////////////////////////////

    //evaluate the string input
    var ast;
    var result;

    try {
        ast = exprParse(expression);

        result = exprEval(ast, context);
    } catch (err) {
        console.log('There was an error evaluating your expression', {expression, error:err});
    } finally {
    }

    return result;

}

////////////////////////////

// function testExpression(expression, context) {
//     service.evaluateExpression(expression, context).then(function(result) {
//         console.log('Expression', expression, context, result)
//     })
// }


// var testModel = {
//     data: {
//         firstName: 'Cade',
//         lastName: 'Embery',
//         age: 33,
//         nested: {
//             deep: 10,
//         }
//     }
// }

// testExpression(`data.firstName == 'Cade'`, testModel)
// testExpression(`data.nested.deep * data.age / 2.3`, testModel)


////////////////////////////

export default service;