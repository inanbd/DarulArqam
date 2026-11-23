import * as en from './academy';
import * as bn from './academy.bn';
import type { Lang } from '../i18n';

/** The curriculum content in one language. `academy.bn.ts` has the same shape as `academy.ts`. */
export function academy(lang: Lang): typeof en {
  return lang === 'bn' ? bn : en;
}
