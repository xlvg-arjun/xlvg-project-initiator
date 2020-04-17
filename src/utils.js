import { resolve } from 'path';

export function formDesinationPath(destinationName) {
  const destinationPathFormed = resolve(process.cwd(), destinationName);
  return destinationPathFormed;
}

export function CreateRejectWithErrorMessage(errorMessage) {
  return Promise.reject(new Error(errorMessage));
}
