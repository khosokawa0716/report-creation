module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // TypeScriptファイルの拡張子を指定
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // Jestがテストするファイルのパターンを指定
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx}'],
  // テスト時に使用するモジュール名のエイリアスを設定
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss)$': 'identity-obj-proxy',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  preset: 'ts-jest',
  // TypeScriptを使用するようにJestに指示する
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  // JestがTypeScriptの型情報を理解するためにTypeScriptの設定を指定する
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
