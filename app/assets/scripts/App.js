import '../styles/styles.css';
import 'lazysizes';
import './modules/chat.js';
import './modules/dataFetcher.js';
// import './modules/pagination.js';
// import './modules/ulrParser.js';
// import './modules/selected-main.js';
//import './modules/post.json';
// import './modules/recentPost.js';
// import './modules/RecentPostItem.js';
// import './modules/post.js';
// import './modules/community.js';
// import './modules/render.js';
import './modules/darkmode.js';
// import './modules/filter.js';

// import './component/template.js';
import './session_ram/app.mjs';
if(module.hot) {
    module.hot.accept();
}