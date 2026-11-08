import { parseCV, type CV } from '../domain/model';
export interface CVRepository { load(): CV | null; save(cv: CV): void }
// Retain the original key so existing browser drafts survive the app rename.
export const STORAGE_KEY = 'cv-studio.document.v1';
// Replace this adapter with Tauri filesystem storage without changing editor components.
export const localRepository: CVRepository = {
 load() { const raw = localStorage.getItem(STORAGE_KEY); return raw ? parseCV(raw) : null; },
 save(cv) { localStorage.setItem(STORAGE_KEY, JSON.stringify(cv)); }
};
export function download(content: string, filename: string, type: string) {
 const url=URL.createObjectURL(new Blob([content],{type})); const a=document.createElement('a'); a.href=url; a.download=filename; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
