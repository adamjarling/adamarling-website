/**
 * Press clippings, interviews, and features — rendered at /press and /de/press.
 *
 * HOW TO EDIT
 *  - Add an entry to `press` below. Newest first; the page renders them in
 *    array order, so keep the list sorted the way you want it read.
 *  - date ....... free text, shown in the left column. A year ("2024") is
 *                enough; "MAR 2024" also works if you want the month.
 *  - outlet ..... publication or site name.
 *  - title ...... headline of the piece.
 *  - href ....... omit for print-only clippings — the title then renders as
 *                plain text instead of a link.
 *  - band ....... optional; which project the piece was about.
 *  - quote ...... optional pull quote to feature under the entry.
 *  - kind ....... controls the small label chip. Defaults to 'feature'.
 *
 * An empty array renders a dashed "coming soon" placeholder, so the page
 * never looks broken while it is still being filled in.
 */

export type PressKind = 'interview' | 'feature' | 'review' | 'radio' | 'video';

export interface PressItem {
  date: string;
  outlet: string;
  title: string;
  /** Omit for print-only clippings with no online version. */
  href?: string;
  /** Which band/project the piece covers. */
  band?: string;
  /** Optional pull quote featured under the entry. */
  quote?: string;
  kind?: PressKind;
}

export const press: PressItem[] = [];
