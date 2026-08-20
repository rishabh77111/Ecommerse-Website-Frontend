// export type TLogin={
//   email:string,
//   password:string
// }

import { loginSchema } from '@/schema/auth.schema'
import * as yup from 'yup'

export type TLogin=yup.InferType<typeof loginSchema>