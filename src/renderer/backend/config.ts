import { IDBVersioningConfig } from './DBRepository';

// The name of the IndexedDB
export const DB_NAME = 'Allusion';

// This should be incremented every time the config changes before a release
// The version is not used at the moment, but is useful in the future to properly upgrade the DB
export const DB_VERSION = 1;

// Schema based on https://dexie.org/docs/Version/Version.stores()#schema-syntax
// Only for the indexes of the DB, not all fields
// Versions help with upgrading DB to new configurations:
// https://dexie.org/docs/Tutorial/Design#database-versioning
export const dbConfig: IDBVersioningConfig[] = [
  {
    version: 1,
    collections: [
      {
        name: 'files',
        schema: '++id, *tags, dateAdded, name, extension, size',
      },
      {
        name: 'tags',
        schema: '++id',
      },
      {
        name: 'tagCollections',
        schema: '++id',
      },
    ],
  },
];
