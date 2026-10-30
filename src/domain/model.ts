export interface Link { id: string; label: string; url: string }
export interface Technology { id: string; name: string }
export interface Achievement { id: string; text: string; technologyIds: string[] }
export interface Experience { id: string; role: string; company: string; location: string; start: string; end: string; achievements: Achievement[] }
export interface Education { id: string; degree: string; institution: string; start: string; end: string; details: string }
export interface Certification { id: string; name: string; issuer: string; date: string; url: string }
export interface Presentation { id: string; title: string; conference: string; date: string; location: string; url: string }
export interface Project { id: string; name: string; url: string; achievements: Achievement[] }
export interface CV { schemaVersion: 1; contact: { name: string; headline?: string; email: string; phone: string; location: string; languages?: string; additionalInfo?: string; links: Link[] }; summary: string; technologies: Technology[]; experiences: Experience[]; projects?: Project[]; projectTools?: string[]; education: Education[]; certifications: Certification[]; presentations: Presentation[] }
export const id = () => crypto.randomUUID();
export const blankCV = (): CV => ({schemaVersion:1,contact:{name:'',headline:'',email:'',phone:'',location:'',languages:'',additionalInfo:'',links:[]},summary:'',technologies:[],experiences:[],projects:[],projectTools:[],education:[],certifications:[],presentations:[]});
export function safeUrl(value: string): string | undefined { try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined; } catch { return undefined; } }
// Validate the entire document at the boundary, before replacing a saved draft.
export function parseCV(raw: string): CV {
 const v: unknown = JSON.parse(raw);
 const obj = (x: unknown): x is Record<string, unknown> => typeof x === 'object' && x !== null && !Array.isArray(x);
 const strings = (x: Record<string,unknown>, keys: string[]) => keys.every(k => typeof x[k] === 'string');
 const list = (x: unknown, check: (v: Record<string,unknown>)=>boolean): boolean => Array.isArray(x) && x.every(i => obj(i) && check(i)) && new Set(x.map(i=>i.id)).size === x.length;
 if (!obj(v) || v.schemaVersion !== 1 || !obj(v.contact) || !strings(v.contact,['name','email','phone','location']) || (v.contact.headline!==undefined&&typeof v.contact.headline!=='string') || (v.contact.languages!==undefined&&typeof v.contact.languages!=='string') || (v.contact.additionalInfo!==undefined&&typeof v.contact.additionalInfo!=='string') || typeof v.summary !== 'string' ||
 !list(v.contact.links,x=>strings(x,['id','label','url'])) || !list(v.technologies,x=>strings(x,['id','name'])) ||
 !list(v.experiences,x=>strings(x,['id','role','company','location','start','end']) && list(x.achievements,a=>strings(a,['id','text']) && Array.isArray(a.technologyIds) && a.technologyIds.every(t=>typeof t==='string'))) ||
 !list(v.education,x=>strings(x,['id','degree','institution','start','end','details'])) ||
 (v.projects!==undefined&&!list(v.projects,x=>strings(x,['id','name','url']) && list(x.achievements,a=>strings(a,['id','text']) && Array.isArray(a.technologyIds) && a.technologyIds.every(t=>typeof t==='string')))) ||
 (v.projectTools!==undefined&&!(Array.isArray(v.projectTools)&&v.projectTools.every(t=>typeof t==='string')&&new Set(v.projectTools).size===v.projectTools.length)) ||
 !list(v.certifications,x=>strings(x,['id','name','issuer','date','url'])) ||
 !list(v.presentations,x=>strings(x,['id','title','conference','date','location','url']))) throw new Error('This file is not a valid CV Studio v1 document. Your current draft has not been changed.');
 const cv = v as unknown as CV;
 if(cv.projects===undefined) cv.projects=[];
 if(cv.projectTools===undefined) cv.projectTools=[];
 const techIds = new Set(cv.technologies.map(t=>t.id));
 if(cv.experiences.some(e=>e.achievements.some(a=>a.technologyIds.some(t=>!techIds.has(t)))) || (cv.projects??[]).some(p=>p.achievements.some(a=>a.technologyIds.some(t=>!techIds.has(t)))) || (cv.projectTools??[]).some(t=>!techIds.has(t))) throw new Error('Some achievements reference missing technologies. Your draft has not been changed.');
 return cv;
}
