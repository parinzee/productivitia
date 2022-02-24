module.exports = {
  extends: ["next", "prettier"],
  rules: { "react/no-unescaped-entities": 0 },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
};
