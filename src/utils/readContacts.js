import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB);
    return JSON.parse(contacts);
  } catch (error) {
    console.error('Error while read contacts ', error);
  }
};

readContacts();
