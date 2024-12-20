import {blockContent} from './document/blockContent'
import {categorySchema} from './document/category'
import {homeSchema} from './document/home'
import {imageWithLayout} from './document/imageWithLayout'
import {memberSchema} from './document/member'
import {pageSchema} from './document/pages'
import {postSchema} from './document/post'

export const schemaTypes = [
  postSchema,
  categorySchema,
  homeSchema,
  memberSchema,
  pageSchema,
  blockContent,
  imageWithLayout,
]
