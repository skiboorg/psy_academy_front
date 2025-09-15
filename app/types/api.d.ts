import type { createDataRepository } from '~/repository/blank'


export type BlankRepository = ReturnType<typeof createBlankRepository>


export interface IApi {
    data: createDataRepository
}