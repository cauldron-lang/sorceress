const updateCount = (event, present) => {
    present({ addToCount: event.value });
};

const boot = (event, present) => {
    present({ boot: true });
};

const editorFocus = (event, present) => {
    present({ focus: 'editor' });
};

const keyPress = (event, present) => {
    present({ keyPressed: event.name });
}

const intent = {
    UPDATE_COUNT: updateCount,
    BOOT: boot,
    EDITOR_FOCUS: editorFocus,
    KEY_PRESS: keyPress,
};

export const act = (event, present) => {
    intent[event.key](event, present);
};