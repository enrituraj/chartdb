import { createContext } from 'react';
import { DBTable } from '@/lib/domain/db-table';
import { emptyFn } from '@/lib/utils';
import { DatabaseType } from '@/lib/domain/database-type';
import { DBField } from '@/lib/domain/db-field';
import { DBIndex } from '@/lib/domain/db-index';

export interface ChartDBContext {
    databaseType: DatabaseType;
    tables: DBTable[];

    // Database type operations
    setDatabaseType: (databaseType: DatabaseType) => void;

    // Table operations
    createTable: () => DBTable;
    addTable: (table: DBTable) => void;
    getTable: (id: string) => DBTable | null;
    removeTable: (id: string) => void;
    updateTable: (id: string, table: Partial<DBTable>) => void;

    // Field operations
    getField: (tableId: string, fieldId: string) => DBField | null;
    updateField: (
        tableId: string,
        fieldId: string,
        field: Partial<DBField>
    ) => void;
    removeField: (tableId: string, fieldId: string) => void;
    createField: (tableId: string) => DBField;
    addField: (tableId: string, field: DBField) => void;

    // Index operations
    createIndex: (tableId: string) => DBIndex;
    addIndex: (tableId: string, index: DBIndex) => void;
    getIndex: (tableId: string, indexId: string) => DBIndex | null;
    removeIndex: (tableId: string, indexId: string) => void;
    updateIndex: (
        tableId: string,
        indexId: string,
        index: Partial<DBIndex>
    ) => void;
}

export const chartDBContext = createContext<ChartDBContext>({
    databaseType: DatabaseType.GENERIC,
    tables: [],

    // Database type operations
    setDatabaseType: emptyFn,

    // Table operations
    createTable: emptyFn,
    getTable: emptyFn,
    addTable: emptyFn,
    removeTable: emptyFn,
    updateTable: emptyFn,

    // Field operations
    updateField: emptyFn,
    removeField: emptyFn,
    createField: emptyFn,
    addField: emptyFn,
    getField: emptyFn,

    // Index operations
    createIndex: emptyFn,
    addIndex: emptyFn,
    getIndex: emptyFn,
    removeIndex: emptyFn,
    updateIndex: emptyFn,
});
