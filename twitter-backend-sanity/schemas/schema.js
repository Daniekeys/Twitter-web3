// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
// Then we give our schema to the builder and provide the result to Sanity
import { tweetSchema } from './tweetSchema'
import {userSchema} from './userSchema'

import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    userSchema,tweetSchema
  ]),
})
