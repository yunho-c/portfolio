import{i as h,o,c as l,y as p,e,l as u,d as f,u as g,m as w,a as b,s as _,j as c,f as a,x as y,t as x}from"./index.f758a8fa.js";import{_ as v,a as T}from"./MainPhoto_TapKeyboard.7d958c88.js";const k={class:"prose prose-sm m-auto text-left"},L=p('<h1>TipLets &amp; WristLets</h1><h2>What</h2><p>Small, wireless, battery-powered haptic devices for fingertips (<em>TipLets</em>) and wrist (<em>WristLets</em>).</p><p><strong>Gallery</strong></p><ol><li><p>TipLets Components</p></li><li><p>WristLets PCB Render</p></li></ol><h2>Why</h2><h3>TipLets</h3><aside> \u{1F4A1} Omitted because the research results have not yet been published. </aside><h3>WristLets</h3><p>This prototype was inspired by Jung et al.&#39;s wearable modular haptic patch. It is a device made of flexible PCB that wraps around the wrist and is used for object finding assistance through directional haptic patterns.</p><h2>How</h2><h3>TipLets</h3><p>Each unit contains six <code>DRV2605</code> haptic motor drivers and a rechargeable coin cell battery on a small 30mm * 40mm board, and is composed of a commercial ESP32 board that is connected in a shield form and is responsible for calculation and wireless communication. From idea drafting, component selection, circuit design, PCB artwork, production request, and SMT assembly process were directly carried out.</p><aside><div class="font-semibold leading-10">Keywords: <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Bluetooth Low Energy</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">ESP32</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Linear Resonant Actuator (LRA)</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Ball Grid Array (BGA)</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border">PlatformIO</div></div></aside><h3>WristLets</h3><p>Using the <code>TLC5940</code> 16-channel LED driver, it contains a total of 32 haptic motors across the wrist. Designed for daisy-chaining (mechanically and electrically). Therefore, if necessary, we plan to conduct various sensory replacement experiments by connecting the size of various body parts such as the waist and legs.</p><h3>Learn More</h3><p>Part of Internship @ Asan Medical Center Biomedical Research Institute HEART Lab</p>',18),D=[L],$={__name:"TipLetsWristLets",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",k,D))}},E=$,B={class:"prose prose-sm m-auto text-left"},C=e("h1",null,"Details: Live Braille",-1),I=e("h3",null,"What",-1),P=e("p",null,[e("strong",null,"Gallery")],-1),W=e("ol",null,[e("li",null,[e("p",null,"Version 1 Demo"),e("iframe",{class:"w-full aspect-video rounded-xl shadow-xl",src:"https://www.youtube.com/embed/j7fZV_u3UVg?rel=0&color=white",title:"Live Braille (Real-Time Text Detection & Braille Translation) Demo #1",color:"white",frameborder:"0",allow:"autoplay; clipboard-write; encrypted-media;",allowfullscreen:""})]),e("li",null,[e("p",null,"Version 2 Demo"),e("p",{class:"op30"},"[work in progress]")])],-1),G=p('<p>It is an auxiliary program that recognizes text within the field of view in real time and translates it into Braille or reads it aloud.</p><h3>Why</h3><p>Currently, I feel that software for the visually impaired is divided into extremes. On the one hand, there is a product line optimized for user accessibility, such as Microsoft Seeing AI, which implements easily available functions on common hardware (i.e., smartphones). And on the other side of that, there are products like OrCAM that embodied the latest technologies (wearable form factor, command recognition, scene text detection, interaction through hand tracking, etc.) and gave up economic accessibility (i.e., own hardware &amp; software).</p><p>Naturally, many companies started developing with the idea that they would like to develop open source software with a large number of useful features and excellent user experience that can be used immediately as AR glasses, which are already in development, are released in the future.</p><h3>How</h3><p>To speed things up to a level where real-time operation is possible, we use Baidu\u2019s Paddle framework and the PaddleOCR library, which enables multi-language scene text detection. Support for translation to Grade I English braille using the PyBraille library. We plan to develop our own multilingual braille translation library in the future. We are overhauling the code with the goal of improving usability through intuitive gestural interactions.</p><aside><div class="font-semibold leading-10">Keywords: <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">ONNX</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">OpenCV</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Inference Optimization</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Text-to-Speech</div></div></aside><h3>Learn More</h3><p>[GitHub Repository]</p>',9),M=[C,I,P,W,G],A={__name:"LiveBraille",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",B,M))}},U=A,j={class:"prose prose-sm m-auto text-left"},S=e("h2",null,"GT-Planner",-1),V=e("h3",null,"What",-1),H=e("p",null,"Undergraduate course planning aid and visualization website for students in Georgia Tech.",-1),R=e("p",null,[e("strong",null,"Gallery")],-1),z=e("ol",null,[e("li",null,[u("Demo "),e("iframe",{class:"w-full aspect-video rounded-xl shadow-xl",src:"https://www.youtube.com/embed/sUs1p9UC82c?rel=0&color=white",title:"Live Braille (Real-Time Text Detection & Braille Translation) Demo #1",color:"white",frameborder:"0",allow:"autoplay; clipboard-write; encrypted-media;",allowfullscreen:""})])],-1),K=p('<h3>Why</h3><p>For college students, registering for classes is like a war. But it doesn\u2019t end there. The process of planning the courses to take for the next 1-2 years is just as agonizing as the course registration itself. With the intertwined relationship between prerequisite courses and various other variables (availability of classes by season, exchange student schedule, professor review, practical difficulty of lectures, etc.) You will go through many experiences. Unfortunately, undergraduate students are engulfed in these concerns during the season right before the end of the semester when they are busy studying. We started developing it so that students can plan a better life.</p><h3>How</h3><p>Graphviz graph creation library and JavaScript interface, <code>d3-Graphviz</code>, are implemented as main axes. We use Vue for basic frontend functionality. We use <code>Python</code>, <code>FastAPI</code>, and <code>MongoDB</code> for web crawling and data analysis. In the fall of 2022, it will be launched as a student council IT committee project, and a team will be formed to begin development in earnest.</p><aside><div class="font-semibold leading-10">Keywords: <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">VueJS</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">D3.js</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Graphviz</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">FastAPI &amp; Uvicorn</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Flask</div></div></aside><h3>Learn More</h3><p><a href="https://github.com/k2m5t2/gt-planner-prototype" target="_blank" rel="noopener">https://github.com/k2m5t2/gt-planner-prototype</a></p>',7),N=[S,V,H,R,z,K],F={__name:"GTPlanner",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",j,N))}},O=F,X={class:"prose prose-sm m-auto text-left"},q=e("h2",null,"ResearchHub",-1),J=e("h3",null,"What",-1),Y=e("p",null,"\uC870\uC9C0\uC544\uD14D \uC5F0\uAD6C\uC790\uB4E4\uC758 \uC0AC\uC6A9\uC790 \uC2E4\uD5D8 \uACFC\uC815\uC744 \uB2E8\uC21C\uD654\uD558\uAE30 \uC704\uD55C \uC5F0\uAD6C\uC790-\uC2E4\uD5D8\uC9C0\uC6D0\uC790 \uB9E4\uCE6D \uC6F9\uC0AC\uC774\uD2B8\uC785\uB2C8\uB2E4.",-1),Z=e("p",null,[e("strong",null,"Gallery")],-1),Q=e("ol",null,[e("li",null,[u("Demo "),e("iframe",{class:"w-full aspect-video rounded-xl shadow-xl",src:"https://www.youtube.com/embed/uS3wz7uhelo?rel=0&color=white",title:"Live Braille (Real-Time Text Detection & Braille Translation) Demo #1",color:"white",frameborder:"0",allow:"autoplay; clipboard-write; encrypted-media;",allowfullscreen:""})])],-1),ee=p('<h3>Why</h3><p><a href="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f9756e2-ea2b-4a52-8abe-3e43110d7183/Untitled.pdf" target="_blank" rel="noopener">Untitled</a></p><h3>How</h3><p>Uses <code>Vue</code>, <code>Vite</code> framework, <code>FastAPI</code>, <code>Python</code>, and <code>MongoDB</code>. To allow for collaboration within the team and later hosting and deployment, Docker was used to simplify building the runtime environment. Various UI mock-ups are created with Figma, and design is conducted through team discussions and user interviews. Leads a team of six undergraduate and graduate students.</p><aside><div class="font-semibold leading-10">Keywords: <div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Vue</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Vite</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">FastAPI</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">Python</div><div class="ml-4 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 bg-white rounded-full border">MongoDB</div></div></aside>',5),te=[q,J,Y,Z,Q,ee],oe={__name:"ResearchHub",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",X,te))}},ae=oe,se={class:"prose prose-sm m-auto text-left"},ne=p('<h2>PCB-sEMG</h2><img class="aspect-video object-cover rounded-lg hover:scale-102 transition-all duration-500 ease-in-out transform" src="'+v+'"><h3>What</h3><ul><li>\uBE44\uC8FC\uC5BC \uAC24\uB7EC\uB9AC <ol><li><p>\uC190\uC5D0 \uC7A5\uCC29</p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f968221a-a4c0-442e-afea-e61d3b4d3c5e/Untitled.jpeg" alt="Untitled"></p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2861aee5-a747-4aa7-ac11-8f1e41f08ac6/Untitled.jpeg" alt="Untitled"></p></li><li><p>leap hand pose</p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77a31b4d-a290-4c4f-b37c-13e5fde4cd06/Untitled.jpeg" alt="Untitled"></p></li><li><p>\uC2DC\uC0C1\uC2DD</p><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1acf5d4-b124-485b-a227-16695ed66980/Untitled.jpeg" alt="Untitled"></p></li></ol></li></ul><p>[one sentence summary]</p><h3>Why</h3><p><img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f76a3977-94fc-4368-a481-3028691352a9/Untitled.png" alt="Untitled"></p><p>Although electromyography (EMG) is old, it is a technology with a high barrier to entry. Although the HCI functions that can be made possible by using EMG are endless, it is not easy to find online articles dealing with EMG hardware and software development from an engineering point of view, even major books, so developers have to look into the papers themselves. Companies selling medical EMG hardware (i.e., Biometrics Ltd.) are usually expensive and far from open source, and cheap hobbyist-grade hardware (i.e., MyoWare) has poor performance and is also not open source. It is difficult to include in home-made hardware. There is an unmet need from wearable HCI device developers between the two ends of the price spectrum, and this project was launched to address this.</p><p>In the Georgia Institute of Technology CREATE-X Idea-to-Prototype class, we won 2nd place out of 40 teams.</p><h3>How</h3><p>It all started with the hypothesis, \u201CIs it possible to mass-manufacture inexpensively with high performance by using a solder pad coated with gold (electroless nickel immersion gold; ENIG) as a surface EMG electrode?\u201D We produced prototypes by manufacturing our own PCB, but due to successive failures, we changed our direction to implement hand pose estimation by making EMG wristbands with commercially available MyoWare hardware. After collecting hand pose-EMG data through the Leap Motion device, an RNN model was trained. Even though the visualization script was completed and there was no actual result, it achieved the result of winning the 2nd prize.</p>',11),ie=[ne],re={__name:"PCBEMG",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",se,ie))}},le=re,de="/Portfolio/assets/LC2D/LC2D_main.png",ce="/Portfolio/assets/LC2D/LC2D_Assembly.jpeg",he={class:"prose prose-sm m-auto text-left"},pe=e("h2",null,"LC2D",-1),ue=e("h3",null,"What",-1),me=e("p",null,"Least-Complexity 2D Gantry: simplitstic 2-axis gantry with minimal number of components",-1),fe=e("p",null,[e("strong",null,"Gallery")],-1),ge=e("ol",null,[e("li",null,[e("p",null,[u("Main View "),e("img",{class:"rounded-lg shadow-xl",src:de})])]),e("li",null,[e("p",null,[u("Assembly "),e("img",{class:"rounded-lg shadow-xl",src:ce})])]),e("li",null,[e("p",null,"Working Prototype"),e("iframe",{class:"w-full aspect-video rounded-xl shadow-xl",src:"https://www.youtube.com/embed/u4tKX-sRrv0?rel=0&color=white",title:"Live Braille (Real-Time Text Detection & Braille Translation) Demo #1",color:"white",frameborder:"0",allow:"autoplay; clipboard-write; encrypted-media;",allowfullscreen:""})])],-1),we=e("h3",null,"Why",-1),be=e("p",null,"I wanted to design a laser cutter/engraver that could be manufactured with minimal commercial parts (value). It requires a manufacturing cost of $200, compared to low-cost commercial diode laser cutters that start at around $400. Due to the risk of eye damage from diode lasers and the lack of laser experience, it was finished with a 2-axis lathe with whiteboard markers attached.",-1),_e=e("h3",null,"How",-1),ye=e("p",null,"Except for the motors, screws, 2020 aluminum, belts, and control boards, all 3D printed parts were used. The completed CAD file was open sourced to the Hackaday community.",-1),xe=e("h3",null,"GitHub or External Link",-1),ve=e("p",null,[e("a",{href:"https://hackaday.io/project/169347-lowest-complexity-laser-cutter",target:"_blank",rel:"noopener"},"https://hackaday.io/project/169347-lowest-complexity-laser-cutter")],-1),Te=[pe,ue,me,fe,ge,we,be,_e,ye,xe,ve],ke={__name:"LC2D",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",he,Te))}},Le=ke,De={class:"prose prose-sm m-auto text-left"},$e=p('<h2>TapVirtualXbox &amp; VirtualCADMouse</h2><p>[main photo: auto-played mp4]</p><h3>What</h3><ul><li><p>\uBE44\uC8FC\uC5BC \uAC24\uB7EC\uB9AC</p><p><a href="https://www.youtube.com/watch?v=knA5WmF07sk&amp;t=57s" target="_blank" rel="noopener">https://www.youtube.com/watch?v=knA5WmF07sk&amp;t=57s</a></p><p><a href="https://www.youtube.com/watch?v=NB5KgMTxs4k" target="_blank" rel="noopener">https://www.youtube.com/watch?v=NB5KgMTxs4k</a></p></li></ul><h3>Why</h3><p>This is an HCI experiment project using Tap Strap 2, a wearable mouse/keyboard input device.</p><h3>How</h3><p><strong>TapVirtualXbox</strong></p><p>The gesture recognition function was not implemented directly, but the Tap Strap SDK was used. Recreate an Xbox controller with the ViGEm library.</p><p><strong>VirtualCADMouse</strong></p><p>The Madgwick sensor fusion algorithm is used to recognize the posture of the IMU. Control various 3D modeling software using the PyAutoGUI library.</p><h3>Learn More</h3><p>Part of Internship @ Tap Systems Inc. (Summer 2020)</p>',13),Ee=[$e],Be={__name:"TapProjects",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",De,Ee))}},Ce=Be,Ie={class:"prose prose-sm m-auto text-left"},Pe=p('<h2>\uB450\uB4DC\uB9AC\uB2E4 \uC790\uD310 (Tap Keyboard)</h2><p><a href="https://www.notion.so/Details-a26d51f5d85248e7b8a875da99fb5965" target="_blank" rel="noopener"><img class="aspect-video object-cover hover:scale-102 transition-all duration-500 ease-in-out transform" src="'+T+'"></a></p><h3>What</h3><ul><li><p>\uBE44\uC8FC\uC5BC \uAC24\uB7EC\uB9AC</p><p><a href="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/34c5a7f5-c7f4-44af-8c78-1bb1a3b93db0/%E1%84%83%E1%85%AE%E1%84%83%E1%85%B3%E1%84%85%E1%85%B5%E1%84%83%E1%85%A1_%E1%84%8C%E1%85%A1%E1%84%91%E1%85%A1%E1%86%AB.pdf" target="_blank" rel="noopener">\u1103\u116E\u1103\u1173\u1105\u1175\u1103\u1161 \u110C\u1161\u1111\u1161\u11AB.pdf</a></p></li></ul><p>This is the Korean input layout of the Tap Strap 2, designed in consideration of intuitiveness and input efficiency.</p><h3>Why</h3><p>The most commonly used keyboard standard is the 108-button layout. On the other hand, the Tap Strap only measures whether each of the five fingers has been tapped. Even if you reduce it to 25 buttons that are actually in charge of language, the number of possible combinations is far fewer. So, tap multiple fingers at once to expand the number of digits. These include frequent tapping of multiple fingers for a single letter (finger fatigue), and difficulties in learning letter patterns. It was designed to solve this.</p><h3>How</h3><p>I am not familiar with this project as it was a high school student with no knowledge of design methodology and user interface design. It was conceived by referring to the frequency of Hangeul graphemes analyzed in the Twitter corpus and various beautiful Korean keyboard layouts (Cheonjiin, short vowel, three-beolsik, etc.).</p><h3><strong>GitHub or External Link</strong></h3><p>Part of Internship @ Tap Systems Inc. (Summer 2020)</p>',11),We=[Pe],Ge={__name:"TapKeyboard",setup(s,{expose:t}){return t({frontmatter:{meta:[]}}),h({meta:[]}),(r,d)=>(o(),l("div",Ie,We))}},Me=Ge,Se=f({__name:"[name]",props:{name:null},setup(s){const t=s,n=g(),i=w(),{t:r}=b();return _(()=>{i.setNewName(t.name)}),(d,m)=>(o(),l("div",null,[t.name==="TipLetsWristLets"?(o(),c(a(E),{key:0})):t.name==="LiveBraille"?(o(),c(a(U),{key:1})):t.name==="GTPlanner"?(o(),c(a(O),{key:2})):t.name==="ResearchHub"?(o(),c(a(ae),{key:3})):t.name==="PCBEMG"?(o(),c(a(le),{key:4})):t.name==="LC2D"?(o(),c(a(Le),{key:5})):t.name==="TapProjects"?(o(),c(a(Ce),{key:6})):t.name==="TapKeyboard"?(o(),c(a(Me),{key:7})):y("",!0),e("div",null,[e("button",{btn:"",m:"3 t6","text-sm":"",onClick:m[0]||(m[0]=Ae=>a(n).back())},x(a(r)("button.back")),1)])]))}});export{Se as default};