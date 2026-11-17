export const skills=[
{id:'java',name:'Java',cat:'Backend',use:'Primary language for backend work, including the Mall and Mental Health projects.',project:'Virtual Digital Mall',rel:['spring','jdbc','mysql']},
{id:'spring',name:'Spring Boot',cat:'Backend',use:'Builds REST APIs and application structure.',project:'Virtual Digital Mall',rel:['java','security','rest','mysql']},
{id:'security',name:'Spring Security',cat:'Backend',use:'Role-based access: separate user and admin permissions.',project:'Virtual Digital Mall',rel:['spring','rest']},
{id:'rest',name:'REST APIs',cat:'Backend',use:'Admin-only product CRUD and public browsing endpoints.',project:'Virtual Digital Mall',rel:['spring','react','mysql']},
{id:'jdbc',name:'JDBC',cat:'Backend',use:'Connects Java code to relational databases.',project:'Backend work',rel:['java','sql','mysql']},
{id:'sql',name:'SQL',cat:'Database',use:'Stores users, moods and conversation history.',project:'Mental Health Assistant',rel:['mysql','jdbc']},
{id:'mysql',name:'MySQL',cat:'Database',use:'Product and user data storage.',project:'Virtual Digital Mall',rel:['sql','spring','jdbc']},
{id:'react',name:'React',cat:'Frontend',use:'Interfaces that talk to backend APIs.',project:'Full-stack work',rel:['js','rest','html']},
{id:'js',name:'JavaScript',cat:'Frontend',use:'Interactivity in web apps.',project:'This portfolio',rel:['react','html']},
{id:'html',name:'HTML & CSS',cat:'Frontend',use:'Semantic, responsive markup and styling.',project:'This portfolio',rel:['js','react']},
{id:'python',name:'Python',cat:'AI & ML',use:'Language for the ML projects.',project:'DeepShield, MockMate',rel:['flask','tf','opencv','sk']},
{id:'flask',name:'Flask',cat:'AI & ML',use:'Web layer: uploads, authentication, dashboards.',project:'DeepShield, MockMate',rel:['python','tf']},
{id:'tf',name:'TensorFlow / Deep Learning',cat:'AI & ML',use:'Ensemble of EfficientNetB0, ResNet50 and Xception.',project:'DeepShield',rel:['python','opencv','sk']},
{id:'opencv',name:'OpenCV',cat:'AI & ML',use:'Video and image handling.',project:'MockMate',rel:['python','tf']},
{id:'sk',name:'Scikit-learn',cat:'AI & ML',use:'Classical machine learning.',project:'ML coursework',rel:['python','tf']},
{id:'git',name:'Git & GitHub',cat:'Tools',use:'Version control and team collaboration.',project:'All projects',rel:['docker']},
{id:'docker',name:'Docker',cat:'Tools',use:'Containers, used during my internship.',project:'Augment Infotech internship',rel:['git','spring']}]
export const cats=['Backend','Database','Frontend','AI & ML','Tools']
