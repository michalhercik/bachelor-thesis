export interface ILine {
    /**
    * @returns {number} The x coordinate of the first point of the line.
    */
    getTransformedX1(): number;
    /**
    * @returns {number} The y coordinate of the first point of the line.
    */
    getTransformedY1(): number;
    /**
    * @returns {number} The x coordinate of the second point of the line.
    */
    getTransformedX2(): number;
    /**
    * @returns {number} The y coordinate of the second point of the line.
    */
    getTransformedY2(): number;
    /**
    * @returns {number} The x coordinate of the first point of the line.
    */
    getX1(): number;
    /**
    * @returns {number} The y coordinate of the first point of the line.
    */
    getY1(): number;
    /**
    * @returns {number} The x coordinate of the second point of the line.
    */
    getX2(): number;
    /**
    * @returns {number} The y coordinate of the second point of the line.
    */
    getY2(): number;
    /**
    * @returns {boolean} True if the line is visible, false otherwise.
    */
    isVisible(): boolean;
    /**
    * @returns {string[]} The list of classes of the line.
    */
    getClasses(): string[];
}
