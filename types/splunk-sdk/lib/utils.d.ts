/**
 * Provides various utility functions, which are mostly modeled after 
 * [Underscore.js](http://documentcloud.github.com/underscore/).
 *
 */
export namespace Utils {
    /**
     * Binds a function to a specific object.
     *
     * @example
     *      
     *      var obj = {a: 1, b: function() { console.log(a); }};
     *      var bound = splunkjs.Utils.bind(obj, obj.b);
     *      bound(); // prints 1
     *
     * @param me The object to bind to.
     * @param fn The function to bind.
     * @return The bound function.
     *
     */
    function bind<F extends Function>(me: {}, fn: F): F


    /**
     * Strips a string of all leading and trailing whitespace characters.
     *
     * @example
     *      
     *      var a = " aaa ";
     *      var b = splunkjs.Utils.trim(a); //== "aaa"
     *
     * @param str The string to trim.
     * @return The trimmed string.
     *
     */
    function trim(str: string): string

    /**
     * Searches an array for a specific object and returns its location.
     *
     * @example
     *      
     *      var a = ["a", "b', "c"];
     *      console.log(splunkjs.Utils.indexOf(a, "b")) //== 1
     *      console.log(splunkjs.Utils.indexOf(a, "d")) //== -1
     *
     * @param  arr The array to search in.
     * @param  search The object to search for.
     * @return The index of the object (`search`), or `-1` if the object wasn't found.
     *
     */
    function indexOf<T>(arr: T[], search: T): number

    /**
     * Indicates whether an array contains a specific object.
     *
     * @example
     *      
     *      var a = {a: 3};
     *      var b = [{}, {c: 1}, {b: 1}, a];
     *      var contained = splunkjs.Utils.contains(b, a); // true
     *
     * @param arr The array to search in.
     * @param obj The object to search for.
     * @return `true` if the array contains the object, `false` if not.
     *
     */
    function contains<T>(arr: T[], obj: T): boolean

    /**
     * Indicates whether a string starts with a specific prefix.
     *
     * @example
     *      
     *      var starts = splunkjs.Utils.startsWith("splunk-foo", "splunk-");
     *
     * @param original The string to search in.
     * @param prefix The prefix to search for.
     * @return `true` if the string starts with the prefix, `false` if not.
     *
     * @function splunkjs.Utils
     */
    function startsWith(original: string, prefix: string): boolean

    /**
     * Indicates whether a string ends with a specific suffix.
     *
     * @example
     *      
     *      var ends = splunkjs.Utils.endsWith("foo-splunk", "-splunk");
     *
     * @param  original The string to search in.
     * @param  suffix The suffix to search for.
     * @return `true` if the string ends with the suffix, `false` if not.
     *
     */
    function endsWith(original: string, suffix: string): boolean

    /**
     * Converts an iterable to an array.
     *
     * @example
     *      
     *      function() { 
     *          console.log(arguments instanceof Array); // false
     *          var arr = console.log(splunkjs.Utils.toArray(arguments) instanceof Array); // true
     *      }
     *
     * @param iterable The iterable to convert.
     * @return The converted array.
     *
     */
    function toArray<T>(iterable: Iterable<T>): T[]

    /**
     * Indicates whether an argument is an array.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isArray(arguments)); // false
     *          console.log(splunkjs.Utils.isArray([1,2,3])); // true
     *      }
     *
     * @param obj The argument to evaluate.
     * @return `true` if the argument is an array, `false` if not.
     *
     */
    function isArray(obj: unknown): obj is unknown[]

    /**
     * Indicates whether an argument is a function.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isFunction([1,2,3]); // false
     *          console.log(splunkjs.Utils.isFunction(function() {})); // true
     *      }
     *
     * @param  obj The argument to evaluate.
     * @return `true` if the argument is a function, `false` if not.
     *
     */
    function isFunction(obj: unknown): obj is Function

    /**
     * Indicates whether an argument is a number.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isNumber(1); // true
     *          console.log(splunkjs.Utils.isNumber(function() {})); // false
     *      }
     *
     * @param obj The argument to evaluate.
     * @return `true` if the argument is a number, `false` if not.
     *
     */
    function isNumber(obj: unknown): obj is number

