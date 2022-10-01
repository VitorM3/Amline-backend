export interface Pagination<T>{
    data: T,
    page: number,
    totalPages: number,
    itensPerPage: number
}