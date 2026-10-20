# AI Lab

个人全栈练手项目：前端 React + TypeScript，后端 Spring Boot（Java 21）。
项目主题待定，见 [`docs/01-requirements/`](docs/01-requirements/)。

## 目录

```
ai-lab/
├── web/        前端：React 19 + TypeScript + Vite
├── server/     后端：Spring Boot 4 + Java 21 + Maven（自带 mvnw，无需单独安装 Maven）
└── docs/       项目文档（需求 → 架构 → 接口 → 决策）
```

## 本地启动

需要：Node 20+、JDK 21。

```bash
# 1. 启动后端（http://localhost:8090）
cd server
./mvnw spring-boot:run        # Windows CMD/PowerShell 用 mvnw.cmd spring-boot:run

# 2. 启动前端（http://localhost:5173）
cd web
npm install
npm run dev
```

打开 http://localhost:5173 ，页面显示"后端 ai-lab-server 状态：UP"即表示前后端已打通。

## 接口约定

- 所有后端接口以 `/api` 开头；
- 开发时由 Vite 代理把 `/api` 转发到 `localhost:8090`（见 `web/vite.config.ts`），前端只写相对路径。
