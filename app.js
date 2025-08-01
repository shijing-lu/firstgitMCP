const { createApp } = Vue

createApp({
    data() {
        return {
            name: '姚宇航',
            title: 'Java工程师',
            contactInfo: {
                location: '江苏',
                email: '3129446848@qq.com',
                phone: '17786505040',
                id: 'yyh264047',
                birth: '2004/02'
            },
            education: [{
                degree: '学士',
                school: '江苏大学',
                major: '物联网工程',
                time: '2021/09 - 2025/06',
                achievements: [
                    '核心课程成绩：JAVA(5.0/5.0)、数据库(3.2/5.0)、数据库课设(4.5/5.0)、程序设计(3.3/5.0)',
                    '实践经历：国家三等奖学金、校第七届社团活动节社长',
                    '获得成果：院优秀学生、院优秀干部、第三好学生',
                    '实践任职：国家三等奖学金、国家励志奖学金、院级单项奖、美国四六级证书'
                ]
            }],
            skills: [
                '熟悉Java SE（IO/NIO、反射、注解、Lambda）、熟悉JVM内存模型、垃圾回收机制',
                '熟悉Spring生态：Spring Boot自动配置原理、Spring Security和JWT实现、权限注解控制、MyBatis Plus增强功能、二级缓存优化',
                '熟悉Java并发、包括线程池、锁机制、并发容器及CompletableFuture异步编程',
                '熟悉常用设计模式，如工厂模式、单例模式、代理模式、策略模式',
                '熟悉MySQL、事务、索引设计、慢查询分析和处理、熟悉Redis缓存技术、包括淘汰策略、持久化优策略、Lua脚本等',
                '熟悉git、maven、Docker等工具的使用，熟悉linux系统、熟悉RestFul API'
            ],
            projects: [{
                name: '个人博客',
                time: '2024/04 - 2024/06',
                description: '参考CSDN、博客园等业界领先的博客平台，独立设计并开发了一个个人博客网站。核心功能包括用户登录、文章编辑与发布、文章浏览、点赞收藏以及文章搜索等。',
                techStack: ['Java', 'Spring Boot', 'Spring Security', 'Maven', 'MySQL', 'MyBatis', 'Redis', 'Docker'],
                highlights: [
                    'RBAC动态权限：基于Spring Security实现用户-角色-权限三层控制，支持实时权限更新（如管理员权限变更即时生效）。',
                    'JWT无状态登录：结合Redis集合管理token（如令牌校验）实现Token主动失效，解决分布式场景下的会话管理难题。',
                    '缓存性能提升：通过Redis缓存热文章，使用ZSet维护Top 100的阅览文章，降低数据库访问压力。',
                    '功能模块优化：通过ProceedingJoinPoint记录请求参数，执行时间及返回结果。日志存储至MySQL数据库持久化。',
                    '部署运维优化：使用Dockerfile定义Nginx+MySQL+Redis环境，通过docker-compose.yml实现一键部署。'
                ]
            }, {
                name: '智能餐厅',
                time: '2024/11 - 2025/01',
                description: '开发了一套全栈智能餐厅系统，整合餐饮管理与智能化服务功能，该系统支持用户通过Web端和小程序实现订餐、菜品自动识别、人脸识别支付以及各种评价等。',
                techStack: ['Spring Boot', 'WebSocket', 'Docker'],
                highlights: [
                    '利用Spring Boot框架设计并实现了订单管理、菜品管理和库存管理模块，集成微信支付功能。',
                    '通过WebSocket技术实现八桌以上就餐并发功能，实现八桌以上就餐功能。',
                    '引入Docker容器化技术完成应用部署，实现了环境隔离与弹性扩展，保障服务高可用性。'
                ]
            }],
            selfEvaluation: '热衷计算机行业，经终得对前沿技术的敏锐度，具备快速学习新技能并将其落地实践的能力，并擅长通过二次开发优化现有框架或工具以满足个性化需求，兴趣多元，设计、编程、运动、游戏、音乐等'
        }
    }
}).mount('#app')
