import{S as Fe,i as We,s as je,k as u,q as E,a as L,l as _,m,r as w,h as o,c as H,n as A,b as n,C as x,A as G,H as Q}from"../../../chunks/index-638afe53.js";let I={general:["When going out of bounds players get 10 seconds to get back in, while vehicles get 30 seconds.","For classes/loadouts that get AP mines, make sure to place, you get more when you respawn.","Tanks cannot destroy engineer structures, but stachels can."],gameModes:{offensive:["Premade garrisons can only be destroyed by dismantling them or taking the second point."]},roles:{antiTank:["You get two rockets every time you spawn, try not to die without using them.","Rockets can destroy OPs and garrisons."],armor:["Always load armour piercing first.","Players render at 500m and vehicles at 1000m.","Once you have unlocked the loadout with the torch, you should always run it."],commander:["You can drop preemptive supplies deep in enemy territory, which make it harder for the enemy to spot.","You can drop supplies in unaccesable areas of the map, a good example would be the middle area of Carentan."],engineer:["Repair stations also exist, try to make one every once in a while.","You can place supplies from a supply track past the second row/column and build nodes before the second row/column. This prevents them from being automatically destroyed if the enemy takes the second to last point on your side of the map."],officer:["Always be looking for or thinking about a place to put a new garrison down at."],support:["If you don't have a need for your supplies and their off cooldown, place them on point, your anti-tank/engineers/officers will love you for it.","Those ammo and explosive boxes do no good for your team if you never place them."]}};function Ae(c,t,f){const s=c.slice();return s[0]=t[f],s}function Te(c,t,f){const s=c.slice();return s[0]=t[f],s}function Ue(c,t,f){const s=c.slice();return s[0]=t[f],s}function Ce(c,t,f){const s=c.slice();return s[0]=t[f],s}function Me(c,t,f){const s=c.slice();return s[0]=t[f],s}function Pe(c,t,f){const s=c.slice();return s[0]=t[f],s}function Ge(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function Oe(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function Re(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function Ye(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function qe(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function Se(c){let t,f=c[0]+"",s;return{c(){t=u("li"),s=E(f),this.h()},l(r){t=_(r,"LI",{class:!0});var a=m(t);s=w(a,f),a.forEach(o),this.h()},h(){A(t,"class","list-group-item")},m(r,a){n(r,t,a),x(t,s)},p:G,d(r){r&&o(t)}}}function ze(c){let t,f,s,r,a,O,ae,V,R,fe,X,T,Z,Y,ce,$,q,he,ee,U,le,S,ue,te,F,_e,oe,C,se,W,me,ie,M,re,j,pe,ne,P,z=I.general,v=[];for(let e=0;e<z.length;e+=1)v[e]=Ge(Pe(c,z,e));let B=I.gameModes.offensive,g=[];for(let e=0;e<B.length;e+=1)g[e]=Oe(Me(c,B,e));let D=I.roles.commander,d=[];for(let e=0;e<D.length;e+=1)d[e]=Re(Ce(c,D,e));let J=I.roles.antiTank,k=[];for(let e=0;e<J.length;e+=1)k[e]=Ye(Ue(c,J,e));let K=I.roles.engineer,y=[];for(let e=0;e<K.length;e+=1)y[e]=qe(Te(c,K,e));let N=I.roles.armor,b=[];for(let e=0;e<N.length;e+=1)b[e]=Se(Ae(c,N,e));return{c(){t=u("h1"),f=E("General"),s=L(),r=u("ul");for(let e=0;e<v.length;e+=1)v[e].c();a=L(),O=u("h1"),ae=E("Game Modes"),V=L(),R=u("h3"),fe=E("Offensive"),X=L(),T=u("ul");for(let e=0;e<g.length;e+=1)g[e].c();Z=L(),Y=u("h1"),ce=E("Roles"),$=L(),q=u("h3"),he=E("Commander"),ee=L(),U=u("ul");for(let e=0;e<d.length;e+=1)d[e].c();le=L(),S=u("h3"),ue=E("Infantry"),te=L(),F=u("h5"),_e=E("Anti-Tank"),oe=L(),C=u("ul");for(let e=0;e<k.length;e+=1)k[e].c();se=L(),W=u("h5"),me=E("Engineer"),ie=L(),M=u("ul");for(let e=0;e<y.length;e+=1)y[e].c();re=L(),j=u("h3"),pe=E("Armor"),ne=L(),P=u("ul");for(let e=0;e<b.length;e+=1)b[e].c();this.h()},l(e){t=_(e,"H1",{});var i=m(t);f=w(i,"General"),i.forEach(o),s=H(e),r=_(e,"UL",{class:!0});var l=m(r);for(let h=0;h<v.length;h+=1)v[h].l(l);l.forEach(o),a=H(e),O=_(e,"H1",{});var p=m(O);ae=w(p,"Game Modes"),p.forEach(o),V=H(e),R=_(e,"H3",{});var ve=m(R);fe=w(ve,"Offensive"),ve.forEach(o),X=H(e),T=_(e,"UL",{class:!0});var ge=m(T);for(let h=0;h<g.length;h+=1)g[h].l(ge);ge.forEach(o),Z=H(e),Y=_(e,"H1",{});var de=m(Y);ce=w(de,"Roles"),de.forEach(o),$=H(e),q=_(e,"H3",{});var ke=m(q);he=w(ke,"Commander"),ke.forEach(o),ee=H(e),U=_(e,"UL",{class:!0});var ye=m(U);for(let h=0;h<d.length;h+=1)d[h].l(ye);ye.forEach(o),le=H(e),S=_(e,"H3",{});var be=m(S);ue=w(be,"Infantry"),be.forEach(o),te=H(e),F=_(e,"H5",{});var Ee=m(F);_e=w(Ee,"Anti-Tank"),Ee.forEach(o),oe=H(e),C=_(e,"UL",{class:!0});var we=m(C);for(let h=0;h<k.length;h+=1)k[h].l(we);we.forEach(o),se=H(e),W=_(e,"H5",{});var xe=m(W);me=w(xe,"Engineer"),xe.forEach(o),ie=H(e),M=_(e,"UL",{class:!0});var Le=m(M);for(let h=0;h<y.length;h+=1)y[h].l(Le);Le.forEach(o),re=H(e),j=_(e,"H3",{});var He=m(j);pe=w(He,"Armor"),He.forEach(o),ne=H(e),P=_(e,"UL",{class:!0});var Ie=m(P);for(let h=0;h<b.length;h+=1)b[h].l(Ie);Ie.forEach(o),this.h()},h(){A(r,"class","list-group"),A(T,"class","list-group"),A(U,"class","list-group"),A(C,"class","list-group"),A(M,"class","list-group"),A(P,"class","list-group")},m(e,i){n(e,t,i),x(t,f),n(e,s,i),n(e,r,i);for(let l=0;l<v.length;l+=1)v[l].m(r,null);n(e,a,i),n(e,O,i),x(O,ae),n(e,V,i),n(e,R,i),x(R,fe),n(e,X,i),n(e,T,i);for(let l=0;l<g.length;l+=1)g[l].m(T,null);n(e,Z,i),n(e,Y,i),x(Y,ce),n(e,$,i),n(e,q,i),x(q,he),n(e,ee,i),n(e,U,i);for(let l=0;l<d.length;l+=1)d[l].m(U,null);n(e,le,i),n(e,S,i),x(S,ue),n(e,te,i),n(e,F,i),x(F,_e),n(e,oe,i),n(e,C,i);for(let l=0;l<k.length;l+=1)k[l].m(C,null);n(e,se,i),n(e,W,i),x(W,me),n(e,ie,i),n(e,M,i);for(let l=0;l<y.length;l+=1)y[l].m(M,null);n(e,re,i),n(e,j,i),x(j,pe),n(e,ne,i),n(e,P,i);for(let l=0;l<b.length;l+=1)b[l].m(P,null)},p(e,[i]){if(i&0){z=I.general;let l;for(l=0;l<z.length;l+=1){const p=Pe(e,z,l);v[l]?v[l].p(p,i):(v[l]=Ge(p),v[l].c(),v[l].m(r,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=z.length}if(i&0){B=I.gameModes.offensive;let l;for(l=0;l<B.length;l+=1){const p=Me(e,B,l);g[l]?g[l].p(p,i):(g[l]=Oe(p),g[l].c(),g[l].m(T,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=B.length}if(i&0){D=I.roles.commander;let l;for(l=0;l<D.length;l+=1){const p=Ce(e,D,l);d[l]?d[l].p(p,i):(d[l]=Re(p),d[l].c(),d[l].m(U,null))}for(;l<d.length;l+=1)d[l].d(1);d.length=D.length}if(i&0){J=I.roles.antiTank;let l;for(l=0;l<J.length;l+=1){const p=Ue(e,J,l);k[l]?k[l].p(p,i):(k[l]=Ye(p),k[l].c(),k[l].m(C,null))}for(;l<k.length;l+=1)k[l].d(1);k.length=J.length}if(i&0){K=I.roles.engineer;let l;for(l=0;l<K.length;l+=1){const p=Te(e,K,l);y[l]?y[l].p(p,i):(y[l]=qe(p),y[l].c(),y[l].m(M,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=K.length}if(i&0){N=I.roles.armor;let l;for(l=0;l<N.length;l+=1){const p=Ae(e,N,l);b[l]?b[l].p(p,i):(b[l]=Se(p),b[l].c(),b[l].m(P,null))}for(;l<b.length;l+=1)b[l].d(1);b.length=N.length}},i:G,o:G,d(e){e&&o(t),e&&o(s),e&&o(r),Q(v,e),e&&o(a),e&&o(O),e&&o(V),e&&o(R),e&&o(X),e&&o(T),Q(g,e),e&&o(Z),e&&o(Y),e&&o($),e&&o(q),e&&o(ee),e&&o(U),Q(d,e),e&&o(le),e&&o(S),e&&o(te),e&&o(F),e&&o(oe),e&&o(C),Q(k,e),e&&o(se),e&&o(W),e&&o(ie),e&&o(M),Q(y,e),e&&o(re),e&&o(j),e&&o(ne),e&&o(P),Q(b,e)}}}class De extends Fe{constructor(t){super(),We(this,t,null,ze,je,{})}}export{De as default};