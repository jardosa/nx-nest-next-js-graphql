import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_EXTERNAL_GRAPHQL_URL,
  documents: 'libs/data-access/src/lib/graphql/**/*.graphql',
  generates: {
    'libs/data-access/src/lib/graphql/types.ts': { plugins: ['typescript'] },
    'libs/data-access/src/lib/graphql': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo', {
        'add': {
          placement: 'prepend',
          content: '//@ts-ignore'
        }
      }],
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        enumsAsTypes: true,
        defaultScalarType: "unknown",
        scalars: {
          "DateTime": "string",
          "DateTimeOffset": "string",
          "Decimal": "number",
          "GUID": "string",
        }
      }
    },
  },
};
export default config;