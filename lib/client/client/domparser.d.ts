import type { TrustedTypePolicyLike } from '../types';
export declare function getHTMLForInnerHTML(html: string, trustedTypePolicy?: TrustedTypePolicyLike): string | {
    toString(): string;
};
/**
 * Parses HTML string to DOM nodes.
 *
 * @param html - HTML markup.
 * @param trustedTypePolicy - Trusted Types policy.
 * @returns - DOM nodes.
 */
export default function domparser(html: string, trustedTypePolicy?: TrustedTypePolicyLike): NodeList;
//# sourceMappingURL=domparser.d.ts.map