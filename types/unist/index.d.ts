// Type definitions for non-npm package Unist 2.0
// Project: https://github.com/syntax-tree/unist
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Jun Lu <https://github.com/lujun2>
//                 Hernan Rajchert <https://github.com/hrajchert>
//                 Titus Wormer <https://github.com/wooorm>
//                 Junyoung Choi <https://github.com/rokt33r>
//                 Ben Moon <https://github.com/GuiltyDolphin>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * Syntactic units in unist syntax trees are called nodes.
 */
export interface Node<
    /**
     * Information associated by the ecosystem with the node.
     * Space is guaranteed to never be specified by unist or specifications
     * implementing unist.
     */
    Data = unknown,
> {
    /**
     * The variant of a node.
     */
    type: string;

    /**
     * Information from the ecosystem.
     */
    data?: Data | undefined;

    /**
     * Location of a node in a source document.
     * Must not be present if a node is generated.
     */
    position?: Position | undefined;
}

/**
 * Location of a node in a source file.
 */
export interface Position {
    /**
     * Place of the first character of the parsed source region.
     */
    start: Point;

    /**
     * Place of the first character after the parsed source region.
     */
    end: Point;

    /**
     * Start column at each index (plus start line) in the source region,
     * for elements that span multiple lines.
     */
    indent?: number[] | undefined;
}

/**
 * One place in a source file.
 */
export interface Point {
    /**
     * Line in a source file (1-indexed integer).
     */
    line: number;

    /**
     * Column in a source file (1-indexed integer).
     */
    column: number;
    /**
     * Character in a source file (0-indexed integer).
     */
    offset?: number | undefined;
}

export type NodeData<T extends Node> = T extends Node<infer R> ? R : never;

/**
 * Nodes containing other nodes.
 */
export interface Parent<T extends Node = Node, Data = NodeData<T>> extends Node<Data> {
    /**
     * List representing the children of a node.
     */
    children: T[];
}

/**
 * Nodes containing a value.
 */
export interface Literal<T = unknown, Data = unknown> extends Node<Data> {
    value: T;
}
