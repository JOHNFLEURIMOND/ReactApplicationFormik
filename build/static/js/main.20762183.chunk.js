(this["webpackJsonpmern-formik"]=this["webpackJsonpmern-formik"]||[]).push([[0],{139:function(e,t,a){e.exports=a(314)},314:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(129),s=a.n(n),i=a(12),m=a(13),o=a(17),c=a(14),d=a(18),u=a(138),h=a(4),p=a(133),E=a.n(p),N=a(134),f=a.n(N),b=a(135),g=a(317),v=a(318),O=a(319),q=a(320),I=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"txt"},l.a.createElement("label",Object.assign({htmlFor:"FeedbackForm-"},this.props.name,{className:"txt-l txt-l--sm"}),this.props.title?this.props.title:void 0),l.a.createElement("textarea",Object.assign({rows:10,name:this.props.name,className:this.props.error?"txt-f txt-f--sm txt-f--err":"txt-f txt-f--sm",placeholder:this.props.placeholder,value:this.props.value,id:"FeedbackForm-"},this.props.name,{onChange:this.props.onChange,onBlur:this.props.onBlur})))}}]),t}(l.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"txt m-b300"},l.a.createElement("label",Object.assign({htmlFor:"FeedbackForm-"},this.props.name,{className:"txt-l txt-l--sm"}),this.props.title,this.props.required&&l.a.createElement("span",{className:"t--req","aria-hidden":"true"}," ","Required")),l.a.createElement("input",Object.assign({name:this.props.name,className:this.props.error?"txt-f txt-f--sm txt-f--err":"txt-f txt-f--sm",placeholder:this.props.placeholder,value:this.props.value,id:"FeedbackForm-"},this.props.name,{type:"text",required:this.props.required,onChange:this.props.onChange,onBlur:this.props.onBlur})),this.props.error&&l.a.createElement("div",{className:"t--subinfo t--err m-t100"},this.props.error))}}]),t}(l.a.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("label",{className:"cb"},l.a.createElement("input",{name:this.props.name,value:this.props.value,required:this.props.required,type:"checkbox",className:"cb-f",onChange:this.props.onChange,onBlur:this.props.onBlur,checked:this.props.checked}),this.props.error&&l.a.createElement("div",{className:"t--subinfo t--err m-t100"},this.props.error),l.a.createElement("span",{className:"cb-l"},this.props.title))}}]),t}(l.a.Component),C=/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]\u200c\u200b)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]\u200c\u200b|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i,F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("nav",{className:"nv-s nv-s--c"},l.a.createElement("ul",{className:"nv-s-l"},l.a.createElement("li",{className:"nv-s-l-i"},l.a.createElement("a",{className:" nv-s-l-b",href:"https://johnfleurimond.com"},"Fleurimond")),l.a.createElement("li",{className:"nv-s-l-i"},l.a.createElement("a",{className:"nv-s-l-a nv-s-l-a--active",href:"https://johnfleurimond.com",title:"Report a Problem"},"Fleurimond")),l.a.createElement("li",{className:"nv-s-l-i"},l.a.createElement("a",{href:"https://github.com/JOHNFLEURIMOND",title:"Github",className:"nv-s-l-a"},"Github")),l.a.createElement("li",{className:"nv-s-l-i"},l.a.createElement("a",{href:"https://twitter.com/tcodemonger",title:"Twitter",className:"nv-s-l-a"},"Twitter")),l.a.createElement("li",{className:"nv-s-l-i"},l.a.createElement("a",{href:"https://www.linkedin.com/in/john-fleurimond/",className:"nv-s-l-a",title:"Linked"},"Linkedin")))),l.a.createElement(g.a,null,l.a.createElement("div",{className:"mn"},l.a.createElement("div",{className:"b b--b"},l.a.createElement("div",{className:"str  str--r"},l.a.createElement("div",{className:"str-c"},l.a.createElement("div",{className:"str-t"},"John Fleurimond")))))),l.a.createElement(v.a,null,l.a.createElement(O.a,null,l.a.createElement(q.a,{xs:"3"}),l.a.createElement(q.a,null),l.a.createElement(q.a,{xs:"auto"},l.a.createElement("div",{className:"b b-c p-a700"},l.a.createElement(u.a,{initialValues:{firstName:"",middleName:"",lastName:"",address:"",unit:"",state:"",city:"",zip:"",phone:"",email:"",confirmEmail:"",typeOfDegree:"",degreeAttained:"",educationalInstitution:"",otherInformation:"",comments:""},validationSchema:h.object().shape({firstName:h.string().required("Your First Name Is Required!").min(2,"Your First Name Needs To Be Valid"),lastName:h.string().required("Your Last Name Is Required!").min(2,"Your Last Name Needs To Be Valid"),email:h.string().email().required("Your Email Is Required!"),confirmEmail:h.string().email().required("Your Confirm Email Is Required!").oneOf([h.ref("email",void 0)],"Make Sure Emails Match!"),StreetAddress:h.string().min(2,"Your Address Needs To Be Valid"),unit:h.string().min(1),city:h.string().required("Your City Name Is Required!").min(3),state:h.string().required("Your State Name Is Required!"),phone:h.string().matches(C,"Your Phone Number Is Not Valid").required("Your State Name Is Required!"),zip:h.string().required("Zip Code Is Required").matches(new RegExp(/^\d{5}$/),"Zip Codes Contains 5 Digits"),typeOfDegree:h.string().required("Type of Degree Is Required!").min(2,"Type of Degree Needs To Be Valid"),degreeAttained:h.string().required("Degree Attained Is Required!").min(2,"Degree Attained Needs To Be Valid"),educationalInstitution:h.string().required("EducationalInstitution Is Required!").min(2,"Educational Institution Needs To Be Valid"),otherInformation:h.string().min(2,"Other Information Needs To Be Valid"),comments:h.string().required()}),onSubmit:function(e,t){setTimeout((function(){f.a.post("http://localhost:8080/api/form",e,t).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)})),console.log({values:e,actions:t}),alert(JSON.stringify(e,null,2)),t.setSubmitting(!1)}),400)},render:function(t){var a=t.isSubmitting,r=t.handleSubmit,n=t.values,s=t.handleChange,i=t.errors,m=t.touched,o=t.handleBlur,c=t.dirty;t.handleReset;return l.a.createElement(b.Animated,{animationInDelay:0,animationIn:"slideInUp",animationOut:"slideOutDown",isVisible:!0},l.a.createElement("div",{className:"mn p-a700"},l.a.createElement("div",{className:"b b-c p-a700"},l.a.createElement("div",{className:"str"},l.a.createElement("div",{className:"str-c"},l.a.createElement("h1",{className:"ta-c p-h200 t--intro"},"Email Me"))),l.a.createElement("div",{className:"b b-c p-a700"}),l.a.createElement("form",{action:"http://localhost:8080/api/form",method:"POST",onSubmit:r},l.a.createElement("div",{className:"g"},l.a.createElement("div",{className:"sel"},l.a.createElement("label",{htmlFor:"FeedbackForm-".concat(e.props.name),className:"txt-l txt-l--sm"},"Prefix"," "),l.a.createElement("div",{className:"sel-c sel-c--thin",style:{marginRight:14}},l.a.createElement("select",{className:"sel-f sel-f--thin"},l.a.createElement("option",null,"Mr"),l.a.createElement("option",null,"Mrs"),l.a.createElement("option",null,"Miss"),l.a.createElement("option",null,"Mx")))),l.a.createElement("div",{className:"g--3 m-b300"},l.a.createElement(y,{title:"First Name",name:"firstName",placeholder:"First Name",value:n.firstName,onChange:s,error:m.firstName&&i.firstName,onBlur:o,required:!0})),l.a.createElement("div",{className:"g--1 m-b300"},l.a.createElement(y,{title:"Initial",name:"middleName",placeholder:"Middle Initial",value:n.middleName,onChange:s,error:m.middleName&&i.middleName,onBlur:o})),l.a.createElement("div",{className:"g--6 m-b300"},l.a.createElement(y,{title:"Last Name",name:"lastName",placeholder:"Last Name",value:n.lastName,onChange:s,error:m.lastName&&i.lastName,onBlur:o,required:!0}))),l.a.createElement("div",{className:"g"},l.a.createElement("div",{className:"g--9 m-b300"},l.a.createElement(y,{title:"Street Address",name:"StreetAddress",placeholder:"Street Address",value:n.address,onChange:s,error:m.address&&i.address,onBlur:o,required:!0})),l.a.createElement("div",{className:"g--3 m-b300"},l.a.createElement(y,{title:"Unit",name:"unit",placeholder:"Unit or Apartment #",value:n.unit,onChange:s,error:m.unit&&i.unit,onBlur:o}))),l.a.createElement("div",{className:"g"},l.a.createElement("div",{className:"g--7 m-b300"},l.a.createElement(y,{title:"City",name:"city",placeholder:"City",value:n.city,onChange:s,error:m.city&&i.city,onBlur:o,required:!0})),l.a.createElement("div",{className:"g--2 m-b300"},l.a.createElement(y,{title:"State",name:"state",placeholder:"State",value:n.state,onChange:s,error:m.state&&i.state,onBlur:o,required:!0})),l.a.createElement("div",{className:"g--3 m-b300"},l.a.createElement(y,{title:"Zip",name:"zip",placeholder:"Zip Code",value:n.zip,onChange:s,error:m.zip&&i.zip,onBlur:o,required:!0}))),l.a.createElement(y,{title:"Phone",name:"phone",placeholder:"Phone Number",value:n.phone,onChange:s,error:m.phone&&i.phone,onBlur:o}),l.a.createElement(y,{title:"Email",name:"email",placeholder:"Email",value:n.email,onChange:s,error:m.email&&i.email,required:!0,onBlur:o}),l.a.createElement(y,{title:"Confirm Email",name:"confirmEmail",placeholder:"Confirm Email",value:n.confirmEmail,onChange:s,error:m.confirmEmail&&i.confirmEmail,onBlur:o,required:!0}),l.a.createElement("hr",{className:"hr hr--sq"}),l.a.createElement(y,{title:"Type of Degree",name:"typeOfDegree",placeholder:"Type of Degree",value:n.typeOfDegree,onChange:s,error:m.typeOfDegree&&i.typeOfDegree,onBlur:o}),l.a.createElement(y,{title:"Degree Attained",name:"degreeAttained",placeholder:"Degree Attained",value:n.degreeAttained,onChange:s,error:m.degreeAttained&&i.degreeAttained,onBlur:o}),l.a.createElement(y,{title:"Educational Institution",name:"educationalInstitution",placeholder:"Educational Institution",value:n.educationalInstitution,onChange:s,error:m.educationalInstitution&&i.educationalInstitution,onBlur:o}),l.a.createElement(y,{title:"Other Information",name:"otherInformation",placeholder:"Other Information",value:n.otherInformation,onChange:s,error:m.otherInformation&&i.otherInformation,onBlur:o}),l.a.createElement("label",{htmlFor:"FeedbackForm-".concat(e.props.name),className:"txt-l txt-l--sm"},"Love"," "),l.a.createElement(x,null),l.a.createElement("label",{htmlFor:"FeedbackForm-".concat(e.props.name),className:"txt-l txt-l--sm"},"Like"," "),l.a.createElement(x,null),l.a.createElement("label",{htmlFor:"FeedbackForm-".concat(e.props.name),className:"txt-l txt-l--sm"},"Dislike"," "),l.a.createElement(x,null),l.a.createElement("label",{htmlFor:"FeedbackForm-".concat(e.props.name),className:"txt-l txt-l--sm"},"Throw It Away"," "),l.a.createElement(x,null),l.a.createElement("hr",{className:"hr hr--sq"}),l.a.createElement("h2",{className:"ta-c p-h200 t--intro"},"Please note it might take 1-3 days to respond back. Please still fill this form out and I will get back to you ASAP!"),l.a.createElement("hr",{className:"hr hr--sq"}),l.a.createElement(I,{name:"comments",placeholder:"Other Comments You Would Like Us to Know.",value:n.comments,onChange:s,onBlur:o}),l.a.createElement("div",{className:"b"},l.a.createElement("div",{className:"m-v400 m-h200"},l.a.createElement("button",{disabled:!c||a,onClick:n.handleSubmit,type:"submit",className:"btn btn--c btn--br"},"Send Message")))))))}}))),l.a.createElement(q.a,{xs:"3"}))),l.a.createElement("div",{className:"mn"},l.a.createElement("div",{className:"b b--b b--fw"},l.a.createElement("div",{className:"b-c"},l.a.createElement("div",{className:"sh sh--w"},l.a.createElement("h2",{className:"sh-title"},E()().format("llll")))))),l.a.createElement("footer",{className:"ft"},l.a.createElement("div",{className:"ft-c"},l.a.createElement("ul",{className:"ft-ll ft-ll--r"},l.a.createElement("li",{className:"ft-ll-i"},l.a.createElement("a",{href:"http://www.cityofboston.gov/311/",className:"ft-ll-a lnk--yellow"},l.a.createElement("span",{className:"ft-ll"},"Made With Love From "),l.a.createElement("span",{className:"tablet--hidden"}," - "),"Boston,Ma"," "))),l.a.createElement("ul",{className:"ft-ll"},l.a.createElement("li",{className:"ft-ll-i"},l.a.createElement("a",{href:"https://johnfleurimond.com",className:"ft-ll-a"},"John Fleurimond")),l.a.createElement("li",{className:"ft-ll-i"},l.a.createElement("a",{href:"https://twitter.com/tcodemonger",className:"ft-ll-a"},"Twitter")),l.a.createElement("li",{className:"ft-ll-i"},l.a.createElement("a",{href:"https://github.com/JOHNFLEURIMOND",className:"ft-ll-a"},"Github"))))))}}]),t}(r.Component);a(313);s.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.20762183.chunk.js.map