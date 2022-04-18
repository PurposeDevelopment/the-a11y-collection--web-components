export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export async function fetchSvg(iconName: string): Promise<string> {
  try {
    return await fetch(`https://api.multiavatar.com/${iconName}.svg`)
      .then((res: any) => (res.ok ? res.text() : '')).then((text) => {
        return text.replace(/width=".*?"|height=".*?"/g, '');
      });
  } catch {
    console.log(`Not able to get an svg for "${iconName}".`);
  }
}
