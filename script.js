// Roadmap data structure
const roadmapData = [
    {
        step: "Etapa 1",
        title: "Landing Page",
        status: "completed",
        statusText: "✅ Concluído",
        icon: "layout",
        description: "Criação da landing page inicial para apresentação do produto, validação da ideia e coleta de interesse.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80"
    },
    {
        step: "Etapa 2",
        title: "Conexão com Backend",
        status: "completed",
        statusText: "✅ Concluído",
        icon: "server",
        description: "Integração do frontend com backend próprio para persistência de dados, eventos e lógica do sistema.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
    },
    {
        step: "Etapa 3",
        title: "Integração com Evolution API",
        status: "in-progress",
        statusText: "🟡 Em desenvolvimento",
        icon: "message-square",
        description: "Conexão com a Evolution API para envio e recebimento de mensagens via WhatsApp, utilizando webhooks e eventos em tempo real.",
        image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&auto=format&fit=crop&q=80"
    },
    {
        step: "Etapa 4",
        title: "Integração com API do ChatGPT",
        status: "in-progress",
        statusText: "🟡 Em desenvolvimento",
        icon: "bot",
        description: "Integração com a API do ChatGPT para análise de mensagens, interpretação de contexto e geração de respostas inteligentes.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80"
    },
    {
        step: "Etapa 5",
        title: "Treinamento da IA para o Bot",
        status: "production",
        statusText: "🚧 Em produção",
        icon: "brain",
        description: "Fase final do produto, focada no treinamento contínuo da IA com dados reais para respostas naturais, contextuais e personalizadas dentro do bot.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80"
    }
];

// Generate timeline items
function generateTimeline() {
    const timeline = document.getElementById('timeline');
    
    roadmapData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item status-${item.status}`;
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="card-header">
                    <div class="card-icon">
                        <i data-lucide="${item.icon}"></i>
                    </div>
                    <div class="card-header-text">
                        <div class="card-step">${item.step}</div>
                        <h2 class="card-title">${item.title}</h2>
                        <span class="status-badge ${item.status}">${item.statusText}</span>
                    </div>
                </div>
                <p class="card-description">${item.description}</p>
                <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Add smooth parallax effect to header
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.3}px)`;
            header.style.opacity = 1 - (scrolled / 500);
        }
    });
}

// Add hover sound effect (optional enhancement)
function initCardInteractions() {
    const cards = document.querySelectorAll('.timeline-content');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('click', function() {
            // Add subtle click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    generateTimeline();
    
    // Wait for timeline to be rendered
    setTimeout(() => {
        initScrollAnimations();
        initCardInteractions();
        initParallax();
    }, 100);
});

// Add smooth scroll behavior for better UX
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Performance optimization: Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
