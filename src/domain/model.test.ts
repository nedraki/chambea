import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseCV, blankCV, safeUrl } from './model';
import { sampleCV } from './sample';
import { plainText } from '../components/Preview';
test('sample and blank documents round-trip without data loss',()=>{for(const cv of [sampleCV,blankCV()])assert.deepEqual(parseCV(JSON.stringify(cv)),cv);});
test('rejects malformed, unsupported, duplicate, and dangling records',()=>{
 for(const raw of ['null','{}','{',JSON.stringify({...sampleCV,schemaVersion:2}),JSON.stringify({...sampleCV,education:[{id:'x'}]})])assert.throws(()=>parseCV(raw));
 const duplicate=structuredClone(sampleCV);duplicate.technologies.push(duplicate.technologies[0]);assert.throws(()=>parseCV(JSON.stringify(duplicate)));
 const missing=structuredClone(sampleCV);missing.technologies=[];assert.throws(()=>parseCV(JSON.stringify(missing)));
});
test('rejects executable and relative links',()=>{assert.equal(safeUrl('javascript:alert(1)'),undefined);assert.equal(safeUrl('/relative'),undefined);assert.equal(safeUrl('https://example.com'),'https://example.com/');});
test('legacy documents without a projects key import as empty and invalid projects are rejected',()=>{
 const legacy=structuredClone(sampleCV);delete legacy.projects;delete legacy.projectTools;
 assert.deepEqual(parseCV(JSON.stringify(legacy)).projects,[]);
 assert.deepEqual(parseCV(JSON.stringify(legacy)).projectTools,[]);
 const dangling=structuredClone(sampleCV);dangling.projects[0].achievements[0].technologyIds=['missing'];assert.throws(()=>parseCV(JSON.stringify(dangling)));
 const dupProject=structuredClone(sampleCV);dupProject.projects[1].id=dupProject.projects[0].id;assert.throws(()=>parseCV(JSON.stringify(dupProject)));
 const danglingTool=structuredClone(sampleCV);danglingTool.projectTools=['missing'];assert.throws(()=>parseCV(JSON.stringify(danglingTool)));
 const dupTool=structuredClone(sampleCV);dupTool.projectTools=['t1','t1'];assert.throws(()=>parseCV(JSON.stringify(dupTool)));
});
test('ATS text preserves reading order, explicit URLs and linked technologies',()=>{
 const cv=structuredClone(sampleCV) as import('./model').CV;
 cv.education=[{id:'test-ed',degree:'Test degree',institution:'Test institution',start:'',end:'',details:''}];
 cv.presentations=[{id:'test-talk',title:'Test talk',conference:'Test event',date:'',location:'',url:''}];
 cv.experiences[0].achievements=[{id:'test-a',text:'Delivered a project.',technologyIds:['t1','t2']}];
 const text=plainText(cv);
 assert.ok(text.indexOf(cv.contact.name)<text.indexOf('WORK EXPERIENCE'));
 assert.ok(text.includes('Artist profile: https://www.grammy.com/artists/bad-bunny/243129/'));
 assert.ok(text.includes('Delivered a project.\n[Songwriting, Vocal performance]'));
 assert.ok(text.includes('CONFERENCE PRESENTATIONS'));
 assert.ok(text.indexOf('FEATURED PROJECTS')<text.indexOf('WORK EXPERIENCE')&&text.indexOf('WORK EXPERIENCE')<text.indexOf('EDUCATION'));
 assert.ok(text.includes('Un Verano Sin Ti (2022)\nURL: https://www.grammy.com/artists/bad-bunny/243129/'));
 assert.ok(text.includes('[Songwriting, Vocal performance, Studio recording]'));
});
