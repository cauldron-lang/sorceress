export default class CauldronIcon {
    render(_stateRepresentation) {
        return `
            <svg class="icon" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                <!-- Bubbles -->
                <circle class="icon-cauldron-bubble" cx="8" cy="6" r="2" />
                <circle class="icon-cauldron-bubble" cx="14" cy="8" r="2" />
                <circle class="icon-cauldron-bubble" cx="10" cy="11" r="2" />
                <!-- The top of the cauldron -->
                <rect class="icon-cauldron-vessel" x="4" y="11" width="14" height="2" />
                <!-- The Base of the cauldron -->
                <ellipse class="icon-cauldron-vessel" cx="11" cy="17" rx="8" ry="6" />
            </svg>
        `;
    }
}