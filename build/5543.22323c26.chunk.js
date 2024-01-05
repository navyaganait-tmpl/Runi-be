"use strict";(self.webpackChunkruno=self.webpackChunkruno||[]).push([[5543],{27997:(A,E,s)=>{s.d(E,{A:()=>c});var t=s(74081),d=s(72450),m=s(93415);const O=(0,d.ZP)(m.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:o})=>o?"auto 1fr":"1fr"};
`,D=(0,d.ZP)(m.x)`
  overflow-x: hidden;
`,c=({sideNav:o,children:_})=>(0,t.jsxs)(O,{hasSideNav:Boolean(o),children:[o,(0,t.jsx)(D,{paddingBottom:10,children:_})]})},75543:(A,E,s)=>{s.r(E),s.d(E,{SettingsPage:()=>p,default:()=>z});var t=s(74081),d=s(27279),m=s(73354),O=s(27875),D=s(48102),c=s(74758),o=s(27997),_=s(10701),L=s(93415),T=s(32370),y=s(23298),M=s(74577),P=s(2548),l=s(87006),x=s(59082),I=s(6078),B=s(364),R=s(61020),h=s(40464),i=s(46487),J=s(31855),V=s(29206),U=s(61815),K=s(43433),k=s(71563),w=s(47853),q=s(50547),ss=s(74063),ts=s(10124);const W=e=>e,j={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},b=(e,n)=>(0,U.ZP)(e,r=>{switch(n.type){case"GET_DATA_SUCCEEDED":{r.initialData=n.data,r.modifiedData=n.data;break}case"ON_CHANGE":{K(r,["modifiedData",...n.keys.split(".")],n.value);break}default:return e}}),p=()=>{const{formatMessage:e}=(0,R.Z)(),{lockApp:n,unlockApp:r}=(0,l.o1)(),S=(0,l.lm)(),{get:Z,put:G}=(0,l.kY)();(0,l.go)();const[{initialData:N,modifiedData:g},v]=(0,d.useReducer)(b,j,W),{data:f,isLoading:F,refetch:H}=(0,h.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:a}}=await Z("/upload/settings");return a}});d.useEffect(()=>{f&&v({type:"GET_DATA_SUCCEEDED",data:f})},[f]);const C=I(N,g),{mutateAsync:Q,isLoading:X}=(0,h.useMutation)({async mutationFn(a){return G("/upload/settings",a)},onSuccess(){H(),S({type:"success",message:{id:"notification.form.success.fields"}})},onError(a){console.error(a)}}),Y=async a=>{a.preventDefault(),!C&&(n(),await Q(g),r())},u=({target:{name:a,value:$}})=>{v({type:"ON_CHANGE",keys:a,value:$})};return(0,t.jsxs)(m.o,{tabIndex:-1,children:[(0,t.jsx)(B.q,{title:e({id:(0,i.g)("page.title"),defaultMessage:"Settings - Media Libray"})}),(0,t.jsxs)("form",{onSubmit:Y,children:[(0,t.jsx)(O.T,{title:e({id:(0,i.g)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:(0,t.jsx)(D.z,{disabled:C,loading:X,type:"submit",startIcon:(0,t.jsx)(x.Z,{}),size:"S",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,i.g)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),(0,t.jsx)(c.D,{children:F?(0,t.jsx)(l.dO,{}):(0,t.jsx)(o.A,{children:(0,t.jsx)(_.k,{direction:"column",alignItems:"stretch",gap:12,children:(0,t.jsx)(L.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(_.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(_.k,{children:(0,t.jsx)(T.Z,{variant:"delta",as:"h2",children:e({id:(0,i.g)("settings.blockTitle"),defaultMessage:"Asset management"})})}),(0,t.jsxs)(y.r,{gap:6,children:[(0,t.jsx)(M.P,{col:6,s:12,children:(0,t.jsx)(P.s,{"aria-label":"responsiveDimensions",checked:g.responsiveDimensions,hint:e({id:(0,i.g)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:e({id:(0,i.g)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{u({target:{name:"responsiveDimensions",value:a.target.checked}})}})}),(0,t.jsx)(M.P,{col:6,s:12,children:(0,t.jsx)(P.s,{"aria-label":"sizeOptimization",checked:g.sizeOptimization,hint:e({id:(0,i.g)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:e({id:(0,i.g)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{u({target:{name:"sizeOptimization",value:a.target.checked}})}})}),(0,t.jsx)(M.P,{col:6,s:12,children:(0,t.jsx)(P.s,{"aria-label":"autoOrientation",checked:g.autoOrientation,hint:e({id:(0,i.g)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:e({id:(0,i.g)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:e({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:e({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{u({target:{name:"autoOrientation",value:a.target.checked}})}})})]})]})})})})})]})]})},z=()=>(0,t.jsx)(l.O4,{permissions:i.P.settings,children:(0,t.jsx)(p,{})})}}]);
