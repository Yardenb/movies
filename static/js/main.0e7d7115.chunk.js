(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),o=a.n(i),l=(a(70),a(16)),c=a.n(l),s=a(20),m=a(7),u=a(8),d=a(10),p=a(9),h=a(11),v=a(173),f=a(172),b=a(17),E=a(59),g=a(13),O={moviesToDisplay:[],pickedMovie:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_MOVIE":return Object(g.a)({},e,{moviesToDisplay:e.moviesToDisplay.concat(n)});case"PICK_MOVIE":return Object(g.a)({},e,{pickedMovie:n});case"UPDATE_MOVIE":return Object(g.a)({},e,{moviesToDisplay:e.moviesToDisplay.map(function(e){return e.id===n.id?n:e})});case"REMOVE_MOVIE":return Object(g.a)({},e,{moviesToDisplay:e.moviesToDisplay.filter(function(e){return e.id!==n})});default:return e}},N={},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ERR":return Object(g.a)({},n);default:return e}},w={modalContent:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MODAL":return Object(g.a)({},e,{modalContent:n});default:return e}},C=Object(b.c)({movies:y,errors:j,general:T}),k=[E.a],M=Object(b.e)(C,Object(b.d)(b.a.apply(void 0,k),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),D=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"heading-primary"},r.a.createElement("h1",{className:"heading-primary--main"},"herolo cinema"),r.a.createElement("p",{className:"heading-primary--sub"},"all your favorite movies in one place")))},_=a(171),R=a(174),A=a(15),x=a.n(A),I=Object(R.a)(function(e){return r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",null," ",r.a.createElement(_.a,{className:x()("nav__link",{active:"/"===e.location.pathname}),to:"/"},"Home")," "),r.a.createElement("li",null," ",r.a.createElement(_.a,{className:x()("nav__link",{active:"/about"===e.location.pathname}),to:"/about"},"About")," ")))}),S=a(6),P=function(e){return{type:"SET_MODAL",payload:e}},Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).setModal=function(){a.props.setModal("add")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"add-section"},r.a.createElement("div",{className:"add-container"},r.a.createElement("h2",{className:"add-title"},"Add a movie"),r.a.createElement("div",{className:"btn btn-add",onClick:this.setModal},"Add")))}}]),t}(n.Component),G=Object(S.b)(null,function(e){return{setModal:function(t){e(P(t))}}})(Y),L=a(63),V=a.n(L),q=a(25),B=a.n(q),U=function(e){return V.a.get("http://www.omdbapi.com/?apikey=ff880c11&t="+e)},F=function(){var e=["The+Princess+Bride","Toy+Story","Thor ","Trainspotting","Guardians+Of+The+Galaxy","Seven","The+Matrix","The+Lord+Of+The+Rings:+The+Two+Towers","Fight+Club","Pulp+Fiction","The+Dark+Knight","wonder+woman"].map(function(e){return U(e)});return Promise.all(e).then(function(e){return e.map(function(e){var t=e.data;return{Title:t.Title,Year:t.Year,Runtime:t.Runtime,Genre:t.Genre,Director:t.Director,Poster:t.Poster,id:B.a.v4()}})}).then(function(e){return e}).catch(function(e){return console.log("error!",e)})},z=function(){return function(){var e=Object(s.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F().then(function(e){e.forEach(function(e){return t({type:"ADD_MOVIE",payload:e})})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},X=function(e){return{type:"PICK_MOVIE",payload:e}},K=Object(S.b)(null,function(e){return{setModal:function(t){e(P(t))},pickMovie:function(t){e(X(t))}}})(function(e){var t=e.movie;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__top"},r.a.createElement("img",{src:t.Poster,alt:"poster",className:"card-poster"}),r.a.createElement("div",{className:"btn btn-card btn-left",onClick:function(){e.pickMovie(t),e.setModal("edit")}},"Edit"),r.a.createElement("div",{className:"btn btn-card btn-right",onClick:function(){e.pickMovie(t),e.setModal("delete")}},"x")),r.a.createElement("div",{className:"card__bottom"},r.a.createElement("div",{className:"movie-title"},t.Title," "),r.a.createElement("div",{className:"movie-sub-details"},t.Year)))}),J=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movies.moviesToDisplay.map(function(e,t){return r.a.createElement(K,{key:t,movie:e})});return r.a.createElement("section",{className:"movies-section"},r.a.createElement("h2",{className:"movies-title"},"Edit your movies"),r.a.createElement("div",{className:"movies-container"},e))}}]),t}(n.Component),W=Object(S.b)(function(e){return{movies:e.movies,errors:e.errors}})(J),$=a(38),H=a.n($),Q=a(24),Z=a(4),ee=a.n(Z),te=function(e){return function(t){(function(e){var t={};return e.Title=ee.a.trim(e.Title),e.Director=ee.a.trim(e.Director),e.Genre=ee.a.trim(e.Genre),ee.a.isEmpty(e.Title)&&(t.Title="Title field is required"),ee.a.whitelist(e.Title.toLowerCase(),"abcdefghijklmnopqrstuvwxyz")||(t.Title="Title should include at least one letter"),ee.a.isEmpty(e.Director)&&(t.Director="Director field is required"),ee.a.isEmpty(e.Genre)&&(t.Genre="Genre field is required"),ee.a.isAfter(e.Year,ee.a.toDate("1900")+"")||(t.Year="Year should be after 1900"),ee.a.toDate(e.Year)||(t.Year="Year is not valid"),ee.a.isEmpty(e.Runtime)&&(t.Runtime="Runtime field is required"),M.getState().movies.moviesToDisplay.find(function(t){return t.Title.toLowerCase()===ee.a.whitelist(e.Title.toLowerCase(),"abcdefghijklmnopqrstuvwxyz ")&&t.id!==e.id})&&(t.Title="Title already exist"),Promise.resolve(t)})(e).then(function(e){t({type:"SET_ERR",payload:e})})}},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={Title:"",Year:"",Director:"",Genre:"",Runtime:"",Poster:"",id:"",modalTitle:"Add a movie",errors:{},isvAlid:!1},a.componentDidMount=function(){if("edit"===a.props.general.modalContent){var e=a.props.movies.pickedMovie;a.setState(Object(g.a)({},e,{modalTitle:"Edit your movie"}))}},a.checkInput=Object(s.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return delete(t=Object.assign({},a.state)).modalTitle,delete t.isvAlid,delete t.errore,e.next=6,a.props.checkErr(t);case 6:n=a.props.errors,a.setState({errors:n}),0===Object.keys(n).length&&(r=a.createMovieObj(),"add"===a.props.general.modalContent?a.props.addMovie(r):a.props.updateMovie(r),a.setState({isValid:!0}),setTimeout(function(){a.props.setModal("")},2e3));case 9:case"end":return e.stop()}},e)})),a.handleChange=function(e){a.setState(Object(Q.a)({},e.target.name,e.target.value))},a.handleCancel=function(){a.props.pickMovie(null),a.props.setModal("")},a.createMovieObj=function(){var e=Object.assign({},a.state);return delete e.errors,delete e.modalTitle,delete e.isvAlid,"add"===a.props.general.modalContent&&(e.id=B.a.v4()),ee.a.isURL(e.Poster)&&null!=e.Poster.match(/\.(jpeg|jpg|gif|png)$/)||(e.Poster="https://images.freeimages.com/images/large-previews/5eb/movie-clapboard-1184339.jpg"),e.Title=ee.a.whitelist(e.Title.toLowerCase(),"abcdefghijklmnopqrstuvwxyz "),e.Title=e.Title.split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" "),e},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("h2",{className:"modal-title"},this.state.modalTitle),r.a.createElement("form",{noValidate:!0},r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Title:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Title",onChange:this.handleChange,placeholder:"Title",value:this.state.Title,className:"form-input"}),r.a.createElement("div",{className:x()("error-msg",{hidden:!this.state.errors.Title})},this.state.errors.Title))),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Year:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Year",onChange:this.handleChange,placeholder:"Year",value:this.state.Year,className:"form-input"}),r.a.createElement("div",{className:x()("error-msg",{hidden:!this.state.errors.Year})},this.state.errors.Year))),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Director:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Director",onChange:this.handleChange,placeholder:"Director",value:this.state.Director,className:"form-input"}),r.a.createElement("div",{className:x()("error-msg",{hidden:!this.state.errors.Director})},this.state.errors.Director))),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Genre:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Genre",onChange:this.handleChange,placeholder:"Genre",value:this.state.Genre,className:"form-input"}),r.a.createElement("div",{className:x()("error-msg",{hidden:!this.state.errors.Genre})},this.state.errors.Genre))),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Runtime:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Runtime",onChange:this.handleChange,placeholder:"Runtime in minutes",value:this.state.Runtime,className:"form-input"}),r.a.createElement("div",{className:x()("error-msg",{hidden:!this.state.errors.Runtime})},this.state.errors.Runtime))),r.a.createElement("div",{className:"form-item"},r.a.createElement("label",{className:"form-label"},"Poster:"),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{name:"Poster",onChange:this.handleChange,placeholder:"Optional, url",value:this.state.Poster,className:"form-input"})))),r.a.createElement("div",{className:"modal-actions"},r.a.createElement("div",{className:"btn btn-cancel",onClick:this.handleCancel},"Cancel"),r.a.createElement("div",{className:"btn btn-apply",onClick:this.checkInput},"Ok")),r.a.createElement("div",{className:x()("success-msg",{hidden:!this.state.isValid})},"The movie was ","add"===this.props.general.modalContent?"added":"edited"))}}]),t}(n.Component),ne=Object(S.b)(function(e){return{general:e.general,movies:e.movies,errors:e.errors}},function(e){return{setModal:function(t){e(P(t))},pickMovie:function(t){e(X(t))},checkErr:function(t){e(te(t))},addMovie:function(t){e(function(e){return{type:"ADD_MOVIE",payload:e}}(t))},updateMovie:function(t){e(function(e){return{type:"UPDATE_MOVIE",payload:e}}(t))}}})(ae),re=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(){a.props.removeMovie(a.props.movies.pickedMovie.id),a.props.pickMovie(),a.props.setModal()},a.handleCancel=function(){a.props.pickMovie(),a.props.setModal()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal-content"},r.a.createElement("h2",{className:"modal-title"},"Delete?"),r.a.createElement("div",{className:"modal-actions"},r.a.createElement("div",{className:"btn btn-cancel",onClick:this.handleCancel},"Cancel"),r.a.createElement("div",{className:"btn btn-apply",onClick:this.handleDelete},"Ok")))}}]),t}(n.Component),ie=Object(S.b)(function(e){return{movies:e.movies}},function(e){return{removeMovie:function(t){e(function(e){return{type:"REMOVE_MOVIE",payload:e}}(t))},pickMovie:function(){e(X(null))},setModal:function(){e(P(""))}}})(re);H.a.setAppElement("#root");var oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).handleClose=function(){a.props.pickMovie(null),a.props.setModal("")},a.determineContent=function(){switch(a.props.general.modalContent){case"add":case"edit":return r.a.createElement(ne,null);case"delete":return r.a.createElement(ie,null);default:return r.a.createElement("h1",null,"no content chosen")}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.determineContent();return r.a.createElement(H.a,{isOpen:!!this.props.general.modalContent,contentLabel:"Example Modal",onRequestClose:this.handleClose,shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#f4f4f4"}}},e)}}]),t}(n.Component),le=Object(S.b)(function(e){return{general:e.general}},function(e){return{setModal:function(t){e(P(t))},pickMovie:function(t){e(X(t))}}})(oe),ce=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"home-container"},r.a.createElement(G,null),r.a.createElement(W,null),r.a.createElement(le,null))}}]),t}(n.Component),se=Object(S.b)(function(e){return{general:e.general}})(ce),me=function(){return r.a.createElement("section",{className:"about-section"},r.a.createElement("div",{className:"about-container"},r.a.createElement("div",{className:"about-content"},r.a.createElement("h2",{className:"about-title"},"About this page"),r.a.createElement("div",{className:"about-body"},r.a.createElement("p",{className:"about-p"},"This page is using OMDb API, react, redux, redux-thunk, axios, validator, classnames and uuid."),r.a.createElement("p",{className:"about-p"},"For the design I have decided not to use React-Bootstrap or React-Materialize in this project. The input validation form was made with validator and classnames. I have used flexbox, some CSS3 features such as clip-path. Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons",target:"_blank"},"Smashicons")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon",target:"_blank"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY")," and transformed into favicon by ",r.a.createElement("a",{href:"https://www.favicon-generator.org/",target:"_blank"},"favicon-generator.org")),r.a.createElement("p",{className:"about-p"},"I hope you've enjoyd this page. You can watch some of my other projects on my ",r.a.createElement("a",{href:"https://yardenb.github.io/yarden-portfolio/",target:"_blank"},"portfolio website")," and I'm available for any question at ",r.a.createElement("a",{href:"mailto:yardenbesh@gmail.com"},"yardenbesh@gmail.com"))))))},ue=function(){return r.a.createElement("div",{className:"loading-container"},r.a.createElement("div",{className:"loader"}),r.a.createElement("p",{className:"loading__text"},"Loading..."))},de=(a(169),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.componentDidMount=Object(s.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,M.dispatch(z());case 3:a.setState({isLoading:!1});case 4:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(I,null),this.state.isLoading?r.a.createElement(ue,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{path:"/",component:se,exact:!0}),r.a.createElement(f.a,{path:"/about",component:me}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S.a,{store:M},r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){e.exports=a(170)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.0e7d7115.chunk.js.map