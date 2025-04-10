// Configuração de conexão com o banco de dados MySQL
const dbConfig = {
  host: import.meta.env.VITE_DB_HOST || '204.216.166.233',
  user: import.meta.env.VITE_DB_USER || 'ragnarok',
  password: import.meta.env.VITE_DB_PASSWORD || 'ragnarok',
  database: import.meta.env.VITE_DB_NAME || 'ragnarok',
  port: import.meta.env.VITE_DB_PORT || 3306,
  // Configurações adicionais
  enableHCaptcha: import.meta.env.VITE_ENABLE_HCAPTCHA === 'true' || false,
  hCaptchaSiteKey: import.meta.env.VITE_HCAPTCHA_SITE_KEY || '',
  hCaptchaSecretKey: import.meta.env.VITE_HCAPTCHA_SECRET_KEY || ''
};

export default dbConfig;