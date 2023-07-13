"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[6204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={title:"Containers",sidebar_position:2},r="Containers",s={unversionedId:"introduction/containers",id:"introduction/containers",title:"Containers",description:'A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.',source:"@site/docs/introduction/containers.md",sourceDirName:"introduction",slug:"/introduction/containers",permalink:"/av1-wiki.github.io/docs/introduction/containers",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/introduction/containers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Containers",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prologue",permalink:"/av1-wiki.github.io/docs/introduction/prologue"},next:{title:"Codecs",permalink:"/av1-wiki.github.io/docs/introduction/codecs"}},l={},c=[{value:"MP4 / M4V",id:"mp4--m4v",level:2},{value:"MOV",id:"mov",level:2},{value:"MKV / MKA / MKS / MK3D",id:"mkv--mka--mks--mk3d",level:2},{value:"WebM",id:"webm",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"containers"},"Containers"),(0,i.kt)("p",null,'A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.'),(0,i.kt)("h2",{id:"mp4--m4v"},"MP4 / M4V"),(0,i.kt)("p",null,"The most common container out there on the internet and supported almost universally as long as it contains the right codecs, has limited maximum amount of streams. The supported video codecs are H.264, H.265, H.266, DivX, Xvid, VP9 (Unofficial, hacky), and AV1 (Unofficial, hacky). For audio codecs it's AAC, USAC (xHE-AAC), MP3, FLAC (Unofficial), Opus (Unofficial, hacky). For subtitles only MPEG-4 Timed Text (TTXT) is supported."),(0,i.kt)("p",null,"The best tool to work with this container is MP4Box, but FFmpeg also works."),(0,i.kt)("h2",{id:"mov"},"MOV"),(0,i.kt)("p",null,"Pretty much the same as MP4 but less supported in general and was made in mind for Apple Quicktime, also supports ProRes."),(0,i.kt)("h2",{id:"mkv--mka--mks--mk3d"},"MKV / MKA / MKS / MK3D"),(0,i.kt)("p",null,"Also known as Matroska, allows an unlimited amount of video/audio/subtitle streams and any codec that probably still exists in Area 51, you can put literally anything in there and it won't even care, MPEG-2/DivX/H.266/Theora/Thor/RealVideo/MJPEG/AVS3/AMR-WB, you name it. All around best container for working with if you have the choice."),(0,i.kt)("h2",{id:"webm"},"WebM"),(0,i.kt)("p",null,"A container made with web streaming in mind, basically stripped down MKV that only allows FOSS codecs such as VP8/VP9/AV1 for video, Vorbis/Opus for audio, and WebVTT for subtitles."))}p.isMDXComponent=!0}}]);