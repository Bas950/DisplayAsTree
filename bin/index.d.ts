export declare class Tree {
    /**
     * Name of the tree.
     */
    name: string;
    /**
     * Branches of the tree.
     */
    branches: Branch[];
    private headChar;
    private treeChar;
    private lineChar;
    private lastChar;
    /**
     * Make a new tree.
     *
     * @param name The root name of your tree.
     * @param options Custom line characters
     */
    constructor(name: string, options?: {
        headChar?: string;
        treeChar?: string;
        lineChar?: string;
        lastChar?: string;
    });
    /**
     * Add branches to the main tree.
     *
     * @param branches Branches to add to the tree.
     */
    addBranch(branches: Branch[] | string[]): this;
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
export declare class Branch {
    /**
     * Name of the tree branch.
     */
    name: string;
    /**
     * Branches of the tree section.
     */
    branches: Branch[];
    /**
     * Make a new tree branch.
     *
     * @param name The name of your tree branch.
     */
    constructor(name: string);
    /**
     * Add more sections to the section.
     *
     * @param branches Sections to add to the section.
     */
    addBranch(branches: Branch[] | string[]): this;
}
