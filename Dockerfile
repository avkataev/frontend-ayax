# Используем официальный Node.js образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Устанавливаем pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Копируем только package-файлы для установки зависимостей
COPY package.json pnpm-lock.yaml ./

# Устанавливаем зависимости
RUN pnpm install --frozen-lockfile

# Копируем исходники приложения
COPY . .

# Экспонируем порт dev сервера Nuxt
EXPOSE 3000

# Команда для разработки
CMD ["pnpm", "dev", "--hostname", "0.0.0.0"]