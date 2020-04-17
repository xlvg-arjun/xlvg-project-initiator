import execa from 'execa';
import { projectInstall } from 'pkg-install';
import Listr from 'listr';

import { CreateRejectWithErrorMessage } from './utils';

const { projectPath } = global;

async function cloneTheThingToStart() {
  const resultCloning = await execa('git', ['clone', 'https://github.com/arjunepr/react-reusable-component-boilerplate.git', projectPath]);
  if (resultCloning.failed) {
    return CreateRejectWithErrorMessage('Failed to clone');
  }
}

async function initGit() {
  const result = await execa('git', ['init'], {
    cwd: projectPath,
  });
  if (result.failed) {
    return CreateRejectWithErrorMessage('Failed to initialize git');
  }
}

async function installDependencies() {
  await projectInstall({ cwd: projectPath });
}

const defaultTasks = new Listr([
  {
    title: 'Clone to start',
    task: () => cloneTheThingToStart(),
  },
  {
    title: 'Initialize git',
    task: () => initGit(),
  },
  {
    title: 'Install dependencies',
    task: () => installDependencies(),
  },
]);

export {
  cloneTheThingToStart,
  initGit,
  installDependencies,
  defaultTasks,
}
