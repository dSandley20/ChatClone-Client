export default function useSaveStore(key: string, value: any): void {
  window.electron.store.set(key, value);
}
