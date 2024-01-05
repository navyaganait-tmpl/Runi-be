"use strict";(self.webpackChunkruno=self.webpackChunkruno||[]).push([[3243],{76368:(h,g,t)=>{t.d(g,{D:()=>O});var s=t(74081),e=t(93415),l=t(67621);function M(c,d,E){if(!c||!d||!E)return{display:"none"};const{x:P,y:n}=E;return{transform:`translate(${P}px, ${n}px)`}}const O=({renderItem:c})=>{const{itemType:d,isDragging:E,item:P,initialOffset:n,currentOffset:D,mouseOffset:_}=(0,l.useDragLayer)(r=>({item:r.getItem(),itemType:r.getItemType(),initialOffset:r.getInitialSourceClientOffset(),currentOffset:r.getSourceClientOffset(),isDragging:r.isDragging(),mouseOffset:r.getClientOffset()}));return E?(0,s.jsx)(e.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,s.jsx)(e.x,{style:M(n,D,_),children:c({type:d,item:P})})}):null}},55535:(h,g,t)=>{t.d(g,{B:()=>j,D:()=>R,H:()=>w,R:()=>W});var s=t(74081),e=t(10701),l=t(32370),M=t(27997),O=t(73354),c=t(74758),d=t(27875),E=t(87006),P=t(10411),n=t(76827),D=t(61020),_=t(76368),r=t(47706),m=t(70627),o=t(72450);const A=(0,o.ZP)(e.k)`
  svg path {
    fill: ${({theme:f})=>f.colors.neutral600};
  }
`;function T({name:f}){return(0,s.jsxs)(e.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,E.Q1)(300),children:[(0,s.jsx)(A,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,s.jsx)(P.Z,{width:`${8/16}rem`})}),(0,s.jsx)(l.Z,{fontWeight:"bold",children:f})]})}T.propTypes={name:m.string.isRequired};function B({type:f,item:v}){switch(f){case r.D.STAGE:return(0,s.jsx)(T,{...v});default:return null}}function R(){return(0,s.jsx)(_.D,{renderItem:B})}function W({children:f}){return(0,s.jsx)(M.A,{children:(0,s.jsx)(O.o,{tabIndex:-1,children:(0,s.jsx)(c.D,{children:f})})})}function j({href:f}){const{formatMessage:v}=(0,D.Z)();return(0,s.jsx)(E.rU,{startIcon:(0,s.jsx)(n.Z,{}),to:f,children:v({id:"global.back",defaultMessage:"Back"})})}function w({title:f,subtitle:v,navigationAction:U,primaryAction:y}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(E.SL,{name:f}),(0,s.jsx)(d.T,{navigationAction:U,primaryAction:y,title:f,subtitle:v})]})}},53243:(h,g,t)=>{t.r(g),t.d(g,{default:()=>X});var s=t(74081),e=t(87006),l=t(59461),M=t(38178),O=t(27279),c=t(10701),d=t(77970),E=t(70774),P=t(38566),n=t(38101),D=t(93153),_=t(50086),r=t(32370),m=t(10989),o=t(86967),A=t(4987),T=t(36938),B=t(26784),R=t(78665),W=t(61020),j=t(40464),w=t(51447),f=t(72450),v=t(59491),U=t(66360),y=t(55535),p=t(78099),C=t(47706),z=t(88181),ct=t(64797),gt=t(85811),Mt=t(66333),Ot=t(15816),ft=t(97442),Pt=t(13576),mt=t(87830),vt=t(47184),ut=t(364),ht=t(71563),Ct=t(49204),Tt=t(47853),Lt=t(75719),yt=t(74919),xt=t(29206),It=t(98934),At=t(43433),Bt=t(8175),Rt=t(76368);const G=(0,f.ZP)(e.rU)`
  align-items: center;
  height: ${(0,e.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,e.Q1)(32)};

  svg {
    height: ${(0,e.Q1)(12)};
    width: ${(0,e.Q1)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`;function V(){const{formatMessage:a}=(0,W.Z)(),{push:Z}=(0,w.k6)(),{collectionTypes:J,singleTypes:b,isLoading:q}=(0,v.u)(),{meta:L,workflows:k,isLoading:K,refetch:tt}=(0,z.u)(),[Q,S]=O.useState(null),[st,x]=O.useState(!1),{del:et}=(0,e.kY)(),{formatAPIError:nt}=(0,e.So)(),F=(0,e.lm)(),{getFeature:at,isLoading:N}=(0,U.u)(),{trackUsage:H}=(0,e.rS)(),ot=(0,l.v9)(M.s),{allowedActions:{canCreate:Y,canDelete:it}}=(0,e.ss)(ot.settings["review-workflows"]),u=at("review-workflows"),{mutateAsync:rt,isLoading:_t}=(0,j.useMutation)(async({workflowId:i,stages:I})=>{const{data:{data:$}}=await et(`/admin/review-workflows/workflows/${i}`,{data:I});return $},{onSuccess(){F({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),lt=i=>[...J,...b].find($=>$.uid===i).info.displayName,dt=i=>{S(i)},Et=()=>{S(null)},Dt=async()=>{try{const i=await rt({workflowId:Q});return await tt(),S(null),i}catch(i){return F({type:"warning",message:nt(i)}),null}};return O.useEffect(()=>{!K&&!N&&u?.[C.C]&&L?.workflowCount>parseInt(u[C.C],10)&&x(!0)},[N,K,u,L?.workflowCount,L.workflowsTotal]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y.H,{primaryAction:Y&&(0,s.jsx)(e.Qj,{startIcon:(0,s.jsx)(T.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:i=>{u?.[C.C]&&L?.workflowCount>=parseInt(u[C.C],10)?(i.preventDefault(),x(!0)):H("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,s.jsxs)(y.R,{children:[K||q?(0,s.jsx)(c.k,{justifyContent:"center",children:(0,s.jsx)(d.a,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,s.jsxs)(E.i,{colCount:3,footer:Y&&(0,s.jsx)(P.c,{icon:(0,s.jsx)(T.Z,{}),onClick:()=>{u?.[C.C]&&L?.workflowCount>=parseInt(u[C.C],10)?x(!0):(Z("/settings/review-workflows/create"),H("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,s.jsx)(n.h,{children:(0,s.jsxs)(D.Tr,{children:[(0,s.jsx)(_.Th,{children:(0,s.jsx)(r.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(r.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(r.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,s.jsx)(_.Th,{children:(0,s.jsx)(m.T,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(o.p,{children:k.map(i=>(0,O.createElement)(D.Tr,{...(0,e.X7)({fn(I){I.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${i.id}`)}}),key:`workflow-${i.id}`},(0,s.jsx)(_.Td,{width:(0,e.Q1)(250),children:(0,s.jsx)(r.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:i.name})}),(0,s.jsx)(_.Td,{children:(0,s.jsx)(r.Z,{textColor:"neutral800",children:i.stages.length})}),(0,s.jsx)(_.Td,{children:(0,s.jsx)(r.Z,{textColor:"neutral800",children:(i?.contentTypes??[]).map(lt).join(", ")})}),(0,s.jsx)(_.Td,{children:(0,s.jsxs)(c.k,{alignItems:"center",justifyContent:"end",children:[(0,s.jsx)(G,{to:`/settings/review-workflows/${i.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:i.name}),children:(0,s.jsx)(B.Z,{})}),k.length>1&&it&&(0,s.jsx)(A.h,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,s.jsx)(R.Z,{}),noBorder:!0,onClick:()=>{dt(i.id)}})]})})))})]}),(0,s.jsx)(e.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:_t,isOpen:!!Q,onToggleDialog:Et,onConfirm:Dt}),(0,s.jsxs)(p.L,{isOpen:st,onClose:()=>x(!1),children:[(0,s.jsx)(p.T,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(p.B,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})}function X(){const a=(0,l.v9)(M.s);return(0,s.jsx)(e.O4,{permissions:a.settings["review-workflows"].main,children:(0,s.jsx)(V,{})})}},59491:(h,g,t)=>{t.d(g,{u:()=>O});var s=t(27279),e=t(87006),l=t(53532),M=t(40464);function O(){const{get:c}=(0,e.kY)(),{formatAPIError:d}=(0,e.So)(),E=(0,e.lm)(),P=(0,M.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:o}}=await c("/content-manager/components");return o},onError(o){o instanceof l.d7&&E({type:"warning",message:d(o)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:o}}=await c("/content-manager/content-types");return o},onError(o){o instanceof l.d7&&E({type:"warning",message:d(o)})}}]),[n,D]=P,_=n.isLoading||D.isLoading,r=s.useMemo(()=>(D?.data??[]).filter(o=>o.kind==="collectionType"&&o.isDisplayed),[D?.data]),m=s.useMemo(()=>(D?.data??[]).filter(o=>o.kind!=="collectionType"&&o.isDisplayed),[D?.data]);return{isLoading:_,components:s.useMemo(()=>n?.data??[],[n?.data]),collectionTypes:r,singleTypes:m}}},88181:(h,g,t)=>{t.d(g,{u:()=>M});var s=t(27279),e=t(87006),l=t(40464);function M(O={}){const{get:c}=(0,e.kY)(),{id:d="",...E}=O,P={populate:"stages"},{data:n,isLoading:D,status:_,refetch:r}=(0,l.useQuery)(["review-workflows","workflows",d],async()=>(await c(`/admin/review-workflows/workflows/${d}`,{params:{...P,...E}})).data),m=s.useMemo(()=>d&&n?.data?[n.data]:Array.isArray(n?.data)?n.data:[],[n?.data,d]);return{meta:s.useMemo(()=>n?.meta??{},[n?.meta]),workflows:m,isLoading:D,status:_,refetch:r}}},38566:(h,g,t)=>{t.d(g,{c:()=>P});var s=t(74081),e=t(72450),l=t(93415),M=t(84366),O=t(10701),c=t(32370);const d=(0,e.ZP)(l.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`,E=(0,e.ZP)(l.x)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,P=({children:n,icon:D,..._})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.i,{}),(0,s.jsx)(E,{as:"button",background:"primary100",padding:5,..._,children:(0,s.jsxs)(O.k,{children:[(0,s.jsx)(d,{"aria-hidden":!0,background:"primary200",children:D}),(0,s.jsx)(l.x,{paddingLeft:3,children:(0,s.jsx)(c.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:n})})]})})]})},76827:(h,g,t)=>{t.d(g,{Z:()=>l});var s=t(74081);const e=M=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,s.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=e}}]);
