import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['cli/index'],
  outDir: 'bin'
});
