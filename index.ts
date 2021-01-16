export class DisplayAsTree {
	/**
	 * Name of the tree.
	 */
	name: string;
	/**
	 * Sections of the tree.
	 */
	sections: TreeSection[] = [];
	private startChar = "● ";
	private treeChar = "├─ ";
	private midChar = "│  ";
	private endChar = "╰─ ";

	/**
	 * Make a new tree.
	 *
	 * @param name The root name of your tree.
	 * @param options Custom line characters
	 */
	constructor(
		name: string,
		options?: {
			startChar?: string;
			treeChar?: string;
			midChar?: string;
			endChar?: string;
		}
	) {
		this.name = name;
		if (options?.startChar) this.startChar = options.startChar;
		if (options?.treeChar) this.treeChar = options.treeChar;
		if (options?.midChar) this.midChar = options.midChar;
		if (options?.endChar) this.endChar = options.endChar;

		if (
			this.treeChar.length !== this.midChar.length &&
			this.midChar.length !== this.endChar.length
		) {
			throw new Error(
				"treeChar, midChar, and endChar must have the same length."
			);
		}
	}

	/**
	 * Add sections to the main tree.
	 *
	 * @param sections Sections to add to the tree.
	 */
	addSection(sections: TreeSection[] | string[]) {
		for (const section of sections) {
			if (typeof section === "string") {
				this.sections.push(new TreeSection(section));
			} else {
				this.sections.push(section);
			}
		}
		return this;
	}

	private getData(name: string, sections: TreeSection[]) {
		let output: string[] = [];
		const length = sections.length;

		output.push(name);

		if (!length) return output;

		for (let i = 0; i < length; i++) {
			const section = sections[i],
				isLast = i === length - 1;

			let char = "";

			if (isLast) char = this.endChar;
			else char = this.treeChar;

			output = output.concat(
				this.getData(section.name, section.sections).map(s => {
					const c = char;
					char = "";
					return (
						(c
							? isLast
								? this.getSpacesOfLength(this.treeChar.length)
								: this.midChar
							: c) + s
					);
				})
			);
		}
		return output;
	}

	private getSpacesOfLength(length: number) {
		let spaces = "";
		for (let i = 0; i < length; i++) {
			spaces += " ";
		}
		return spaces;
	}

	private getAsStringList() {
		return this.getData(this.startChar + this.name, this.sections);
	}

	/**
	 * Get the tree as an string.
	 */
	getAsString() {
		return this.getAsStringList().join("\n");
	}

	/**
	 * Console.log() the tree.
	 */
	log() {
		return console.log(this.getAsString());
	}
}

export class TreeSection {
	/**
	 * Name of the tree section.
	 */
	name: string;
	/**
	 * Sections of the tree section.
	 */
	sections: TreeSection[] = [];

	/**
	 * Make a new tree section.
	 *
	 * @param name The name of your tree section.
	 */
	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Add more sections to the section.
	 *
	 * @param sections Sections to add to the section.
	 */
	addSection(sections: TreeSection[] | string[]) {
		for (const section of sections) {
			if (typeof section === "string") {
				this.sections.push(new TreeSection(section));
			} else {
				this.sections.push(section);
			}
		}
		return this;
	}
}
