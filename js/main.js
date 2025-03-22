// 简单的分类筛选与交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 筛选按钮
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            // 实际项目中这里会添加筛选逻辑
        });
    });
    
    // 分类标签
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 平滑滚动到目标位置
            const targetId = this.getAttribute('href');
            if (targetId !== '#all') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // 搜索功能
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // 实际搜索逻辑
            console.log('搜索:', searchTerm);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
    
    // 加载更多按钮
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', function() {
        // 实际项目中这里会加载更多工具
        this.textContent = '正在加载...';
        setTimeout(() => {
            this.textContent = '没有更多工具了';
            this.disabled = true;
        }, 1000);
    });
}); 