import { MultiWatchSources, WatchCallback, WatchOptions, WatchHandle, WatchSource } from 'vue';

declare function watchOnce<T extends Readonly<MultiWatchSources>>(source: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, true>>, options?: Omit<WatchOptions<true>, 'once'>): WatchHandle;
declare function watchOnce<T>(source: WatchSource<T>, cb: WatchCallback<T, T | undefined>, options?: Omit<WatchOptions<true>, 'once'>): WatchHandle;
declare function watchOnce<T extends object>(source: T, cb: WatchCallback<T, T | undefined>, options?: Omit<WatchOptions<true>, 'once'>): WatchHandle;

export { watchOnce };
