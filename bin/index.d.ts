export declare class DisplayAsTree {
    /**
     * Name of the tree.
     */
    name: string;
    /**
     * Sections of the tree.
     */
    sections: TreeSection[];
    private startChar;
    private treeChar;
    private midChar;
    private endChar;
    /**
     * Make a new tree.
     *
     * @param name The root name of your tree.
     * @param options Custom line characters
     */
    constructor(name: string, options?: {
        startChar?: string;
        treeChar?: string;
        midChar?: string;
        endChar?: string;
    });
    /**
     * Add sections to the main tree.
     *
     * @param sections Sections to add to the tree.
     */
    addSection(sections: TreeSection[] | string[]): this;
    private getData;
    private getSpacesOfLength;
    private getAsStringList;
    /**
     * Get the tree as an string.
     */
    getAsString(): string;
    /**
     * Console.log() the tree.
     */
    log(): void;
}
export declare class TreeSection {
    /**
     * Name of the tree section.
     */
    name: string;
    /**
     * Sections of the tree section.
     */
    sections: TreeSection[];
    /**
     * Make a new tree section.
     *
     * @param name The name of your tree section.
     */
    constructor(name: string);
    /**
     * Add more sections to the section.
     *
     * @param sections Sections to add to the section.
     */
    addSection(sections: TreeSection[] | string[]): this;
}
