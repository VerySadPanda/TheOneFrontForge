module.exports = {
    setupFiles: ['<rootDir>/tests/testSetup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: { '\\.(css|less|scss|sass)$': '<rootDir>/tests/styleMock.js' },
};