    /**
     * Indicates whether an argument is a string.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isString("abc"); // true
     *          console.log(splunkjs.Utils.isString(function() {})); // false
     *      }
     *
     * @param obj The argument to evaluate.
     * @return `true` if the argument is a string, `false` if not.
     *
     */
    function isString(obj: unknown): obj is string

    /**
     * Indicates whether an argument is an object.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isObject({abc: "abc"}); // true
     *          console.log(splunkjs.Utils.isObject("abc"); // false
     *      }
     *
     * @param obj The argument to evaluate.
     * @return `true` if the argument is an object, `false` if not.
     *
     */
    function isObject(obj: unknown): obj is {}

    /**
     * Indicates whether an argument is empty.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.isEmpty({})); // true
     *          console.log(splunkjs.Utils.isEmpty({a: 1})); // false
     *      }
     *
     * @param obj The argument to evaluate.
     * @return `true` if the argument is empty, `false` if not.
     *
     */
    function isEmpty(obj: unknown): obj is "" | [] | {
        [name: string]: never
        [num: number]: never
    }

    /**
     * Applies an iterator function to each element in an object.
     *
     * @example
     *      
     *      splunkjs.Utils.forEach([1,2,3], function(el) { console.log(el); }); // 1,2,3
     *
     * @param obj An object or array.
     * @param iterator The function to apply to each element: `(element, list, index)`.
     * @param context A context to apply to the function (optional).
     *
     */
    function forEach<T, R>(obj: T, iterator: (element: T extends (infer V)[] ? V : T[keyof T], list: T, index: T extends [] ? number : keyof T) => R, context: {}): void

    /**
     * Extends a given object with all the properties from other source objects.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.extend({foo: "bar"}, {a: 2})); // {foo: "bar", a: 2}
     *      }
     *
     * @param obj The object to extend.
     * @param sources The source objects from which to take properties.
     * @return The extended object.
     *
     */
    function extend<A, B>(obj: A, ...sources: B[]): A & B

    /**
     * Creates a shallow-cloned copy of an object or array.
     *
     * @example
     *      
     *      function() { 
     *          console.log(splunkjs.Utils.clone({foo: "bar"})); // {foo: "bar"}
     *          console.log(splunkjs.Utils.clone([1,2,3])); // [1,2,3]
     *      }
     *
     * @param obj The object or array to clone.
     * @return The cloned object or array.
     *
     * @function splunkjs.Utils
     */
    function clone<A extends {} | []>(obj: A): A

    type namespaceInfo = {
        owner: string
        app: string
        sharing: string
    }

    /**
     * Extracts namespace information from a dictionary of properties. Namespace
     * information includes values for _owner_, _app_, and _sharing_.
     *
     * @param props The dictionary of properties.
     * @return Namespace information from the properties dictionary.
     *
     */
    function namespaceFromProperties(props?: { acl?: namespaceInfo }): namespaceInfo

    /**
      * Tests whether a value appears in a given object.
      *
      * @param val The value to search for.
      * @param obj The object to search in.
      *
      */
    function keyOf<T>(val: any, obj: T): (keyof T) | undefined

    /**
     * Finds a version in a dictionary.
     *
     * @param version The version to search for.
     * @param map The dictionary to search.
     * @return The value of the dictionary at the closest version match.
     *
     */
    function getWithVersion<T>(version: string, map: Record<string, T>): T

    /**
     * Checks if an object is undefined.
     *
     * @param obj An object.
     * @return `true` if the object is undefined, `false` if not.
     */
    function isUndefined<A>(obj: A): obj is Exclude<A, undefined>

    /**
     * Read files in a way that makes unit tests work as well.
     *
     * @example
     *
     *      // To read `splunk-sdk-javascript/tests/data/empty_data_model.json`  
     *      // from    `splunk-sdk-javascript/tests/test_service.js`
     *      var fileContents = utils.readFile(__filename, "../data/empty_data_model.json");
     *      
     * @param filename of the script calling this function.
     * @param relativePath path relative to the script calling this function.
     * @return The contents of the file.
     */
    function readFile(filename: string, relativePath: string): string
}