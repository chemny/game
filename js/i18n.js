const translations = {
    zh: {
        'page-title': 'BetaSAI - AI工具导航',
        // 导航
        'nav-all': '全部',
        'nav-hot': '热门',
        'nav-chat': '聊天工具',
        'nav-image': '图像生成',
        'nav-video': '视频创作',
        'nav-text': '文本处理',
        'nav-audio': '语音合成',
        'nav-dev': '开发工具',
        'nav-marketing': '营销工具',
        'nav-productivity': '生产力',
        'nav-education': '学习教育',
        'nav-design': '设计工具',

        // 英雄区域
        'hero-title': 'AI工具导航',
        'hero-description': '我们精选了500+优质AI工具，帮助你快速找到适合的AI应用',

        // 统计
        'stats-tools': 'AI工具',
        'stats-categories': '分类',
        'stats-users': '月访问量',

        // 区块标题
        'section-hot': '热门AI工具',
        'section-hot-desc': '最受欢迎的AI工具',
        'section-chat': '聊天工具',
        'section-chat-desc': '智能对话和语言模型应用',
        'section-image': '图像生成工具',
        'section-image-desc': '将你的创意转化为视觉作品的AI工具',
        'section-video': '视频创作工具',
        'section-video-desc': 'AI驱动的视频创作和编辑工具',
        'section-text': '文本处理工具',
        'section-text-desc': 'AI写作和内容创作工具',
        'section-audio': '语音合成工具',
        'section-audio-desc': 'AI语音和音频处理工具',
        'section-dev': '开发工具',
        'section-dev-desc': 'AI驱动的开发和编程工具',
        'section-marketing': '营销工具',
        'section-marketing-desc': '商业和营销相关的AI工具',
        'section-productivity': '生产力工具',
        'section-productivity-desc': '提升工作效率的AI工具',
        'section-education': '教育工具',
        'section-education-desc': '学习和教育相关的AI工具',
        'section-design': '设计工具',
        'section-design-desc': 'AI驱动的设计和创意工具',

        // 通用元素
        'pricing-free': '免费',
        'pricing-paid': '付费',
        'pricing-freemium': '免费增值',
        'badge-new': '新品',
        'badge-hot': '热门',
        'visit-btn': '访问网站',

        // 页脚
        'footer-about-title': '关于我们',
        'footer-about': 'BetaSAI致力于发现和分享最好的AI工具，帮助用户提升工作效率。',
        'footer-contact-title': '联系方式',
        'footer-contact': '合作或建议请通过以下方式联系：',
        'footer-copyright': '© 2024 BetaSAI. 保留所有权利。'
    },
    en: {
        'page-title': 'BetaSAI - AI Tools Navigation',
        // Navigation
        'nav-all': 'All',
        'nav-hot': 'Popular',
        'nav-chat': 'Chat',
        'nav-image': 'Image Generation',
        'nav-video': 'Video Creation',
        'nav-text': 'Text Processing',
        'nav-audio': 'Audio Synthesis',
        'nav-dev': 'Development',
        'nav-marketing': 'Marketing',
        'nav-productivity': 'Productivity',
        'nav-education': 'Education',
        'nav-design': 'Design',

        // Hero section
        'hero-title': 'AI Tools Navigation',
        'hero-description': "We've curated 500+ high-quality AI tools to help you quickly find the right AI applications",

        // Stats
        'stats-tools': 'AI Tools',
        'stats-categories': 'Categories',
        'stats-users': 'Monthly Users',

        // Section titles
        'section-hot': 'Popular AI Tools',
        'section-hot-desc': 'Most popular and widely used AI tools',
        'section-chat': 'Chat Tools',
        'section-chat-desc': 'AI dialogue and language model applications',
        'section-image': 'Image Generation Tools',
        'section-image-desc': 'AI tools to transform your ideas into visual works',
        'section-video': 'Video Creation Tools',
        'section-video-desc': 'AI-powered video creation and editing tools',
        'section-text': 'Text Processing Tools',
        'section-text-desc': 'AI writing and content creation tools',
        'section-audio': 'Audio Synthesis Tools',
        'section-audio-desc': 'AI voice and audio processing tools',
        'section-dev': 'Development Tools',
        'section-dev-desc': 'AI-powered development and coding tools',
        'section-marketing': 'Marketing Tools',
        'section-marketing-desc': 'AI tools for business and marketing',
        'section-productivity': 'Productivity Tools',
        'section-productivity-desc': 'AI tools to improve work efficiency',
        'section-education': 'Education Tools',
        'section-education-desc': 'AI tools for learning and education',
        'section-design': 'Design Tools',
        'section-design-desc': 'AI-powered design and creative tools',

        // Common elements
        'pricing-free': 'Free',
        'pricing-paid': 'Paid',
        'pricing-freemium': 'Freemium',
        'badge-new': 'New',
        'badge-hot': 'Hot',
        'visit-btn': 'Visit Website',

        // Footer
        'footer-about-title': 'About Us',
        'footer-about': 'BetaSAI is dedicated to discovering and sharing the best AI tools to help users improve work efficiency.',
        'footer-contact-title': 'Contact',
        'footer-contact': 'For cooperation or suggestions, please contact us through:',
        'footer-copyright': '© 2024 BetaSAI. All rights reserved.'
    }
};

// 语言切换处理函数
function switchLanguage(lang) {
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 更新所有需要翻译的文本
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            // 对于标题标签特殊处理
            if (element.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // 更新 HTML lang 属性
    document.documentElement.lang = lang;

    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言设置
document.addEventListener('DOMContentLoaded', () => {
    // 获取保存的语言设置或默认为中文
    const savedLang = localStorage.getItem('preferred-language') || 'zh';
    switchLanguage(savedLang);

    // 添加语言切换按钮事件监听
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });
}); 