import { escapeHtml } from './escapeHtml';

export function renderTemplate(
  templateHtml: string,
  vars: Record<string, string>,
  safeVariables: string[] = ['SERVICES_LIST_ITEMS']
): string {
  let result = templateHtml;
  for (const [key, value] of Object.entries(vars)) {
    // If the key is in safeVariables, we don't escape it (e.g. for HTML lists)
    const finalValue = safeVariables.includes(key) ? value : escapeHtml(value);

    // Replace all occurrences of {{KEY}}
    const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g');
    result = result.replace(regex, finalValue);
  }
  return result;
}
