import{u as h,C as d,_ as r,a as p,I as m,b as u,c as l,d as g,h as w,G as W,f as v,i as C,j as f,J as y,K as T,k as b,l as E,A as R}from"./index.083a47d7.js";class n extends h{constructor(t,a,s){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new d(t,a,i,e);super(c,s,o),r(this,"abi",void 0),r(this,"metadata",void 0),r(this,"roles",void 0),r(this,"encoder",void 0),r(this,"estimator",void 0),r(this,"events",void 0),r(this,"sales",void 0),r(this,"platformFees",void 0),r(this,"royalties",void 0),r(this,"owner",void 0),r(this,"signature",void 0),r(this,"interceptor",void 0),r(this,"erc721",void 0),this.abi=i,this.metadata=new p(this.contractWrapper,m,this.storage),this.roles=new u(this.contractWrapper,n.contractRoles),this.royalties=new l(this.contractWrapper,this.metadata),this.sales=new g(this.contractWrapper),this.encoder=new w(this.contractWrapper),this.estimator=new W(this.contractWrapper),this.events=new v(this.contractWrapper),this.platformFees=new C(this.contractWrapper),this.interceptor=new f(this.contractWrapper),this.erc721=new y(this.contractWrapper,this.storage,o),this.signature=new T(this.contractWrapper,this.storage),this.owner=new b(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(E("transfer"),R)}async mint(t){return this.erc721.mint(t)}async mintTo(t,a){return this.erc721.mintTo(t,a)}async mintBatch(t){return this.erc721.mintBatch(t)}async mintBatchTo(t,a){return this.erc721.mintBatchTo(t,a)}async burn(t){return this.erc721.burn(t)}async call(t){for(var a=arguments.length,s=new Array(a>1?a-1:0),e=1;e<a;e++)s[e-1]=arguments[e];return this.contractWrapper.call(t,...s)}}r(n,"contractRoles",["admin","minter","transfer"]);export{n as NFTCollection};
