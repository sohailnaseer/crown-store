import { createSelector } from 'reselect';

const directorySelect = (state) => state.directory;

export const selectSections = createSelector(
  [directorySelect],
  (directory) => directory.sections
);
