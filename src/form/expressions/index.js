import { parse as exprParse } from "expression-eval";
import { eval as exprEval } from "expression-eval";

////////////////////////////


const service = {}

////////////////////////////

service.evaluateExpression = function(expression, context) {

    //////////////////////////////

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
    	create(Class, ...rest) {
    		return new Class(...rest);
    	},
    }

    

    context = Object.assign({}, contextDefaults, context);

 
    //////////////////////////////

    //evaluate the string input
    var ast;
    var result;

    try {
        ast = exprParse(expression);
        result = exprEval(ast, context);
    } catch (err) {
        // console.log('error evaluating expression', err);
    } finally {
        return result;
    }

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