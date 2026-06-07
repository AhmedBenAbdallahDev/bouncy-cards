import R from"./Cv5ZTRhq.js";import{_ as T}from"./4sYB7ZXR.js";import{_ as z,j as N,y as V,k as F,N as L,s as Q,l as A,m as G,O as U,P as W,c as s,o as t,d as _,F as x,q as P,p as g,x as X,t as h,a as m,b as j,C as J,z as K,Q as Z,E as ee,v as S,w as te,e as ae,R as q,S as se,G as ie,L as re}from"./Ibg-He6l.js";import{u as oe}from"./CyqqKHX3.js";import{u as ne}from"./DlYJA8lT.js";import le from"./BVSQue_b.js";import"./ou3d4iIc.js";const de=["mounted"],ce={class:"hero__mid"},_e=["aria-label"],pe={key:0,"aria-hidden":"",class:"space"},ue={class:"hero__images"},me=["aria-label"],ye={key:0,"aria-hidden":"",class:"space"},he={class:"hero__top"},ge={class:"hero__location"},fe={class:"hero__bot"},ve={class:"hero__clients"},ke={__name:"Hero",props:["data"],setup(i){const p=i,y=N({headline_a:p.data.headline.line_a.split(" "),headline_b:p.data.headline.line_b.split(" ")}),Y=V(),w=N(null),$=N(null),f=N(p.data.images.map(()=>{const d={x:0,y:0,velocity:{x:0,y:0},spring:oe()};return d.spring.target.x=d.spring.current.x=Math.random()*200-100,d.spring.target.y=d.spring.current.y=Math.random()*200-100,setTimeout(()=>{d.spring.target.x=0,d.spring.target.y=0},100),d}));F($,([d])=>{f.value.forEach((r,B)=>{const u=w.value[B],{x:o,y:b,width:k,height:M}=u.getBoundingClientRect();r.x=o+k*.5,r.y=b+v.value+M*.5})});const{x:n,y:a,movementX:l,movementY:c}=ne({target:$}),{y:v}=L(),{add:D,remove:C}=Q(),{stop:H}=A($,([{isIntersecting:d}])=>{d?D(e):C(e)});G(()=>{H(),C(e)});function e(d){f.value.forEach((r,B)=>{r.velocity.x*=.9,r.velocity.y*=.9,r.spring.current.x+=r.velocity.x,r.spring.current.y+=r.velocity.y,r.spring.update(d);const u=(n.value-r.x)/window.innerWidth*2,o=(a.value+v.value-r.y)/window.innerHeight*2,b=Math.sqrt(u*u+o*o),k=Math.pow(1-b,6)*.4;r.velocity.x+=l.value*k,r.velocity.y+=c.value*k})}const O=p.data.images.map(d=>({rel:"preload",href:U(d).width(600).height(600).url(),as:"image",type:"image/jpg"}));return W({link:[...O]}),(d,r)=>{const B=T;return t(),s("div",{class:"hero",ref_key:"root",ref:$,mounted:m(Y)},[_("div",ce,[_("h1",{"aria-label":i.data.headline.line_a},[(t(!0),s(x,null,P(m(y).headline_a,(u,o)=>(t(),s(x,{key:u},[_("span",{class:"word",style:X({"--delay":o}),"aria-hidden":""},h(u),5),o<m(y).headline_a.length-1?(t(),s("span",pe)):g("",!0)],64))),128))],8,_e),_("div",ue,[(t(!0),s(x,null,P(i.data.images,(u,o)=>{var b,k,M,E;return t(),s("div",{key:u.asset._id,ref_for:!0,ref_key:"images",ref:w,class:"hero__image",style:X({"--delay":o,"--offsetX":(b=m(f)[o])==null?void 0:b.spring.current.x,"--offsetY":(k=m(f)[o])==null?void 0:k.spring.current.y,"--velocity":((M=m(f)[o])==null?void 0:M.spring.velocity.x)-((E=m(f)[o])==null?void 0:E.spring.velocity.y)})},[r[0]||(r[0]=_("div",{class:"shadow"},null,-1)),j(B,{draggable:"false",src:u.asset._ref,alt:"",fetchpriority:"high",sizes:"100px sm:150px md:200px",width:"400",height:"400"},null,8,["src"])],4)}),128))]),_("h2",{"aria-label":i.data.headline.line_b},[(t(!0),s(x,null,P(m(y).headline_b,(u,o)=>(t(),s(x,{key:o},[_("span",{class:"word",style:X({"--delay":o+m(y).headline_a.length}),"aria-hidden":""},h(u),5),o<m(y).headline_b.length-1?(t(),s("span",ye)):g("",!0)],64))),128))],8,me)]),_("div",he,[_("p",ge,h(i.data.details_top.line_a),1),_("small",null,h(i.data.details_top.line_b),1)]),_("div",fe,[_("p",ve,h(i.data.details_bottom.line_a),1),_("small",null,h(i.data.details_bottom.line_b),1)])],8,de)}}},xe=z(ke,[["__scopeId","data-v-a1f66af5"]]),be={class:"text-block"},Ie={key:0,class:"text-block__title"},je={key:1,class:"text-block__description"},we={__name:"TextBlock",props:["title","description"],setup(i){return(p,y)=>(t(),s("div",be,[i.title?(t(),s("h4",Ie,h(i.title),1)):g("",!0),i.description?(t(),s("p",je,h(i.description),1)):g("",!0)]))}},$e=z(we,[["__scopeId","data-v-df12cf54"]]);function I(i,p){return Math.random()*(p-i)+i}const Ce={class:"index-page"},Be={key:0,class:"index-page__project"},Me={key:1,class:"index-page__project"},Ne={key:2,class:"index-page__project"},Se={__name:"index",async setup(i){let p,y;const Y=J`*[ _type == "index"][0]{
  title,
  slug,
  hero,
  sections[]{
    _type == 'carouselblock' && !all => {
      _id,
      _type,
      all,
      title,
      description,
      projects[]->{
        _id,
        title,
        description,
        slug,
        media[] {
          _type,
          _key,
          asset->{
            _id,
            _type,
            playbackId,
            assetId,
            filename,
            metadata
          }
        }
      }
    },
    _type == 'carouselblock' && all => {
      _id,
      _type,
      all,
      title,
      description,
      "projects": *[ _type == "project"]{
        _id,
        title,
        description,
        slug,
        media[] {
          _type,
          _key,
          asset->{
            _id,
            _type,
            playbackId,
            assetId,
            filename,
            metadata
          }
        }
      }
    },
    _type == 'gridblock' && !all => {
      _id,
      _type,
      all,
      title,
      description,
      projects[]->{
        _id,
        title,
        description,
        slug,
        media[] {
          _type,
          _key,
          asset->{
            _id,
            _type,
            playbackId,
            assetId,
            filename,
            metadata
          }
        }
      }
    },
    _type == 'gridblock' && all => {
      _id,
      _type,
      all,
      title,
      description,
      "projects": *[ _type == "project"]{
        _id,
        title,
        description,
        slug,
        media[] {
          _type,
          _key,
          asset->{
            _id,
            _type,
            playbackId,
            assetId,
            filename,
            metadata
          }
        }
      }
    },
    _type == 'projectblock' => {
      _type,
      _id,
      display,
      project->{
        _id,
        title,
        description,
        slug,
        media[] {
          _type,
          _key,
          asset->{
            _id,
            _type,
            playbackId,
            assetId,
            filename,
            metadata
          }
        }
      }
    }
  }
}`,{data:w,pending:$,status:f}=([p,y]=K(()=>Z(Y,{},{getCachedData:(n,a)=>{const{data:l}=ee(n);return a.isHydrating?a.payload.data[n]:l.value||a.static.data[n]},transform:n=>(n.sections=n.sections.map(a=>(a._type==="gridblock"?a.projects=a.projects.map(l=>(l.media=l.media.map((c,v)=>(c.offsetX=I(4,10)*Math.sign(I(-1,1)),c.offsetY=(l.media.length-v)*5,c.rotation=I(2,5)*(v%2*2-1),c)),l)):(a==null?void 0:a.display)==="stack"&&(a.project.media=a.project.media.map((l,c)=>(l.offsetX=I(4,10)*Math.sign(I(-1,1)),l.offsetY=(a.project.media.length-c)*5,l.rotation=I(2,5)*(c%2*2-1),l))),a)),n)})),p=await p,y(),p);return(n,a)=>{const l=xe,c=$e,v=re,D=R,C=le,H=ie;return t(),s("div",Ce,[j(l,{data:m(w).hero},null,8,["data"]),(t(!0),s(x,null,P(m(w).sections,e=>(t(),s(x,{key:e._id},[e._type==="projectblock"?(t(),s("section",Be,[j(c,{title:e.project.title,description:e.project.description},null,8,["title","description"]),e.display!=="stack"?(t(),S(v,{key:0,rel:"expect",to:`/${e.project.slug.current}`,"aria-label":e.project.title},{default:te(()=>a[0]||(a[0]=[ae("See more")])),_:2},1032,["to","aria-label"])):g("",!0),(t(),S(se(e.display),{post:e.project,curve:!0,useIntersect:!0,active:(n._.provides[q]||n.$route).name==="index"},null,8,["post","active"]))])):e._type==="carouselblock"?(t(),s("section",Me,[e.title||e.description?(t(),S(c,{key:0,title:e.title,description:e.description},null,8,["title","description"])):g("",!0),j(D,{posts:e.projects,curve:!0,useIntersect:!0,active:(n._.provides[q]||n.$route).name==="index"},null,8,["posts","active"])])):e._type==="gridblock"?(t(),s("section",Ne,[e.title||e.description?(t(),S(c,{key:0,title:e.title,description:e.description},null,8,["title","description"])):g("",!0),j(C,{projects:e.projects,useIntersect:!0,active:(n._.provides[q]||n.$route).name==="index"},null,8,["projects","active"])])):g("",!0)],64))),128)),j(H)])}}},Ee=z(Se,[["__scopeId","data-v-0fe2a27b"]]);export{Ee as default};
