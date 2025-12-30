# Micro Frontend with Qiankun

这是一个基于 qiankun和module federation 的微前端项目，使用qiankun去集成应用级别的微前端项目集成，而且各个子应用，包括主应用可以通过module federation去实现组件级别的共享和集成。

## 项目结构

```
micro-qiankun/
├── packages/
│   ├── hostapp/      # 主应用 (端口: 3000)
│   ├── subapp1/      # react子应用1 (端口: 3001)
│   └── subapp2/      # react子应用2 (端口: 3002)
│   └── subapp3/      # vue子应用3 (端口: 3003)
│   └── subapp4/      # vue子应用4 (端口: 3004)
├── pnpm-workspace.yaml
└── package.json
```

## 安装依赖

```bash
pnpm install
```

## 开发模式

启动所有应用（需要分别启动）：

```bash
# 终端1 - 启动主应用
pnpm --filter hostapp dev

# 终端2 - 启动子应用1
pnpm --filter subapp1 dev

# 终端3 - 启动子应用2
pnpm --filter subapp2 dev

# 终端4 - 启动子应用3
pnpm --filter subapp3 dev

# 终端5 - 启动子应用4
pnpm --filter subapp4 serve
```

## 访问应用

- 主应用: http://localhost:3000
- 子应用1: http://localhost:3001
- 子应用2: http://localhost:3002
- 子应用3: http://localhost:3003
- 子应用4: http://localhost:3004

在主应用中导航到 `/subapp1` 或 `/subapp2` 或 `/subapp3` 或 `/subapp4` 来加载对应的子应用。

## 构建

```bash
pnpm run build:all
```

## 技术栈

- **主应用**: React 18 + Vite + qiankun
- **子应用**: React 18 + Vite + vite-plugin-qiankun
- **包管理**: pnpm workspace
- **module federation**: 主应用和子应用之间通过 module federation 实现通信和共享

