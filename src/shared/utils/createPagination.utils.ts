const createPagination = (array: any[], size: number): any[] =>{
  return array.length > size
   ? [array.slice(0, size), ...createPagination(array.slice(size), size)]
   : [array];
}

export default createPagination;