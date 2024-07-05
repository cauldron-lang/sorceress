export const BOOT = () => ({ key: 'BOOT' });
export const UPDATE_COUNT = (value) => ({ key: 'UPDATE_COUNT', value }); // FIXME: unused
export const EDITOR_FOCUS = () => ({ key: 'EDITOR_FOCUS' });
export const KEY_PRESS = (name) => ({ key: 'KEY_PRESS', name });
export const OPEN_PROJECT = (projectDirectory) => ({ key: 'OPEN_PROJECT', projectDirectory });