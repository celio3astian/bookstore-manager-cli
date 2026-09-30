export interface BaseRepository<T> {
  listar(): Promise<T[]>;
}