import { ElementTree } from "elementtree"
import { Utils as BaseUtils } from "../utils"


declare namespace ExtUtils {

    /**
     * Parse the parameters from an `InputDefinition` or `ValidationDefinition`.
     *
     * This is a helper function for `parseXMLData`.
     *
     * The XML typically will look like this:
     * 
     *   `<configuration>`
     *     `<stanza name="foobar://aaa">`
     *       `<param name="param1">value1</param>`
     *       `<param name="param2">value2</param>`
     *       `<param name="disabled">0</param>`
     *       `<param name="index">default</param>`
     *     `</stanza>`
     *     `<stanza name="foobar://bbb">`
     *       `<param name="param1">value11</param>`
     *       `<param name="param2">value22</param>`
     *       `<param name="disabled">0</param>`
     *       `<param name="index">default</param>`
     *       `<param_list name="multiValue">`
     *         `<value>value1</value>`
     *         `<value>value2</value>`
     *       `</param_list>`
     *       `<param_list name="multiValue2">`
     *         `<value>value3</value>`
     *         `<value>value4</value>`
     *       `</param_list>`
     *     `</stanza>`
     *   `</configuration>`
     *
     * @param paramNode an `Elementree` object representing the `<configuration>` XML node.
     * @return an `Elementree` object representing the parameters of node passed in.
     */
    function parseParameters(paramNode: ElementTree): ElementTree

    /**
     * Parses the parameters from `Elementtree` representations of XML for
     * `InputDefinition` and `ValidationDefinition` objects.
     *
     * @param parentNode a parent `Elementtree` element object.
     * @param childNodeTag the name of the child element to parse parameters from.
     * @return an object of the parameters parsed.
     */
    function parseXMLData(parentNode: ElementTree, childNodeTag: string): {}
}

export const Utils: typeof ExtUtils & typeof BaseUtils