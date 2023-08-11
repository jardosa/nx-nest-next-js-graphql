//@ts-ignore
import * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EchoMutationVariables = Types.Exact<{
  message: Types.Scalars['String']['input'];
}>;


export type EchoMutation = { __typename?: 'Mutation', echo: string };


export const EchoDocument = gql`
    mutation Echo($message: String!) {
  echo(message: $message)
}
    `;
export type EchoMutationFn = Apollo.MutationFunction<EchoMutation, EchoMutationVariables>;

/**
 * __useEchoMutation__
 *
 * To run a mutation, you first call `useEchoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEchoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [echoMutation, { data, loading, error }] = useEchoMutation({
 *   variables: {
 *      message: // value for 'message'
 *   },
 * });
 */
export function useEchoMutation(baseOptions?: Apollo.MutationHookOptions<EchoMutation, EchoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EchoMutation, EchoMutationVariables>(EchoDocument, options);
      }
export type EchoMutationHookResult = ReturnType<typeof useEchoMutation>;
export type EchoMutationResult = Apollo.MutationResult<EchoMutation>;
export type EchoMutationOptions = Apollo.BaseMutationOptions<EchoMutation, EchoMutationVariables>;