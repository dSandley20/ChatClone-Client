export default function useGetStore(key: string): any {
  return window.electron.store.get(key);
}
