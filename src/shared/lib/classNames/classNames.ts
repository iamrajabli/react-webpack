type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
    cls,
    ...additional,
  ].join(' ');
}
