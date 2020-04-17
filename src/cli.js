// import { resolve } from 'path';
// import execa from 'execa';
// import { projectInstall } from 'pkg-install';

import { defaultTasks } from './tasks';

export async function cli(args) {
  try {
    const result = await defaultTasks.run();
    return result;
  } catch (error) {
    console.log(JSON.stringify(error, null, 4));
    process.exit(1);
  }
}
