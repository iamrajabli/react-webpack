import { classNames } from './classNames';

describe('classnames lib tests', () => {
  test('some class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });

  test('with mods', () => {
    expect(classNames('someClass', { mode1: true, mode2: false, mode3: true }, ['class1', 'class2'])).toBe('someClass class1 class2 mode1 mode3');
  });
});
