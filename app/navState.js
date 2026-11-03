// Tracks whether a project page was opened from the project list in this
// session, so "Back" can return to the list (keeping its filter and scroll)
// instead of always pushing /projects. Resets on a full page load.
export const navState = { fromProjectList: false };
