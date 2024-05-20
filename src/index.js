import yesno from 'yesno';

export async function confirm() {
  let ok = await yesno({ question: 'Are you sure? (y | n)' });

  if (!ok) {
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }

  return ok;
}


export const areYouSure = confirm;
