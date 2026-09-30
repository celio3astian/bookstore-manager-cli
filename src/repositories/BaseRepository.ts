export interface BaseRepository<T> {
  listar(): T[] | Promise<T[]>;
}